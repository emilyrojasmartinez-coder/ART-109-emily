// add another pramator or method like motion wise
//key pressed hid or add a flower to the clown

let clowns = [];

let speedx, speedy, lox, loy;

let counter = 0;
let wigrot = 0;  // wiggle angle
let wigdir = 0;  // the wiggle direction

let bX, bY, bSpeedX, bSpeedY;   // butterfly
let b2X, b2Y, b2SpeedX, b2SpeedY;   // butterfly
let cX, cY, cSpeedX, cSpeedY;   // clown
let rot = 0;  // rotation angle

function setup() {
  createCanvas(500, 500);
  background(20);
  fill(255);
  for (let i = 0; i < 20; i++) {
    clowns.push(new EMclown(random(width), random(height)));
  }

  //wigdir = 1;

}


function draw() {
  background(250, 220, 200);
  for (let c of clowns) {
    c.move();
    c.display();
  }

}

function mousePressed() {
  for (let c of clowns) {
    c.changeColor();
  }
}


class EMclown {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.speedX = random(-5, 5);
     this.speedY = random(-5, 5);

    this.rot = 0;
    this.wigdir = random([-1, 1]);

    this.faceColor = "white";
    this.eyeColor = color(0, 120, 255);
    this.noseColor =  color(random(255), 0, 0);
    this.hairColor =  color(random(255), random(255), random(255));
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(radians(this.rot));
    scale(.5);

    this.drawFace();
    this.drawEyes();
    this.drawMouth();
    this.clownNose(18, 30, 0, 0.6);
    this.clownEar(-18, 12, -3, 1);
    this.clownEar(66, 48, 183, 1);
    this.clownHair(25, 10, 0, 1);

    pop();
  }
  drawFace() {
    fill(this.faceColor);
    ellipse(25, 25, 150, 150);
  }

  drawEyes() {
    fill(this.eyeColor);
    ellipse(10, 20, 20, 20);
    ellipse(35, 20, 20, 20);
  }

  drawMouth() {
    fill("red");
    ellipse(25, 70, 30, 15);
  }

  clownNose(lx, ly, rot, sc) {

    push(); // start
    translate(lx, ly);  // left/right and up/down 
    rotate(radians(rot));  // rotate in degrees
    scale(sc);   // 100 %

    //nose 
    fill(this.noseColor);
    ellipse(20, 20, 50, 50);  // anchor
    // nostrils

    pop(); // end

  }
  clownHair(lx, ly, rot, sc) {
    noStroke();
    push(); // start
    translate(lx, ly);  // left/right and up/down
    rotate(radians(rot));
    scale(sc);   // 100 %

    fill(this.hairColor);
    ellipse(0, -50, 70, 40);
    ellipse(0, -35, 50, 50);
    ellipse(-50, -35, 70, 40);
    ellipse(-40, -45, 60, 40);
    ellipse(40, -30, 70, 40);
    pop();
  }


  clownEar(lx, ly, rot, sc) {
    noStroke();
    push(); // start
    translate(lx, ly);  // left/right and up/down 
    rotate(radians(rot));  // rotate in degrees
    scale(1, 1);   // 100 %

    // stuff
    fill(255, 250, 200);
    rect(-40, 0, 20, 40, 40);  // anchor


    pop(); // end


  //   function flower2(lx, ly, rot, sc) {
  // noStroke(0);
  // push();
  // translate(lx, ly);
  // rotate(radians(rot));
  // scale(sc);

  // // draw a simple flower centered at the translation point
  // fill(205, 200, 215);
  // ellipse(0, 0, 20, 20);
  // ellipse(15, 0, 20, 20);
  // ellipse(-15, 0, 20, 20);
  // ellipse(0, 15, 20, 20);
  // ellipse(0, -15, 20, 20);
  // pop();
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

   let margin = 50;
if (this.x < margin || this.x > width - margin) this.speedX *= -.8;
if (this.y < margin || this.y > height - margin) this.speedY *= -.8;

    this.rot += this.wigdir;
  }

  changeColor() {
    this.hairColor = color(random(255), random(255), random(255));
    this.noseColor = color(random(255), 0, 0);
  }
}


// function flower(lx, ly, rot, sc) {
//   noStroke(0);
//   push();
//   translate(lx, ly);
//   rotate(radians(rot));
//   scale(sc);

//   // draw a simple flower centered at the translation point
//   fill(255, 200, 115);
//   ellipse(0, 0, 20, 20);
//   ellipse(15, 0, 20, 20);
//   ellipse(-15, 0, 20, 20);
//   ellipse(0, 15, 20, 20);
//   ellipse(0, -15, 20, 20);
//   pop();
// }



function flower2(lx, ly, rot, sc) {
  noStroke(0);
  push();
  translate(lx, ly);
  rotate(radians(rot));
  scale(sc);

  // draw a simple flower centered at the translation point
  fill(205, 200, 215);
  ellipse(0, 0, 20, 20);
  ellipse(15, 0, 20, 20);
  ellipse(-15, 0, 20, 20);
  ellipse(0, 15, 20, 20);
  ellipse(0, -15, 20, 20);
  pop();
}