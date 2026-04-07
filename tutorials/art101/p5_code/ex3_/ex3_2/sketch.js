
// Example 2.3.1  Wrap Around vector movement code
let speedx, speedy, lox, loy;

function setup() {
    background(0);
    createCanvas(500, 500);
    // making a random negative or positive value
    speedx = random(-5, 5);
    // another way of doing the same thing
    speedy = random(-5, 5);
    lox = height / 2;
    loy = width / 2;
}

function draw() {
    background(0);
    if (lox < 0) {
       speedx=-speedx;  // 4
    }
    if (lox > width) {
        lox = 0;
    }
    if (loy < 0) {
        loy = height;
    }
    if (loy > height) {
        loy = 0;
    }

    // update the position of the ball and print to screen
    lox += speedx;
    loy += speedy;
    fill(255);
    ellipse(lox, loy, 20, 20);
}
 
function wing(lx,ly,rot,sc){

    ellipse(40,-30,70,40);
    fill(255,0,0);
    ellipse(40,-30,70,40);
        fill(255,0,0);
}