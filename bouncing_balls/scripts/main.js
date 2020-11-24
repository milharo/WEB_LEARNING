// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}
function EvilCircle(x, y, velX, velY, color, size) {
    Ball.call(this, x, y, velX, velY, color, size);
}

EvilCircle.prototype = Object.create(Ball.prototype);
Object.defineProperty(EvilCircle.prototype, 'constructor', {
    value: EvilCircle,
    enumerable: false,
    writable: true });


Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}
EvilCircle.prototype.draw = function() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
}

Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }
    if ((this.x-this.size) <= 0) {
        this.velX = -(this.velX);
    }
    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }
    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }
    this.x += this.velX;
    this.y += this.velY;

}
EvilCircle.prototype.update = function(key) {
    switch(key) {
    case 37:
        this.x -= this.velX;
        break;
    case 38:
        this.y -= this.velY;
        break;
    case 39:
        this.x += this.velX;
        break;
    case 40:
        this.y += this.velY;
        break;
    }
    if ((this.x + this.size) >= width) {
        this.x = width - this.size;
    }
    if ((this.x-this.size) <= 0) {
        this.x = (this.size);
    }
    if ((this.y + this.size) >= height) {
        this.y = height - this.size;
    }
    if ((this.y - this.size) <= 0) {
        this.y = this.size;
    }
}

Ball.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = 'rgb(' + random(0,255) + ','+ random(0,255) + ','+ random(0,255)+')'; 
            }

            
        }
    }
}

EvilCircle.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++) {
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + balls[j].size) {
            balls.splice(j,1);
            ballCnt--;
            counter.textContent = 'Ball count:' + ballCnt;
        }
    }
}

let ballsMax = 5;
let ballCnt = ballsMax;
let counter = document.querySelector('p');
counter.textContent = 'Ball count:' + ballCnt;

let balls = [];
const evil = new EvilCircle(width/2, height/2, 10, 10, 'white',15)
window.addEventListener('keydown', function(e) { 
    evil.update(e.keyCode);});



while (balls.length < ballsMax) {
    let size = random(10,20);
    let ball = new Ball(
        random(0 + size, width - size),
        random(0+size, height - size),
        random(7,-7),
        random(-7,7),
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')',
        size
    );

    balls.push(ball);
}

function loop() {
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.fillRect(0,0, width, height);

    for (let i=0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
        evil.collisionDetect();
        }
    evil.draw();
    requestAnimationFrame(loop); 
    

}



loop();