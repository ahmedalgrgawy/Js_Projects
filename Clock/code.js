let clockDiv = document.querySelector(".clock");

function clock() {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let secs = date.getSeconds();
    let apM = 'AM';

    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        apM = 'PM';
    }

    if (hours < 10) hours = "0" + hours;
    if (min < 10) min = "0" + min;
    if (secs < 10) secs = "0" + secs;

    clockDiv.innerText = `${hours}: ${min}: ${secs}: ${apM}`;

    setTimeout(() => {
        clock();
    }, 1000);

}

clock();
