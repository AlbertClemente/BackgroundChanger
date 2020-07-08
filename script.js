let container = document.querySelector('.container');
let btnBckChanger = document.querySelector('.btn-color-changer');
let textContainer = document.querySelector('.text-container');

function changeColor(){
    let newRGB = generateColor();
    container.style.backgroundColor = newRGB;
    console.log(container.style.backgroundColor);
    textContainer.innerHTML = container.style.backgroundColor;
}

function generateColor(){
    let r = 0;
    let g = 0;
    let b = 0;

    r = randomIntFromInterval(0,255);
    g = randomIntFromInterval(0,255);
    b = randomIntFromInterval(0,255);

    return "rgb(" + r + "," + g + "," + b +")";
}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}