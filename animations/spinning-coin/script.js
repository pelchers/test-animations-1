// JavaScript to add a random emoji to each coin

// List of emojis to choose from
const emojis = ['😀', '🎉', '💰', '🪙', '🌟', '🔥', '💎', '🎈', '🍀', '🎵'];

// Function to get a random emoji
function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

// Add the random emoji to each coin
document.addEventListener('DOMContentLoaded', () => {
    const coins = document.querySelectorAll('.coin');
    coins.forEach(coin => {
        const emoji = getRandomEmoji();
        coin.textContent = emoji;
    });
}); 