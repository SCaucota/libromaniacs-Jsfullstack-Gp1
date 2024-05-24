/* Carousel */

const leftButton = document.querySelector (".prev");
const rightButton = document.querySelector (".next");
const cardWrapper = document.querySelector (".carousel-wrapper");
let position = 0;

leftButton.addEventListener("click", () => {
    console.log('Left button clicked, current position:', position); // Debugging
    position -= 22;
    cardWrapper.style.transform = `translateX(-${position}%)`;
    console.log('Moved left, new position:', position); // Debugging
});

rightButton.addEventListener("click", () => {
    console.log('Right button clicked, current position:', position); // Debugging
    position += 22;
    cardWrapper.style.transform = `translateX(+${position}%)`;
    console.log('Moved right, new position:', position); // Debugging
});


