// a good template approuch to
// building parent/child functions.
let counter  = 0;
function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
}

function draw() {
 background(0);
 // push,pop, translate, rotate, scale
         // x,y,rot,sc
simplecarrot(190,200,counter,1);
counter+=.5;
//simplecarrot(300,150,45,.5);

}

function simplecarrot(lx,ly,rot,sc) {

  push(); // start
  translate(lx,ly);  // left/right and up/down 
  rotate( radians(rot) );  // rotate in degrees
  scale(sc);   // 100 %

  fill("orange");
  rect(0,0,50,100,15);  // anchor

 // eyes
 fill(0,20,255);
 ellipse(10, 20, 20, 20);
 fill(0,20,255);
 ellipse(35, 20, 20, 20);
 // mouth
 fill("red");
 ellipse(25,70,30,15);

 carrotNose(18,30,0,.6);
  pop(); // end

}


function carrotNose(lx,ly,rot,sc) {

  push(); // start
  translate(lx,ly);  // left/right and up/down 
  rotate( radians(rot) );  // rotate in degrees
  scale(sc);   // 100 %

 //nose 
  fill("brown");
  rect(0,0,20,50,10);  // anchor
 // nostrils
 ellipse(0, 45, 10, 10);
 ellipse(20, 45, 10, 10);
  pop();
}
function transformTemp (lx, ly, rot, sc) { push (); // start 
translate(lx, ly);  // left/right and up/down 
rotate( radians(rot) );  // rotate in degrees
scale(sc);   // 100 %
// stuff
fill(255);
rect(0,0,20,40, 10);  // anchor
pop(); // end 
}

function carrotEar(lx,ly,rot,sc) {
  noStroke()
  push(); // start
  translate(lx,ly);  // left/right and up/down 
  rotate( radians(rot) );  // rotate in degrees
  scale(sc);   // 100 %
  //stuff

  fill(255,20,200);
  rect(0,0,20,50,10);  // anchor
  fill

}