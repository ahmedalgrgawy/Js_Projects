let slide = document.querySelector("#slide");
let upArrow = document.querySelector("#arrow-up");
let downArrow = document.querySelector("#arrow-down");

let x = 0;

upArrow.onclick = function () {
    if (x > '-900') {
        x = x - 300;
        slide.style.top = x + 'px';
    }
}

downArrow.onclick = function () {
    if (x < 0) {
        x = x + 300;
        slide.style.top = x + 'px';
    }
}