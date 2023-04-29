let myImage = document.querySelector("#slideshow");
let images = ['images/cat-01.jpg', 'images/cat-02.jpg', 'images/cat-03.jpg', 'images/cat-04.jpg', 'images/cat-05.jpg', 'images/cat-06.jpg'];


function slidShow() {
    let randomImg = Math.floor(Math.random() * images.length);
    myImage.setAttribute('src', images[randomImg]);

    setTimeout(function () {
        slidShow();
    }, 2000)

}

slidShow();