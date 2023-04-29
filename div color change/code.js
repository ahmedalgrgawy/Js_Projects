let btn = document.querySelector(".btn");
let myDiv = document.querySelector(".mydiv");

let colors = ['red', 'blue', 'green', 'black'];

btn.onclick = function () {
    console.log("green")

    let randomColor = Math.floor(Math.random() * colors.length);

    myDiv.style.backgroundColor = colors[randomColor];

}