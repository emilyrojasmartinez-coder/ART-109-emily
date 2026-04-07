

let lxo = 200;
let lyo = 150;

let rand = 0;
let gridName = "Gary";
function setup() {
  createCanvas(500, 500);

  noStroke();
 
  background(20);
  fill(255);
  rectMode(CENTER);
  frameRate(30)
}

function draw() {
    


  for (let i = 0; i < 500; i += 20) {
    for (let j = 0; j < 500; j += 20) {
      rand = random(255);
      fill(rand);
      rect(i + 5, j + 5, 10, 10);
      console.log("this has a greyscale value of" + rand);
    }
  }
let r = random(10,100); //0to30
  let m = mouseX;
  console.log(m + " " + r);

 if (m < width/2)  {
 
    ellipse(m, height/2, r * 2, r * 2);
    fill("pink");
 } else {
   
    rect(m, height/2, r * 2, r * 5);
   }
   if (r < 20){
 console.log("hi");
}



  // mouse pressed test
  if (mouseIsPressed) {



        if (mouseX < 100) {

          if (mouseY < 100) {
            fill(255, 220, 220);
            ellipse(width / 4, height / 4, 60, 60);
          }

        }
        if (mouseX > 100) {

          if (mouseY > 100) {
            fill(255, 220, 230);
            rect(width / 1.5, height / 3, 80, 80, 40);
          }
        }

        if (mouseX > 400) {

          if (mouseY > 400) {
            fill(255, 220, 230);
            rect(width / 1.5, height / 1.5, 80, 80, 10);
          }
        }


      }   // mouse pressed test ends


 
      // ----------------------- face start
      fill("grey");
      // anchor graphic

      ellipse(50 + lxo, 80 + lyo, 150, 150);
      fill(255);
      ellipse(25 + lxo, 50 + lyo, 20, 20);
      ellipse(75 + lxo, 50 + lyo, 20, 20);
      ellipse(50 + lxo, 130 + lyo, 50, 20);
      // x1,y1,x2,y2,x3,y3
      fill(200);
      triangle(50 + lxo, 60 + lyo, 35 + lxo, 100 + lyo, 65 + lxo, 100 + lyo);
      // ------------------------face end

      // roll over test
      if (mouseX > 200 && mouseX < 300) {
        if (mouseY > 200 && mouseY < 300) {

          fill(255, 220, 220);
          ellipse(50 + lxo, 80 + lyo, 150, 150);
          fill(255, 0, 0, 130);
          triangle(50 + lxo, 60 + lyo, 35 + lxo, 100 + lyo, 65 + lxo, 100 + lyo);
          fill(150, 250, 220);
          ellipse(25 + lxo, 50 + lyo, 20, 20);
          ellipse(75 + lxo, 50 + lyo, 20, 20);
          ellipse(50 + lxo, 130 + lyo, 50, 20);
        }
      }  // roll over test ends

 

    }