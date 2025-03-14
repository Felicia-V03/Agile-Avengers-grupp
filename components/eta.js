
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
}