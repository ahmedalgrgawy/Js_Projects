let messageCoantainer = document.querySelector(".message");
let messageBtn = document.querySelector(".btn");
let messageNewHolder = document.querySelector(".p");

messageBtn.onclick = function () {

    let msg = messageCoantainer.value;

    if (messageCoantainer != "") {
        messageNewHolder.innerHTML = msg;

        messageCoantainer.value = "";
    }
}