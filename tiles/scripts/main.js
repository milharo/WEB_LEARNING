
function random(number) {
    let result = Math.floor(Math.random()*number);
    console.log(result);
    return result;
}

function bgChange(e) {
    const rndCol= 'rgb(' + random(255) + ','+ random(255) +','+ random(255)+ ')';
    e.target.style.backgroundColor = rndCol;
}
function getInput(e) {
    let inp = e.target.value;
    if ( e.keyCode == 13) {
        console.log(inp);
        document.getElementById('myOutput').textContent = inp;
        e.target.value ='';
    }
}

const input = document.getElementById('myInput');
input.addEventListener('keydown', getInput) ;

for (i = 0; i < 8; i++) {
    let div = document.createElement('div');
    document.querySelector('body').appendChild(div);
}
const divs = document.querySelectorAll('div');

for (i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click',bgChange);

}