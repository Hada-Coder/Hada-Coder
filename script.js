// Generate a random key
function generateKey() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let key = '';
    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        key += characters[randomIndex];
    }
    return key;
}

// Check if the user has been redirected properly from Linkvertise
function checkRedirection() {
    const urlParams = new URLSearchParams(window.location.search);
    const isRedirected = urlParams.has('ref') && urlParams.get('ref') === 'linkvertise';

    const message = document.getElementById("message");
    const redeemedMessage = document.getElementById("redeemedMessage");
    const redeemedKey = document.getElementById("redeemedKey");

    if (isRedirected) {
        const key = generateKey();
        message.innerHTML = "Your task is complete! Here's your key:";
        redeemedKey.innerText = key;
        redeemedMessage.classList.remove("hidden");
    } else {
        message.innerHTML = "You need to complete the Linkvertise task to redeem a key.";
    }
}

// Call the checkRedirection function when the page loads
window.onload = checkRedirection;
