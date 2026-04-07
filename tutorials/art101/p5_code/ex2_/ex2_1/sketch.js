
let bgcounter = 0;
let counter = 0;

function setup() {
  createCanvas(200, 200);
  background(255);
  frameRate(10);
  noStroke();
  for (let i = 0; i < height; i += 20) {
    fill(20, 255, 0);
    rect(0, i, width, 10);
    fill(255);
    rect(i, 0, 10, height);
    console.log(i);
  }
}
function draw() {
  noStroke();
  fill(255, 255, 0, 120);
  rect(0, counter, width - random(50), 10);
  fill(255, 0, 255, 120);
  rect(counter, 0, 10, height - random(50));

  console.log("bgcounter = " + bgcounter + " counter = " + counter);

  if (counter > height) {
    background(bgcounter);
    bgcounter += 3;
    counter = 0;
  } else {
    counter += 20;
  }
}