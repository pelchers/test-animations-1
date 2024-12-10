const particleContainer = document.querySelector('.particle-container');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = '0px';
    particle.style.bottom = `${Math.random() * 100}%`;
    particleContainer.appendChild(particle);

    const size = Math.random() * 5 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    const duration = Math.random() * 5 + 3;
    particle.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

setInterval(createParticle, 200);

document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .particle {
            position: absolute;
            background-color: white;
            border-radius: 50%;
            opacity: 0.7;
            animation: moveParticle linear infinite;
        }

        @keyframes moveParticle {
            0% {
                transform: translate(0, 0) scale(1);
            }
            50% {
                transform: translate(100vw, -100vh) scale(1.5);
            }
            100% {
                transform: translate(200vw, -200vh) scale(1);
            }
        }
    `;
    document.head.appendChild(style);
}); 