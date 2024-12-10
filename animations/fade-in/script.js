document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('.fade-in-element');
    
    // Function to check if element is in viewport
    const isInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Function to handle scroll and show element
    const handleScroll = () => {
        if (isInViewport(element)) {
            element.classList.add('visible');
            window.removeEventListener('scroll', handleScroll);
        }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Check initial position
    handleScroll();
}); 