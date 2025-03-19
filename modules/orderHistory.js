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
