document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("button");
    const container = document.getElementById("game-container");

    function moveButton() {
        const maxX = container.clientWidth - button.clientWidth;
        const maxY = container.clientHeight - button.clientHeight;
        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);

        button.style.left = `${newX}px`;
        button.style.top = `${newY}px`;
    }

    button.addEventListener("mouseover", moveButton);

    button.addEventListener("click", function () {
        button.textContent = "Você venceu!";
        button.style.backgroundColor = "green";
        button.style.pointerEvents = "none";
    });

    moveButton();
});