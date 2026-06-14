const dieImages = document.querySelectorAll("#gameboard img");

document.getElementById("rollButton").addEventListener("click", (event) => {
    dieImages.forEach((image) => {
        if (isDieUnlocked(image)) {
            image.src = "example/assets/die_rolling.gif";
        }
    });

    setTimeout(() => {
        dieImages.forEach((image) => {
            if (isDieUnlocked(image)) {
                image.src = "example/assets/white_die_" + (Math.floor(Math.random() * 6) + 1) + ".gif";
            }
        });
    }, 500);
});

function isDieUnlocked(dieImage) {
    const checkboxes = document.querySelectorAll("#gameboard input");
    const unchecked = Array.from(checkboxes)
                            .filter(checkbox => !checkbox.checked);
    return unchecked.find(checkbox => checkbox.className === dieImage.className);
}