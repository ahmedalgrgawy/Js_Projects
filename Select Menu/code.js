let selectField = document.querySelector("#select-field");
let selectText = document.querySelector("#selectText");
let options = document.querySelectorAll(".option");
let list = document.querySelector("#list");
let arrowIcon = document.querySelector("#icon");

selectField.onclick = function () {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle('rotate');
}

for (option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle('rotate');
    }
}

