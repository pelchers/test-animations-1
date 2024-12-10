document.querySelector('.money-bag').addEventListener('click', function() {
    const emojisContainer = document.querySelector('.emojis');
    emojisContainer.innerHTML = ''; // Clear previous emojis

    for (let i = 0; i < 20; i++) {
        const emoji = document.createElement('span');
        emoji.textContent = Math.random() > 0.5 ? '💵' : '🪙';
        emoji.style.position = 'absolute';
        emoji.style.fontSize = '1.5rem';
        emoji.style.left = '50%';
        emoji.style.top = '50%';
        emoji.style.transform = 'translate(-50%, -50%)';
        emoji.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
        emoji.style.opacity = '0';

        emojisContainer.appendChild(emoji);

        // Randomize the angle and speed for more vertical shooting
        const angle = Math.random() * Math.PI / 4 - Math.PI / 8; // Narrower angle range for more vertical movement
        const speed = Math.random() * 200 + 100; // Random speed between 100 and 300

        setTimeout(() => {
            const x = Math.sin(angle) * speed * 0.5; // Swap x and y for -90 degree rotation
            const y = Math.cos(angle) * speed * -1; // Adjust y to move upwards
            emoji.style.transform = `translate(${x}px, ${y - 100}px)`; // Adjust y to move upwards
            emoji.style.opacity = '1';
        }, 0);

        setTimeout(() => {
            emoji.style.opacity = '0';
        }, 1000);
    }
}); 