
 let lxo = 200;
 let lyo = 200;

function setup() {
  createCanvas(600,600);
  background(0);

}

function draw() {
  background(0);

   // ----------------------- face start
  fill("orange");
  // anchor graphic
  rect(0 + lxo,0 + lyo,100,200,20);
  fill(255);
  ellipse(25 + lxo,50 + lyo,20,20);
  ellipse(75 + lxo,50 + lyo,20,20);
  ellipse(50 + lxo,130 + lyo,50,20);
   // x1,y1,x2,y2,x3,y3
   fill(200);
  triangle(50 + lxo,60 + lyo, 35 +  lxo,100 + lyo, 65 + lxo,100 + lyo );
  // ------------------------face end
   
  console.log(counter);
  counter++;

}

