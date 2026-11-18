const particleContainer = document.getElementById("particles");

for (let i = 0; i < 60; i++) {
    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration =
        (5 + Math.random() * 10) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particleContainer.appendChild(particle);
}

/* =====================================
   SNAKE GAME
===================================== */

.snake-section {
    padding: 50px 20px;
    margin: 30px auto;
    text-align: center;
}

.snake-heading h2 {
    font-size: 30px;
    margin-bottom: 10px;
}

.snake-heading p {
    color: #777;
    margin-bottom: 30px;
}

.snake-card {
    max-width: 550px;
    margin: auto;
    padding: 25px;
    background: #ffffff;
    border: 1px solid #ddd;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
}

.snake-card h3 {
    font-size: 24px;
    margin-bottom: 8px;
}

.snake-description {
    color: #666;
    margin-bottom: 20px;
}

.snake-scoreboard {
    display: flex;
    justify-content: space-around;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
}

.snake-game-container {
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: auto;
}

#snakeCanvas {
    display: block;
    width: 100%;
    height: auto;
    background: #151d29;
    border: 3px solid #333;
    border-radius: 8px;
}

.snake-message {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.85);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 8px;
}

.snake-message.hidden {
    display: none;
}

.snake-message h3 {
    font-size: 26px;
}

.snake-message p {
    font-size: 14px;
}

.snake-section button {
    cursor: pointer;
    padding: 11px 20px;
    border: none;
    border-radius: 7px;
    background: #2563eb;
    color: white;
    font-weight: bold;
    transition: 0.2s;
}

.snake-section button:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
}

.snake-controls {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 18px;
}

.snake-mobile-controls {
    display: none;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

.snake-mobile-controls div {
    display: flex;
    gap: 8px;
}

.snake-mobile-controls button {
    min-width: 50px;
    min-height: 45px;
    font-size: 18px;
    touch-action: manipulation;
}

.snake-instructions {
    font-size: 12px;
    color: #777;
    margin-top: 20px;
}

@media (max-width: 600px) {
    .snake-card {
        padding: 15px;
    }

    .snake-mobile-controls {
        display: flex;
    }

    .snake-heading h2 {
        font-size: 24px;
    }
}
