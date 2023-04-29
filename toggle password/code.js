let password = document.querySelector(".myInput");
let btn = document.querySelector(".btn");

btn.addEventListener('click', toggle);

function toggle() {

    if (btn.getAttribute("data-text") == "show") {
        password.setAttribute('type', 'text');
        btn.setAttribute('data-text', 'hide');
        btn.innerHTML = "Hide";
    } else {
        password.setAttribute('type', 'password');
        btn.setAttribute('data-text', 'show');
        btn.innerHTML = "Show";
    }

}