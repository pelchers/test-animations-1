document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.profile-card');
    
    card.addEventListener('click', () => {
        card.style.animation = 'none';
        void card.offsetWidth;
        card.classList.toggle('is-flipped');
        if (card.classList.contains('is-flipped')) {
            card.style.animation = 'floating-flipped 3s ease-in-out infinite';
        } else {
            card.style.animation = 'floating 3s ease-in-out infinite';
        }
    });
}); 