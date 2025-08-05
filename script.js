// Example: A simple countdown timer
const countdownElement = document.createElement('p');
document.querySelector('.container').appendChild(countdownElement);

let timeLeft = 10; // seconds

function updateCountdown() {
    countdownElement.textContent = `Redirecting in ${timeLeft} seconds...`;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        window.location.href = "main.html"; // Redirect to your main page
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
