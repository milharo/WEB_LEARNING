'use strict';
let btn = document.querySelector('button');
let greeting = function(a) {
    alert(a);
};

btn.onclick = function(){greeting('lolo');};

function msgBox(messg,messgType='') {
    const body = document.querySelector('body');
    console.log(body);
    const box = document.createElement('div');
    box.setAttribute('class', 'box');
    
    const msg = document.createElement('p');
    body.appendChild(box);
    msg.textContent = messg;
    box.appendChild(msg);
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    box.appendChild(closeBtn);
    closeBtn.onclick = function() {
        box.parentNode.removeChild(box);
    }
    if (messgType ==='warning') {
        msg.style.backgroundImage = 'url(icons/warning.png)';
        box.style.background = 'red';
    }
    else if (messgType ==='chat') {
        msg.style.backgroundImage = 'url(icons/chat.png)';
        box.style.background = 'aqua';
    }
    else {
        msg.style.paddingLeft = '20px';
    }
}
const msgBtn = document.getElementById('msg-button');
msgBtn.onclick = function() { msgBox('This is my message','chat');};


    
