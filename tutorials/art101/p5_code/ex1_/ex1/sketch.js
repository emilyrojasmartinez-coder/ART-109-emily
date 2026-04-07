
function setup() {
createCanvas(500,500);
background(255);

}


function draw() {
background(120);
stroke(255);


let ran = random(0); // 0-100
//let ran = mouseX; // 0-100
let ran2 = random(0); // 0-500


 let leftix = 60;
 let leftiy = 60;
 let rightix = 200;
 let rightiy = 60;


// let ran = 50; // 0-100
// let ran2 = 50; // 0-500


// (greyscale)  = black
fill(250,120,180);


// lox, loy, width, height   [ parameters or arguments]
// default drawing is center out.
ellipse(240,250,280,450);
// overloading is all about different parameters
//  to create different behavior
 // r,g,b


 // left
fill(185,15,125);
ellipse(leftix + ran +125,leftiy+ 100,ran +70,100);
// grey, a
fill(255,190);
ellipse(leftix +ran2 +125,leftiy + 100,50,ran +50);
 // r,g,b,a
fill(0,255,0,100);
ellipse(leftix +ran +125,leftiy + 100,20,ran2 +20);




// right
fill(185,15,125);
 ellipse(rightix+ ran +90,rightiy + 100,ran +70,100);
// grey, a
fill(255,190);
ellipse(rightix + ran2 +90,rightiy +100,50,ran +50);


 // r,g,b,a
fill(0,255,0,100);
ellipse(rightix + ran +90,rightiy + 100,20,ran2 +20);


  // r,g,b,a
  fill("pink");
  // x, y, w, h, c
  // draws by default from the top-left
rect(200,350,90,50,20);


fill(50,50,120);
// x, y, w, h, c1,c2,c3,c4
rect(200,250,80,50,55,50,250,250);


stroke(255,50,10);
 //x1,y1,x2,y2
 line(130, 220, 160, 325);


   /*
 */


}


