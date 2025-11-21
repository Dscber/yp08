const track = document.querySelector('.reviews__track');
const leftBtn = document.querySelector('.reviews__arrow--left');
const rightBtn = document.querySelector('.reviews__arrow--right');

let startX = 0;
let currentX = 0;
let prevTranslate = 0;
let currentTranslate = 0;
let isDragging = false;

// Ширина карточки + gap
function cardWidth() {
    const card = track.querySelector('.review-card');
    const style = window.getComputedStyle(card);
    return card.offsetWidth + parseInt(style.marginRight);
}

// Ограничения
function clampTranslate(value) {
    const maxTranslate = 0;
    const minTranslate = -(track.scrollWidth - track.parentElement.offsetWidth);
    return Math.min(maxTranslate, Math.max(minTranslate, value));
}

// Клики стрелок
rightBtn.addEventListener('click', () => {
    currentTranslate -= cardWidth();
    currentTranslate = clampTranslate(currentTranslate);
    setTranslate(currentTranslate);
});

leftBtn.addEventListener('click', () => {
    currentTranslate += cardWidth();
    currentTranslate = clampTranslate(currentTranslate);
    setTranslate(currentTranslate);
});

// Drag мышкой
track.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.clientX;
    track.style.cursor = "grabbing";
});

track.addEventListener('mousemove', e => {
    if (!isDragging) return;
    currentX = e.clientX;
    const diff = currentX - startX;
    setTranslate(clampTranslate(prevTranslate + diff));
});

track.addEventListener('mouseup', () => {
    isDragging = false;
    prevTranslate = currentTranslate;
    track.style.cursor = "grab";
});

track.addEventListener('mouseleave', () => {
    isDragging = false;
    prevTranslate = currentTranslate;
});

// Touch для мобильных
track.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

track.addEventListener('touchmove', e => {
    currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslate(clampTranslate(prevTranslate + diff));
});

track.addEventListener('touchend', () => {
    prevTranslate = currentTranslate;
});

function setTranslate(value) {
    currentTranslate = value;
    track.style.transform = `translateX(${value}px)`;
}
