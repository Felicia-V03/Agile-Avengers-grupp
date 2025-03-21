import { createElement } from "../utils/domUtils.js";

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

    if (window.location.pathname === '/receipt.html') {
        latestOrderDisplay(latestOrder);
    }

    return latestOrder;
}

export function checkUser() {
    const loggedInUserId = localStorage.getItem('currentUser');
    const latestOrder = getLatestOrder(); // Hämta den senaste ordern

    if (!latestOrder) {
        console.log("Ingen senaste order att visa.");
        return;
    }

    if (loggedInUserId) {
        updateUserOrderHistory(loggedInUserId, latestOrder);
    }
}

function updateUserOrderHistory(loggedInUserId, latestOrder) {
    const userList = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Hitta den aktuella användaren
    const userIndex = userList.findIndex(user => user.id === currentUser.id); // anta att användaren har ett id-fält

    if (userIndex !== -1) {
        if (!currentUser.orderHistory) {
            currentUser.orderHistory = [];
        }

        // Lägg till den senaste ordern till användarens orderhistorik
        currentUser.orderHistory.unshift(latestOrder);

        // Uppdatera användaren i användarlistan
        userList[userIndex] = currentUser;
        
        // Spara den uppdaterade användarlistan i localStorage
        localStorage.setItem('users', JSON.stringify(userList));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        console.log("Orderhistorik uppdaterad för användaren.");
    } else {
        console.log("Användare hittades inte.");
    }
}


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

    const orderList = document.createElement('ol');
    orderList.classList.add('order-summary-info');
    

    let totalSum = 0;

    order.items.forEach(item => {
        let listItem = document.createElement('li');
        let orderInfo = createElement('div');
        let productName = createElement('P');
        let amountItem = createElement('p');
        let unitPrice = createElement('p');
       
        orderInfo.classList.add('order-info');
        productName.classList.add('product-name');
        productName.textContent = `${item.Name}`;
        amountItem.classList.add('amount');
        amountItem.textContent = `${item.Antal} st.`;
        unitPrice.classList.add('unit-price');
        unitPrice.textContent = `${item.Price} SEK`;
        orderList.appendChild(listItem);
        listItem.appendChild(orderInfo);
        orderInfo.appendChild(productName);
        orderInfo.appendChild(amountItem);
        orderInfo.appendChild(unitPrice);
        

        totalSum += (item.Price * item.Antal) * 112 / 100;
    });

    orderContainer.appendChild(orderList);

    const totalElement = document.createElement('p');
    totalElement.textContent = `Totalt: ${totalSum.toFixed(0)} SEK`;
    totalElement.style.fontWeight = 'bold'; 
    const totalContainer = document.querySelector('.total')
    totalContainer.style.marginTop = '1rem'
    totalContainer.appendChild(totalElement);
}