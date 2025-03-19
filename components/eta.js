export function timeLeft(minutes) {
    let seconds = minutes * 60;

    let timeLeftMsg = document.querySelector('#timeLeftMsg');

    const countDown = setInterval(() => {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;

        timeLeftMsg.textContent = `ETA ${min}:${sec < 10 ? '0' : ''}${sec} MIN`;

        if (seconds <= 0) {
            clearInterval(countDown);
            timeLeftMsg.textContent = 'Din mat är klar!'
        }
        seconds--
    }, 1000);
}

export function randomOrderNmbr() {
    let orderNumber = localStorage.getItem('orderNumber');

    if (!orderNumber) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        orderNumber = '';

        for (let i=0; i<8; i++) {
            let randomNumber = Math.floor(Math.random() * characters.length);
            orderNumber += characters[randomNumber];
        }

        localStorage.setItem('orderNumber', orderNumber);
    }
    const confirmationElement = document.querySelector('#confirmationNmbr');
    if (confirmationElement) {
        confirmationElement.textContent = `#${orderNumber}`;
    }

    saveOrderToHistory(orderNumber);
}

function saveOrderToHistory(orderNumber) {
    // Get the cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Get the order history from localStorage
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];

    // Create a formatted date and time for the new order
    const now = new Date();
    const dateFormatter = new Intl.DateTimeFormat('sv-SE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // 24-hour format
    });

    const formattedDateTime = dateFormatter.format(now);

    // Create the new order object
    const newOrder = {
        orderNumber: orderNumber,
        items: cartItems,
        date: formattedDateTime,
    };

    // Add the new order to the order history
    orderHistory.push(newOrder);

    // Save the updated order history back to localStorage
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    console.log('Order saved to history:', newOrder);

    // Clear the cart after the order is placed
    localStorage.setItem('cart', JSON.stringify([]));
}
