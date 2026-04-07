let currentkey = '1';

let bgc ;

let gkcount;

let brushSize

function setup() {
    createCanvas(800, 600);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 20;
}

function draw() {
    brushSize = map(mouseY, 0, height, 0, 65);
    // triggering the clear_print function
    if( keyIsPressed) {
    clear_print();
}
// triggering the newkeychoice
if(mouseIsPressed) {
  drawChoice();
}


}
function keyPressed() {
    currentkey = key;
  }


function drawChoice() {

  switch(currentkey) {
case '1':
  console.log("1");  //rainbow cirlces 

  brush1(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2':
  console.log("2");  // blue triangles
brush2(color(255,220,200), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  console.log("3");  // pink lines
brush3( color(0,255,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '4':
  console.log("4");  // black outline circles
brush4(color(0,255,255), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '5':
  console.log("5");  // erase with bg color
  brush5(color(255), mouseX, mouseY, pmouseX, pmouseY);
   break;
case '6':
    console.log("6");  // explosion of circles
    brush6(color(0), mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 255 ) {

        gkcount = 30;
    } else {
        gkcount+=3;
    }

    break;
 
    case '7':// big pink circles
    console.log("7");  
   brush7(color(190,0,120,20), mouseX, mouseY, pmouseX, pmouseY);
break;


default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}

function brush1( k,  lx, ly,  px, py) {
 // strokeWeight(1);
  fill(random(255), random(255), random(255), 250);
    ellipse(mouseX , mouseY , 20,20);
  
  console.log(mouseX);
  console.log(pmouseX);
  strokeWeight(0.5);
  stroke(0);
}

function brush2( k,  lx, ly,  px, py) {
  strokeWeight(1);
    fill(100,215,220,150);
      triangle(mouseX - brushSize/2, mouseY + brushSize/2, mouseX + brushSize/2, mouseY + brushSize/2, mouseX, mouseY - brushSize/2);
      stroke(0);
}

function brush3(kcount, lx, ly,  px, py) {

  strokeWeight(6);
  stroke(200, 100, 150);
  line(lx, ly, px, py);

}
function brush4(k, lx, ly, px, py) {
  strokeWeight(0.5);
  stroke(1);4
  noFill(255);
  ellipse(lx, ly, brushSize, brushSize);
}


function brush6(k, lx, ly, px, py) {

    noStroke();
    
    let r = random(-80,80);
 
    for (let i = 0; i < 90; i+=20) {
     
      fill(k);
      ellipse(lx + i + r,ly + r,8,8);

    
    }

     for (let i = 0; i < 90; i+=20) {
        let r = random(-80,80);
      fill(color(random(100,200),90,0,34));
      ellipse(lx + i + r,ly + r,10,10);
    }


}
function brush5(k, lx, ly, px, py){
      stroke(k);
      strokeWeight(40);
      line(lx, ly, px, py);
    }
  
function brush7(k, lx, ly, px, py){
  fill(k);
  noStroke();
  ellipse(lx, ly, 80, 80);
}




function clear_print() {

// these 2 options let you choose between clearing the background
// and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
     background(255);
  } 

 if(key === 'd'){
    saveCanvas('artwork.jpg');
  }


}