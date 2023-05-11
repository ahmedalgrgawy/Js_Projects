let fullImgBox = document.querySelector(".full-img-box");
let fullImg = document.querySelector(".full-img")
let closeSpan = document.querySelector("span");

function Open(pic) {
    fullImgBox.style.display = 'flex';
    fullImg.src = pic;
}

closeSpan.onclick = function () {
    fullImgBox.style.display = 'none';
}


