let balls = [];


function setup() {
  createCanvas(400, 400); 
  noStroke();
  background(0);
  
  for (let i=0; i<90; i++) {
    let b = new Walker();
    balls.push(b);
  }
  
}


function draw() {
  
  for (let b of balls) {
    if (b.distToMouse() < 60) {
      b.move();
    }
    b.show();
  }
  
}