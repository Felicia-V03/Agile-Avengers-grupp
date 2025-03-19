export function getLatestOrder() {
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];

    if (orderHistory.length === 0) {
        console.log("Inga ordrar hittades.");
        return;
    }

    orderHistory.sort((a, b) => new Date(b.date) - new Date(a.date));

    const latestOrder = orderHistory[0];

    console.log("Senaste ordern:");
    console.log("Ordernummer:", latestOrder.orderNumber);
    console.log("Datum och tid:", latestOrder.date);
    console.log("Orderinnehåll:");

    latestOrder.items.forEach(item => {
        console.log(`- ${item.Name} (Antal: ${item.Antal}) - Pris: ${item.Price} SEK`);
    });

    const loggedInUserId = localStorage.getItem('currentUser');

    if (loggedInUserId) {
        updateUserOrderHistory(loggedInUserId, latestOrder);
    }

    latestOrderDisplay(latestOrder);
}

// function updateUserOrderHistory(username, email, telefon, password, latestOrder) {
//     const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};

//     if (
//         currentUser.username !== username || 
//         currentUser.email !== email || 
//         currentUser.telefon !== telefon || 
//         currentUser.password !== password
//     ) {
//         console.log(`Användarinformationen stämmer inte överens med det aktuella kontot.`);
//         return;
//     }

//     if (!currentUser.orderHistory) {
//         currentUser.orderHistory = [];
//     }

//     currentUser.orderHistory.unshift(latestOrder);

//     localStorage.setItem('currentUser', JSON.stringify(currentUser));

//     console.log(`Uppdaterad orderhistorik för användare ${username}.`);

//     const userList = JSON.parse(localStorage.getItem('users')) || [];

//     const userIndex = userList.findIndex(user => 
//         user.username === username || 
//         user.email === email || 
//         user.telefon === telefon
//     );

//     if (userIndex !== -1) {
//         userList[userIndex] = { ...userList[userIndex], ...currentUser };
//         userList.push({
//             username: username,
//             email: email,
//             telefon: telefon,
//             password: password,
//             orderHistory: [latestOrder]
//         });
//     }

//     localStorage.setItem('users', JSON.stringify(userList));
// }

function updateUserOrderHistory(userId, latestOrder) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};

    if (!currentUser.orderHistory) {
        currentUser.orderHistory = [];
    }

    currentUser.orderHistory.unshift(latestOrder);

    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    console.log(`Uppdaterad orderhistorik för användare ${userId}.`);

    // Uppdatera användarlistan
    const userList = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = userList.findIndex(user => user.id === userId); // Fixed typo here

    if (userIndex === currentUser) {
        if (!userList[userIndex].orderHistory) {
            userList[userIndex].orderHistory = [];
        }
        userList[userIndex].orderHistory.unshift(latestOrder);
    } else {
        userList.push({
            id: userId, // Fixed userId array issue here
            orderHistory: [latestOrder]
        });
    }

    localStorage.setItem('users', JSON.stringify(userList));
}

// function updateUserOrderHistory(userId, latestOrder) {
//     const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};

//     // Kontrollera om det finns ett aktuellt användarkonto och om användar-ID:n matchar
//     if (currentUser.id !== userId) {
//         console.log(`Användar-ID:t ${userId} matchar inte det aktuella användarkontot.`);
//         return; // Avbryt om användar-ID:n inte matchar
//     }

//     if (!currentUser.orderHistory) {
//         currentUser.orderHistory = [];
//     }

//     // Lägg till den senaste ordern i början av orderhistoriken
//     currentUser.orderHistory.unshift(latestOrder);

//     // Ta bort den gamla användardatan från localStorage
//     localStorage.removeItem('currentUser'); // Ta bort gammal data
//     // Lägg in den uppdaterade användardatan i localStorage
//     localStorage.setItem('currentUser', JSON.stringify(currentUser)); // Sätt den nya användardatan

//     console.log(`Uppdaterad orderhistorik för användare ${userId}.`);

//     // Uppdatera användarlistan
//     const userList = JSON.parse(localStorage.getItem('users')) || [];

//     // Ta bort användaren med samma ID från userList
//     const updatedUserList = userList.filter(user => user.id !== userId);

//     // Lägg till den uppdaterade användaren i listan
//     updatedUserList.push(currentUser);

//     // Uppdatera användarlistan i localStorage
//     localStorage.setItem('users', JSON.stringify(updatedUserList));

//     console.log(`Användare med ID ${userId} har ersatts i användarlistan.`);
// }


function latestOrderDisplay(order) {
    const orderContainer = document.querySelector('.order-list');
    orderContainer.textContent = ''; 

    const orderTitle = document.createElement('h3');
    orderTitle.textContent = `Senaste ordern: #${order.orderNumber}`;
    orderTitle.style.marginBottom = '1rem'
    orderContainer.appendChild(orderTitle);

    const orderDate = document.createElement('p');
    orderDate.textContent = `Datum: ${order.date}`;
    orderDate.style.fontWeight = 'bold'
    orderContainer.appendChild(orderDate);

    const orderList = document.createElement('ul');
    

    let totalSum = 0;

    order.items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.Name} - Antal: ${item.Antal} - Pris: ${item.Price} SEK`;
        listItem.style.listStyle = 'none'
        listItem.style.marginTop = '.5rem'
        orderList.appendChild(listItem);

        totalSum += item.Price * item.Antal;
    });

    orderContainer.appendChild(orderList);

    const totalElement = document.createElement('p');
    totalElement.textContent = `Totalt: ${totalSum} SEK`;
    totalElement.style.fontWeight = 'bold'; 
    const totalContainer = document.querySelector('.total')
    totalContainer.style.marginTop = '1rem'
    totalContainer.appendChild(totalElement);
}