

//You can use a variable in an array for example here he used ballcount so you don’t have to constantly add 0s but just give it a number.

// arrays
 
 //0,1,2,3


let ballcount = 270;
let xlist =      new Array(ballcount);
let ylist =      new Array(ballcount);
let speedxlist = new Array(ballcount);
let speedylist = new Array(ballcount);
let kolors = new Array(ballcount);


function setup() {
 createCanvas(500,500);
 background(20);
 fill(255);
 
//colorMode(HSB);
 for (let i = 0; i < xlist.length; i++) {
 // ball i init
 xlist[i] = width/2;
 ylist[i] = height/2;
 speedxlist[i] = random(-2,2);
 speedylist[i] = random(-2,2);
 kolors[i] = color( random(255), random(255), random(255));


 }


}


function draw() {
 background(0);




 for (let i = 0; i < xlist.length; i++) {
fill(kolors[i]);
ellipse(xlist[i],ylist[i], 20, 20);
xlist[i]+=speedxlist[i];
ylist[i]+=speedylist[i];


 }  // 4 balls are updated


}
