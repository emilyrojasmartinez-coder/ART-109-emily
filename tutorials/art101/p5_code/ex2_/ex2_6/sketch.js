let counterG = 0;
let counterR = 0;
let f;

/*
  You can get free font on the web.. the format that seems to work well with p5
  is .otf  format.    https://www.1001fonts.com/opentype-fonts.html
*/

// optional font loading
function preload() {
   f = loadFont('assets/space-age.spaceage.otf');
}

function setup() {
  createCanvas(800, 800);

  counterR = height;

  //optionally set the font for drawing
  if (f) {
    textFont(f);
  }

  // set color of text
  fill(0, 255, 0);


}

function draw() {
  // background(0, 15);
  // textSize(counterG);
  // textAlign(CENTER);
  // counterG += 5;

  // text("come home soon", width / 2, counterG);
  // if (counterG > height) {{
  //     counterG = 0;
  //   }
  // }

  //this is an example of 'and' logic
  if ( mouseIsPressed && keyIsPressed == true )  {
    textSize((counterR)/1.5);
    textAlign(CENTER);
    fill(255, 0, 0);
    text("Red is Betta ", width/2, counterR);
    counterR-=.5;
    if (counterR < -50) {
      counterR = height;
    }

  } else  {

  textSize((counterG+50)/5);
  textAlign(CENTER);
  fill(0, 255, 0);
  text("Green is good", width/3, counterG);

  counterG +=1.5;
    if (counterG > width) {
      counterG = -50;
    }

  }






}

