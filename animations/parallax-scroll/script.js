window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.parallax-card');
    const scrollPosition = window.pageYOffset;

    cards.forEach((card, index) => {
        const offset = index * window.innerHeight;
        const translateY = scrollPosition - offset;
        card.style.transform = `translateY(${translateY * 0.5}px)`;
    });
}); 