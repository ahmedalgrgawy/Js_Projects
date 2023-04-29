let btn = document.querySelector(".btn");
let myDiv = document.querySelector(".mydiv");

btn.addEventListener("click", random);

function random() {
    document.body.style.backgroundColor = `#${Math.random().toString(16).slice(2, 8)}`;
}