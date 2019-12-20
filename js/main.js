const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let images = document.querySelectorAll('.images img');
let i = 0;

nextBtn.addEventListener('click', moveLeft);

function moveLeft() {
    images[i].className = '';
    i++;

    if (i >= images.length) {
        i = 0;
    }

    images[i].className = 'opacity-active'
}

prevBtn.addEventListener('click', moveRight);

function moveRight() {
    images[i].className = '';
    i--

    if (i <= 0) {
        i = images.length - 1;
    }

    images[i].className = 'opacity-active';
}

setInterval(moveLeft, 2000);