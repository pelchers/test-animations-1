document.querySelector('.thumbs-up').addEventListener('click', function() {
    this.style.animation = 'bounce 0.5s ease';
    setTimeout(() => {
        this.style.animation = '';
    }, 500);
}); 