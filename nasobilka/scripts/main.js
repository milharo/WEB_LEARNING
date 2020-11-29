'use strict';

function getRandom() {
    let multiplier = 10 + (Math.ceil(10*Math.random())); // generate 11 to 20
    return multiplier;
}

function generateQuestion(ranges) {
    let multiplier1 = getRandom();
    let index;
    let multiplier2;
    if (ranges.length > 0) {
        index  = 1+(Math.ceil(10*Math.random()))%ranges.length; // select random range from set ranges
        multiplier2 = ranges[index-1];
    }
    else multiplier2 = 0;

    questionElement.textContent=`What is: ${multiplier1} x ${multiplier2} ?`;
    let question = multiplier1 * multiplier2;
    return [question, multiplier1, multiplier2];
}

function evalReply(reply) {
    if ( reply == question[0]) {
        evaluationElement.classList.remove('wrong');
        evaluationElement.classList.add('correct');
        evaluationElement.textContent='CORRECT!';
        console.log('Good');
    }
    else { 
        evaluationElement.classList.remove('correct');
        evaluationElement.classList.add('wrong');
        evaluationElement.textContent = `WRONG! ${question[1]} x ${question[2]} = ${question[0]}`;
        console.log('Wrong');
    }

}

// initialization 
let ranges = [11]; //11 is default range
let questionElement = document.createElement('p');
let questionContainer = document.querySelector('.question');
let evaluationElement = document.createElement('p');
let evaluationContainer = document.querySelector('.evaluation-area');

questionContainer.appendChild(questionElement);
evaluationContainer.appendChild(evaluationElement);

let question = generateQuestion(ranges);

// add event listerners to range selectors
for ( let i = 11 ; i < 21; i++) {
    let id = i;
    let checkbox = document.getElementById(id);
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            console.log('ch'+id + ':checked');
            ranges.push(id);
            console.log(ranges);
            question = generateQuestion(ranges);
        }
        else {
            if (ranges.length > 1) {
                console.log('ch'+id+':unchecked');
                ranges.splice(ranges.indexOf(id),1);
                console.log(ranges);
                question = generateQuestion(ranges);
            }
            else {
                checkbox.checked = true; // force at least one checkbox checked
                document.querySelector('.warning').classList.toggle('show');
                setTimeout(() => {document.querySelector('.warning').classList.toggle('show');}, 1000);
                console.log(ranges);
            }
        }
    });
}

let userInput = document.getElementById('user-input');
userInput.addEventListener('keydown', (e) => {
    if ((e.code == 'Enter') || (e.code =='NumpadEnter')) {
        let val = userInput.value.trim();
        console.log('Zadal si: ' + val);
        if (  val !='0' && (val == 0 || isNaN( Number(val))) ) {
            userInput.value ='';
            return;
        }
        else {
            val = Number(val);
            evalReply(val);
            userInput.value ='';
            question = generateQuestion(ranges);
        }
    }
});

