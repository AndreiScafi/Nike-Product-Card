const card = document.querySelector('.card');
const color1 = document.querySelector('.color-1');
const color2 = document.querySelector('.color-2');

color1.addEventListener('click', () => {
    card.classList.remove('change');
});

color2.addEventListener('click', () => {
    card.classList.add('change');
});