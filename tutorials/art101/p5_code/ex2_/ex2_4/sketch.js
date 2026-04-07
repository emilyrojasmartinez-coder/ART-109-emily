function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  background(0);
  emisworld();
  carrotFace(150, 250, 30);
  carrotFace2(300, 100, 55);


}

function emisworld() {
  fill("cyan");
  text("emi says hi friends", 100, 100);
}


function carrotFace(lxo, lyo, mouth) {


  fill("orange");
  // anchor 
  rect(0 + lxo, 0 + lyo, 100, 200, 20);
  fill(255);
  ellipse(30 + lxo, 50 + lyo, 20, 20);
  ellipse(75 + lxo, 50 + lyo, 20, 20);
  ellipse(50 + lxo, 130 + lyo, 50, mouth);
  // x1,y1,x2,y2,x3,y3
  fill(200);
  triangle(50 + lxo, 60 + lyo, 35 + lxo, 100 + lyo, 65 + lxo, 100 + lyo);
  // ------------------------face end


}

function carrotFace2(lxo, lyo, mouth) {


  fill("red");
  // anchor 
  rect(0 + lxo, 0 + lyo, 100, 200, 20);
  fill(255);
  ellipse(30 + lxo, 50 + lyo, 20, 20);
  ellipse(75 + lxo, 50 + lyo, 20, 20);
  ellipse(50 + lxo, 130 + lyo, 50, mouth);
  // x1,y1,x2,y2,x3,y3
  fill(200);
  triangle(50 + lxo, 60 + lyo, 35 + lxo, 100 + lyo, 65 + lxo, 100 + lyo);
  // ------------------------face end


}