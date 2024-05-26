const leftButton = document.querySelector(".prev");
const rightButton = document.querySelector(".next");
const cardWrapper = document.querySelector(".carouselWrapper");
const cards = document.querySelectorAll(".carouselCard");
const itemsToShow = 1;
let currentIndex = 0;
const totalItems = cards.length;

rightButton.addEventListener("click", () => {
    if (currentIndex < totalItems - itemsToShow) {
        currentIndex += itemsToShow;
        updateCarousel();
    }
});

leftButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex -= itemsToShow;
        updateCarousel();
    }
});

function updateCarousel() {
    const cardContainer = document.querySelector('.cardContainer');
    const itemWidth = document.querySelector('.carouselCard').offsetWidth;
    const newTransformValue = -(itemWidth * currentIndex);
    cardContainer.style.transform = `translateX(${newTransformValue}px)`;
    checkButtons();
}

function checkButtons() {
    leftButton.disabled = currentIndex === 0;
    rightButton.disabled = currentIndex >= totalItems - itemsToShow;
}

checkButtons();

