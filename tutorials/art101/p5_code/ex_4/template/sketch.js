 // arrays

 let lx,ly,speedx,speedy;
 let lx2,ly2,speedx2,speedy2;
              //0,1,2,3
 let names = ["Stu","Randaloph","Hippie","Wanda"];


function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
   
  console.log( names[1]);

  names[1] = "Randy";

 console.log( names[1]);



  lx = width/2;
  ly = height/2;
  speedx = random(-2,2);
  speedy = random(-2,2);

  lx2 = width/2;
  ly2 = height/2;
  speedx2 = random(-2,2);
  speedy2 = random(-2,2);


}

function draw() {
  background(0);



 ellipse(lx,ly, 50, 50);
 lx+=speedx;
 ly+=speedy;

 ellipse(lx2,ly2, 20, 20);
 lx2+=speedx2;
 ly2+=speedy2;




 
}

 // arrays
   
 
  //0,1,2,3

 xlist =      [0,0,0,0,0,0];
 ylist =      [0,0,0,0,0,0];
 speedxlist = [0,0,0,0,0,0];
 speedylist = [0,0,0,0,0,0];



function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
   

  for (let i = 0; i < 6; i++) {
  // ball i init
  xlist[i] = width/2;
  ylist[i] = height/2;
  speedxlist[i] = random(-2,2);
  speedylist[i] = random(-2,2);

  }

  

}

function draw() {
  background(0);


  for (let i = 0; i < 6; i++) {
 
 fill(255,0,0);
 ellipse(xlist[i],ylist[i], 20, 20);
 xlist[i]+=speedxlist[i];
 ylist[i]+=speedylist[i];

  }  // 4 balls are updated



 
}