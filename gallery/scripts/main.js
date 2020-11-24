
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images  - not clear to me how about const inside loop*/

for (i = 1; i<6; i++) {
const imgLoc = './images/picX.jpg';
const newImage = document.createElement('img');
newImage.setAttribute('src', imgLoc.replace('X',i.toString()));
newImage.addEventListener('click',showImage); 
thumbBar.appendChild(newImage);
}

function showImage(e) {
    let src = e.target.getAttribute('src');
    displayedImage.setAttribute('src',src);
}

/* Wiring up the Darken/Lighten button */

function toggleDark() {
   if (btn.getAttribute('class') ==='light') {
       overlay.style.backgroundColor = 'rgba(0,0,0,0.3)';
       btn.setAttribute('class','dark');
       btn.textContent='Lighten';
   }
   else {
       overlay.style.backgroundColor = 'rgba(0,0,0,0)';
       btn.setAttribute('class','light');
       btn.textContent='Darken';
   }
}

btn.addEventListener('click', toggleDark);
