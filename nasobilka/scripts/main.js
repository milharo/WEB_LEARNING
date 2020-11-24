'use strict';

function getRandom() {
    let multiplier = 10 + (Math.ceil(10*Math.random())); // generate 11 to 20
    //let multiplier = 1+(Math.ceil(10*Math.random()))%5; // generate 11 to 20
    return multiplier;
}

function generateQuestion(ranges) {
    let multiplier1 = getRandom();
    let index = 1+(Math.ceil(10*Math.random()))%ranges.length;
    let multiplier2 = ranges[index-1]; 
    questionElement.textContent=`What is: ${multiplier1} x ${multiplier2} ?`;
    let question = multiplier1 * multiplier2;
    return question;
}

function evalReply(reply) {
    if ( reply == question) {
        evaluationElement.textContent='GOOD';
        console.log('Good');
    }
    else { 
        evaluationElement.textContent = `WRONG, it is: ${question}`;
        console.log('Wrong');
    }

}

// initialization 
let ranges = [11]; //11 is default range
let questionElement = document.createElement('p');
let questionContainer = document.querySelector('.question');
questionContainer.appendChild(questionElement);
let evaluationElement = document.createElement('p');
let evaluationContainer = document.querySelector('.evaluation-area');
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
            question = generateQuestion(ranges);
        }
        else {
            console.log('ch'+id+':unchecked');
            ranges.splice(ranges.indexOf(id),1);
            question = generateQuestion(ranges);
        }
    });
}

let userInput = document.getElementById('user-input');
userInput.addEventListener('keydown', (e) => {
                            if (e.code == 'Enter') {
                                let val = userInput.value;
                                val = isNaN(Number(val)) ? 0 :  Number(val);
                                console.log('Zadal si: ' + val);
                                evalReply(val);
                                userInput.value ='';
                                userInput.focus();
                                question = generateQuestion(ranges);
                            }
                        });

                
                                


// generate question
/*
- pick random range
- pick random from 11-20 and multiply by range
- display question
*/

// process input
/* 
- attach return event listener on input text field
- process value from input
- evaluate input and display correct result in case of NG
- clear input and focus for next question
*/
