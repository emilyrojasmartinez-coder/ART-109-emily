
let cx, cy;
let bgc;
let gridSize;
let cat;
let flowers = [];
let foundCount = 0;
let flower;
let gameState = "play";

// add 
// toggle 3rd ex for ex 2
// mouse pressed
// text usage 
// add a 3rd ot 4th image

// additonal credit for grid

function setup() {
  createCanvas(800, 800);
  background(255);
  bgc = color(20, 20);

  // load asset from same folder
  flower = loadImage("assets/flower2.png");
  cat = loadImage("assets/standingcat.jpg");
  myFont = loadFont("assets/PixelifySans-Regular.ttf");
  cx = width / 2;
  cy = height / 2;
  gridSize = 40;
  textSize(40);

  for (let i = 0; i < 10; i++) {
    flowers.push({
      x: floor(random(width / gridSize)) * gridSize,
      y: floor(random(height / gridSize)) * gridSize,
      collected: false
    });

  }
}


function drawGrid() {
  stroke(200);
  for (let x = 0; x <= width; x += gridSize) {
    line(x, 0, x, height);
  }
  for (let y = 0; y <= height; y += gridSize) {
    line(0, y, width, y);
  }
}

function draw() {

  fill(bgc);
  rect(0, 0, width, height);

  drawGrid();

  if (gameState === "play") {

    // movement
    if (keyIsPressed) {
      keyChoice();
    }

    // draw flowers
    for (let f of flowers) {
      if (!f.collected) {
        image(flower, f.x, f.y, gridSize, gridSize);
      }
    }

    // draw cat
    image(cat, cx, cy, gridSize, gridSize);


    checkFlowers();

  } else if (gameState === "win") {

    textAlign(CENTER, CENTER);
    fill(0, 200, 0);
    textFont(myFont);
    text("YOU WIN!", width / 2, height / 2, );

  }
}




function checkFlowers() {

  for (let f of flowers) {
    if (!f.collected && cx === f.x && cy === f.y) {
      f.collected = true;
      foundCount++;
    }
  }

  if (foundCount === 10) {
    gameState = "win";
  }
}


function keyChoice() {
  // the 'key' maps what characters on the keyboard you can use.
  // switch statment
  switch (key) {
    case 'a':
      console.log("a left");  // left
      cx += -gridSize;
      image(cat, cx, cy, gridSize, gridSize);
      break;
    case 'w':
      console.log("w up");  // up
      cy += -gridSize;
      image(cat, cx, cy, gridSize, gridSize);
      break;
    case 'd':
      console.log("d  right");  //right
      cx += gridSize;
      image(cat, cx, cy, gridSize, gridSize);
      break;
    case 's':
      console.log("s back");  // back
      cy += gridSize;
      image(cat, cx, cy, gridSize, gridSize);
      break;
    case 't':
      console.log("t text");  // text
      fill(255, 0, 0);
      text("Cat!", cx, cy, 200);
      break;
    default:             // Default executes if the case labels
      console.log("None");   // don't match the switch parameter
      break;
  }
  key = "";  // you can empty it so, it does not double trigger



}