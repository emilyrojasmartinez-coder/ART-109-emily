
let b;
let b2

function setup() {
  createCanvas(500, 500);
  // simple net test
  b = loadImage("https://i.ytimg.com/vi/SQJrYw1QvSQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBY9A7Gomuj6iHkoDkSidTzx0bZAw");
  // Images must be in a "assets" directory to load correctly
  b = loadImage("assets/flower.png");
  b2 = loadImage("assets/flower2.png");
  b3 = loadImage("assets/standingcat.jpg");

}

function draw() {
  background(0);
  //imagedata, x,y,w,h
  image(b, 0, 0, 150, 150);
  image(b, 50, 50, 150, 150);
  image(b, 90, 80, 150, 150);
  image(b, 150, 150, 150, 150);
  image(b, 210, 200, 150, 150);
  image(b, 250, 220, 150, 150);
  image(b, 290, 250, 150, 150);
  image(b, 320, 290, 150, 150);
  image(b, 350, 320, 150, 150);
  image(b, 400, 400, 150, 150);
  image(b3, 200, 100, 350, 250);
  image(b2, 100, 250, 250, 250);
  // when you have the images placed/loaded correctly, uncomment the line below, to show the pineapple
  //image(b2, 200, 200, 100,100);
} 
