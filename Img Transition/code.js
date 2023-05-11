let imgBox = document.querySelector(".img-box");
let imgWrap = document.querySelector(".img-wrap");
let originalImg = document.querySelector("#origin");
let line = document.querySelector("span");

let leftSpace = imgBox.offsetLeft;

originalImg.style.width = imgBox.offsetWidth + 'px';

imgBox.onmousemove = function (e) {

    let boxWidth = (e.pageX - leftSpace) + 'px';
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}