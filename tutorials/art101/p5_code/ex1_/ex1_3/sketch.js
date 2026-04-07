
function setup() {
  createCanvas(900,500);
  background(20);
  fill(255);
  rectMode(CENTER);
  frameRate(30)
}

function draw() {

  let r = random(10,100); //0to30
  let m = mouseX;
  console.log(m + " " + r);

 if (m < width/2)  {
   background(m);
    ellipse(m, height/2, r * 2, r * 2);
    fill("pink");
 } else {
    background(width -m );
    rect(m, height/2, r * 2, r * 5);
   }
   if (r < 20){
 console.log("hi");
}
   }

 