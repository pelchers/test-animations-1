const moneyContainer = document.querySelector('.money-container-v2');

function createMoneySign() {
    const moneySign = document.createElement('div');
    moneySign.classList.add('money-sign');
    moneySign.textContent = '💰';
    moneySign.style.left = `${50 + Math.random() * 10 - 5}%`;
    moneySign.style.bottom = '0%';
    moneyContainer.appendChild(moneySign);

    const duration = Math.random() * 5 + 4;
    moneySign.style.animation = `rise ${duration}s linear infinite, wiggle ${duration / 2}s ease-in-out infinite`;

    setTimeout(() => {
        moneySign.remove();
    }, duration * 1000);
}

setInterval(createMoneySign, 300);

document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .money-sign {
            position: absolute;
            font-size: 2rem;
        }

        @keyframes rise {
            0% {
                bottom: 0;
                opacity: 1;
            }
            100% {
                bottom: 100%;
                opacity: 0;
            }
        }

        @keyframes wiggle {
            0%, 100% {
                transform: translateX(0);
            }
            50% {
                transform: translateX(20px);
            }
        }
    `;
    document.head.appendChild(style);
}); 