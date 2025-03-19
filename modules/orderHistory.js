export function showOrderDetails() {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.order-h-item').forEach((order, index) => {
            order.addEventListener('click', () => {
                const details = document.querySelectorAll('.order-details')[index];

                if (details.style.display === 'none' || details.style.display === '') {
                    details.style.display = 'block';
                } else {
                    details.style.display = 'none';
                }
            });
        });
    });
}

export function showOrderHistory() {
    document.addEventListener('DOMContentLoaded', () => {
        const orderContainer = document.querySelector('.order-h-items');
        orderContainer.textContent = '';

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (!currentUser) {
            const noOrdersMessage = document.createElement('p');
            noOrdersMessage.textContent = 'Logga in för att se tidigare beställningar.';
            noOrdersMessage.style.fontFamily = 'var(--primary-font)';
            noOrdersMessage.style.color = 'var(--primary-text-color)';
            noOrdersMessage.style.textAlign = 'center';
            noOrdersMessage.style.padding = '1rem';
            orderContainer.appendChild(noOrdersMessage);
            return;
        }

        if (!currentUser.orderHistory || currentUser.orderHistory.length === 0) {
            const noOrdersMessage = document.createElement('p');
            noOrdersMessage.textContent = 'Du har inga tidigare beställningar.';
            noOrdersMessage.style.fontFamily = 'var(--primary-font)';
            noOrdersMessage.style.color = 'var(--primary-text-color)';
            noOrdersMessage.style.textAlign = 'center';
            noOrdersMessage.style.padding = '1rem';
            orderContainer.appendChild(noOrdersMessage);
            return;
        }

        const orders = currentUser.orderHistory;

        orders.forEach((order) => {
            const orderItem = document.createElement('div');
            orderItem.classList.add('order-h-item');

            const orderNumber = document.createElement('h3');
            orderNumber.classList.add('order-nmbr');
            orderNumber.textContent = `ORDER: ${order.orderNumber}`;

            const orderDate = document.createElement('h3');
            orderDate.classList.add('order-date');
            orderDate.textContent = order.date;

            orderItem.appendChild(orderNumber);
            orderItem.appendChild(orderDate);
            orderContainer.appendChild(orderItem);

            const orderDetails = document.createElement('div');
            orderDetails.classList.add('order-details');
            orderDetails.style.display = 'none';

            order.items.forEach(item => {
                const itemDetail = document.createElement('section');
                itemDetail.classList.add('order-more-details');

                const itemName = document.createElement('p');
                itemName.textContent = item.Name;

                const itemQuantity = document.createElement('p');
                itemQuantity.textContent = `x${item.Antal}`;

                const itemPrice = document.createElement('p');
                itemPrice.textContent = `${item.Price} SEK`;

                itemDetail.appendChild(itemName);
                itemDetail.appendChild(itemQuantity);
                itemDetail.appendChild(itemPrice);
                orderDetails.appendChild(itemDetail);
            });

            const totalSum = order.items.reduce((sum, item) => sum + item.Price * item.Antal, 0);
            const moms = totalSum * 0.20; 

            const totalSection = document.createElement('section');
            totalSection.classList.add('order-h-total');

            const totalDiv = document.createElement('div');
            totalDiv.classList.add('order-h-moms');

            const totalTitle = document.createElement('h3');
            totalTitle.textContent = `TOTALT: ${totalSum.toFixed(2)} SEK`;

            const momsText = document.createElement('p');
            momsText.textContent = `inkl ${moms.toFixed(2)} SEK moms`;

            totalDiv.appendChild(totalTitle);
            totalDiv.appendChild(momsText);
            totalSection.appendChild(totalDiv);

            const cartIcon = document.createElement('img');
            cartIcon.classList.add('cart-order');
            cartIcon.src = './assets/cart.svg';
            cartIcon.alt = 'kundvagn';

            totalSection.appendChild(cartIcon);
            orderDetails.appendChild(totalSection);

            orderContainer.appendChild(orderDetails);

            orderItem.addEventListener('click', () => {
                orderDetails.style.display = orderDetails.style.display === 'none' ? 'block' : 'none';
            });
        });
    });
}

