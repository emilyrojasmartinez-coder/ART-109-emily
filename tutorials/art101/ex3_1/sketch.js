

// a simple example of using bounce vector code idea
// with your creatures

let speedx, speedy, lox, loy;

let counter  = 0;
let wigrot  = 0;  // wiggle angle
let wigdir = 0;  // the wiggle direction

let bX, bY, bSpeedX, bSpeedY;   // butterfly
let b2X, b2Y, b2SpeedX, b2SpeedY;   // butterfly
let cX, cY, cSpeedX, cSpeedY;   // clown
 let rot = 0;  // rotation angle

function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
  wigdir = 1;
 
  // butterfly
  bX = random(width);
  bY = random(height);
  bSpeedX = random(-5,5);
  bSpeedY = random(-5,5);

  // butterfly2 
  b2X = random(width);
  b2Y = random(height);
  b2SpeedX = random(-5,5);
  b2SpeedY = random(-5,5);

  // clown
  cX = random(width);
  cY = random(height);
  cSpeedX = random(-5,5);
  cSpeedY = random(-5,5);

  lox = width / 2;
  loy = height / 2;
speedX = random(-5,5);
  speedY = random(-5,5);
}


function draw() {
background(250,220,200);
 // push,pop, translate, rotate, scale
         // x,y,rot,sc
flower2(lox,loy,rot,3);

if (lox < 0 || lox > width) {
  speedX = -speedX;
}

if (loy < 0 || loy > height) {
  speedY = -speedY;
}
    lox += speedX;
    loy += speedY;


      counter+=.5;


butterfly(bX, bY, rot, .5);


// bounce off left/right walls
if (bX < 0 || bX > width) {
  bSpeedX = -bSpeedX;
}

if (bY < 0 || bY > height) {
  bSpeedY = -bSpeedY;
}
    bX += bSpeedX;
    bY += bSpeedY;
      counter+=.5;


butterfly2(b2X, b2Y, rot, .5);
if (b2X < 0 || b2X > width) {
  b2SpeedX = -b2SpeedX;
}

if (b2Y < 0 || b2Y > height) {
  b2SpeedY = -b2SpeedY;
}
    b2X += b2SpeedX;
    b2Y += b2SpeedY;


simpleclown(cX, cY, rot, 1);

// bounce off left/right walls
if (cX < 0 || cX > width) {
  cSpeedX = -cSpeedX;
}

// bounce off top/bottom walls
if (cY < 0 || cY > height) {
  cSpeedY = -cSpeedY;
}

cX += cSpeedX;
cY += cSpeedY;
      
 rot += wigdir * .5;
   // rotate by .5 degrees in the direction of wigdir
flower(lox,loy,rot,5);
}


function butterfly(lx,ly,rot,sc,wr){
  push();
  translate(lx,ly);  // left/right and up/down
  rotate( radians(rot) );
  scale(sc);   // 100 %
  fill("black");
  ellipse(0,0,20,50);
    fill("black");
   ellipse(0,-20,15,30);
   butterflywing(-40,50,0,1);
   butterflywing(40,50,180,-1);
  pop();    
}

function butterfly2(lx,ly,rot,sc,wr){
  push();
  translate(lx,ly);  // left/right and up/down
  rotate( radians(rot) );
  scale(sc);   // 100 %
  fill("black");
  ellipse(0,0,20,50);
    fill("black");
   ellipse(0,-20,15,30);
   butterflywing2(-40,50,0,1);
   butterflywing2(40,50,180,-1);
  pop();    
}

function simpleclown2(lx,ly,rot,sc,wr) {

  push(); // start
  translate(lx,ly);  // left/right and up/down 
  rotate( radians(rot) );  // rotate in degrees
  scale(sc);   // 100 %

  fill("white");
 ellipse(25, 25, 150, 150);  // anchor

 // eyes
 fill(0,120,255);
 ellipse(10, 20, 20, 20);
 fill(0,120,255);
 ellipse(35, 20, 20, 20);
 // mouth
 fill("red");
 ellipse(25,70,30,15);
 clownNose(18,30,wr,.6)
 clownEar(-18,12,-3,1);
 clownEar(66,48,183,1);
 clownHair(25,10,0,1);
  pop(); // end

}

function simpleclown(lx,ly,rot,sc,wr) {

  push(); // start
  translate(lx,ly);  // left/right and up/down 
  rotate( radians(rot) );  // rotate in degrees
  scale(sc);   // 100 %

  fill("white");
 ellipse(25, 25, 150, 150);  // anchor

 // eyes
 fill(0,120,255);
 ellipse(10, 20, 20, 20);
 fill(0,120,255);
 ellipse(35, 20, 20, 20);
 // mouth
 fill("red");
 ellipse(25,70,30,15);
 clownNose(18,30,wr,.6)
 clownEar(-18,12,-3,1);
 clownEar(66,48,183,1);
 clownHair(25,10,0,1);
 flower(-2,-80,rot,1);
  pop(); // end

}

function clownNose(lx,ly,rot,sc) {

  push(); // start
  translate(lx,ly);  // left/right and up/down 
  rotate( radians(rot) );  // rotate in degrees
  scale(sc);   // 100 %

 //nose 
  fill("red");
  ellipse(20, 20, 50, 50);  // anchor
 // nostrils

  pop(); // end

}

function transformTemp(lx,ly,rot,sc) {

  push(); // start
  translate(lx,ly);  // left/right and up/down 
  rotate( radians(rot) );  // rotate in degrees
  scale(sc);   // 100 %

 // stuff
  fill(255);
  rect(0,0,20,40,10);  // anchor

  pop(); // end

}
function clownHair(lx,ly,rot,sc) {
  noStroke();
  push(); // start
  translate(lx,ly);  // left/right and up/down
  rotate( radians(rot) );
  scale(sc);   // 100 %
  
  fill("red");
  ellipse(0,-50,70,40);
   ellipse(0,-35,50,50);
  ellipse(-50,-35,70,40);
    ellipse(-40,-45,60,40);
  ellipse(40,-30,70,40);}


function clownEar(lx,ly,rot,sc) {
  noStroke();
  push(); // start
  translate(lx,ly);  // left/right and up/down 
  rotate( radians(rot) );  // rotate in degrees
  scale(1,1);   // 100 %

 // stuff
  fill(255,250,200);
  rect(-40,0,20,40,40);  // anchor


  pop(); // end
  }

  function butterflywing (lx,ly,rot,sc) {
  noStroke(.5);
  push();
  translate(lx,ly);  // left/right and up/down
  rotate( radians(rot) );
  scale(sc);   // 100 %
  
  fill("pink");
  ellipse(0,-60,80,30);
    fill("pink");
   ellipse(0,-40,60,30);
 
pop();
  
}
 function butterflywing2 (lx,ly,rot,sc) {
  noStroke(0);
  push();
  translate(lx,ly);  // left/right and up/down
  rotate( radians(rot) );
  scale(sc);   // 100 %
  
  fill("purple");
  ellipse(0,-60,70,40);
    fill("purple");
   ellipse(0,-40,60,30);

   fill("pink");
  ellipse(20,-60,10,10);
     fill("pink");
  ellipse(-10,-70,10,10);
     fill("pink");
  ellipse(-20, -30,10,10);
     fill("pink");
  ellipse(4,-40,10,10);
pop();
}


function butterflybody(lx,ly,rot,sc) {  

noStroke(0);
  push();
  translate(lx,ly);  // left/right and up/down
  rotate( radians(rot) );
  scale(sc);   // 100 %
  
  fill("black");
  ellipse(0,0,20,50);
    fill("black");
   ellipse(0,-20,15,30);
 
pop();}

function flower(lx,ly,rot,sc) {
  noStroke(0);
  push();
  translate(lx,ly);
  rotate( radians(rot) );
  scale(sc);

  // draw a simple flower centered at the translation point
  fill(255,200,115);
  ellipse(0, 0, 20, 20);
  ellipse(15, 0, 20, 20);
  ellipse(-15, 0, 20, 20);
  ellipse(0, 15, 20, 20);
  ellipse(0, -15, 20, 20);
  pop();
}
function flower2(lx,ly,rot,sc) {
  noStroke(0);
  push();
  translate(lx,ly);
  rotate( radians(rot) );
  scale(sc);

  // draw a simple flower centered at the translation point
  fill(205,200,215);
  ellipse(0, 0, 20, 20);
  ellipse(15, 0, 20, 20);
  ellipse(-15, 0, 20, 20);
  ellipse(0, 15, 20, 20);
  ellipse(0, -15, 20, 20);
  pop();
}