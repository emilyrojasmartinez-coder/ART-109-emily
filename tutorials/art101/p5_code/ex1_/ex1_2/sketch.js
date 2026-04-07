
function setup() { 
  createCanvas(800, 800);
  background(127);
  noStroke();
  for (let i=0; i < height; i+=20) {
    fill(20,255,0);
    rect(0, i, width, 10);
    fill(255);
    rect(i, 0, 10, height);
    console.log(i);
  }
}
