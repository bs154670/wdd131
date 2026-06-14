let level = 5;
let health = 100;

const healthDisplay = document.querySelector(".stats p:nth-child(3)");
const levelDisplay = document.querySelector(".stats p:nth-child(2)");
const buttons = document.querySelectorAll("button");

const attackedButton = buttons[0];
const levelUpButton = buttons[1];

attackedButton.addEventListener("click", () => {
    health -= 20;
    if (health < 0) health = 0;
    healthDisplay.textContent = "Health: " + health;
});

levelUpButton.addEventListener("click", () => {
    level += 1;
    levelDisplay.textContent = "Level: " + level;
});