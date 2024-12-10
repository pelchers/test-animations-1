// List of emojis to choose from
const emojis = [
    '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', // Face emojis
    '🎥', '🎬', '📷', '🎤', '🎧', // Content and video creation
    '💼', '📈', '📊', '💻', '📅', // Business-related
    '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚' // More face emojis
];

// Function to get a random emoji
function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

// Add the random emoji to each emoji card
document.addEventListener('DOMContentLoaded', () => {
    const emojiCards = document.querySelectorAll('.emoji');
    emojiCards.forEach(card => {
        const emoji = getRandomEmoji();
        card.textContent = emoji;
    });
}); 