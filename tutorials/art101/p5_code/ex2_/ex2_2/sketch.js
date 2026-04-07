 let value = 0;
        
  function setup() {
    createCanvas(400, 400);
    colorMode(HSB);  // hue, sat, bright
    rectMode(CENTER);
  }
  function draw() {
    background(value,60,30); // hue, sat, bright
    fill(0,100,value); // hue, sat, bright
    ellipse(200, 200, 150, 150);
    fill(value*2,255,180); // hue, sat, bright
    rect(200, 200, 90, 90);
  } 

  function mouseMoved() {
    console.log(value );
    value = value + 5;
    if (value > 255) {
      value = 0;
    }
  }     
        
  