let btnReg = document.getElementById("registr");
let activeRegistr = false;

function showRegBlock () {
    if (!activeRegistr) {
        document.getElementById("register-block").style.opacity = 1;
        activeRegistr = true;
    } else {
        document.getElementById("register-block").style.opacity = 0;
        activeRegistr = false;
    }
}