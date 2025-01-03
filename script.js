// Function to generate a random key
function generateKey() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let key = '';
    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        key += characters[randomIndex];
    }
    return key;
}

// Check if the user has a valid hash parameter in the URL
function checkHash() {
    const urlParams = new URLSearchParams(window.location.search);
    const hash = urlParams.get('hash');
    const message = document.getElementById("message");
    const redeemedMessage = document.getElementById("redeemedMessage");
    const redeemedKey = document.getElementById("redeemedKey");

    // If hash exists, simulate key generation and show it
    if (hash) {
        // You can validate the hash against a server or predefined values in a real setup
        const key = generateKey(); // Generate a key for the user
        message.innerHTML = "Your task is complete! Here's your key:"; // Display message
        redeemedKey.innerText = key; // Show the generated key
        redeemedMessage.classList.remove("hidden"); // Reveal the key section
    } else {
        message.innerHTML = "You need to complete the Linkvertise task to redeem a key."; // Inform user
    }
}

// Call the checkHash function when the page loads
window.onload = checkHash;
