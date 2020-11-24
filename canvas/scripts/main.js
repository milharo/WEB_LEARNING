
const btn = document.querySelector('button');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

canvas.width = 400;
canvas.height = 300;

ctx.clearRect(0,0,WIDTH,HEIGHT);
console.log(WIDTH,HEIGHT);
ctx.beginPath();
ctx.arc(450, 150, 150,0, 3.14);
ctx.stroke();

function random(number) {
    let result = Math.floor(Math.random()*number);
    console.log(result);
    return result;
}
function bgChange(e) {
    const rndCol= 'rgb(' + random(255) + ','+ random(255) +','+ random(255)+ ')';
    e.target.style.backgroundColor = rndCol;
    console.log(e);
}

const img = new Image();
img.src = './images/mountain-baloon.jpg';
img.onload = () => { ctx.drawImage(img,0,0);};
btn.onmouseover = function() {
    const rndCol= 'rgb(' + random(255) + ','+ random(255) +','+ random(255)+ ')';
    document.body.style.backgroundColor = rndCol;

};

btn.addEventListener('click' ,bgChange); 

window.onkeydown = function() {
    const rndCol= 'rgb(' + random(255) + ','+ random(255) +','+ random(255)+ ')';
    document.body.style.backgroundColor = rndCol;
};

