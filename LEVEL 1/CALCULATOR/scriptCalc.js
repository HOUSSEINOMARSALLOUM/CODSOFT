let currentvalue = "";
const displayscreen = document.getElementById("display");
const boxElement = document.querySelector('#whole');

function display(num) {
    boxElement.style.transform = 'scale(1)';
    currentvalue += num;
    displayscreen.innerHTML = currentvalue;
}

function clearScreen() {
    boxElement.style.transform = 'scale(1)';
    currentvalue = '';
    displayscreen.innerHTML = currentvalue;
}

function equals() {
    try {
        boxElement.style.transform = 'scale(1.2)';
        currentvalue = new Function('return ' + currentvalue)();
        displayscreen.innerHTML = currentvalue;
    } catch (error) {
        displayscreen.innerHTML = "ERROR";
    }
}
