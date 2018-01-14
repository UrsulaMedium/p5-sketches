let circles = [];
let counts = [];
let i;
let colo;
let diam1;
let diam;
let speed;
let duration;

function setup() {
  createCanvas(windowWidth,windowHeight);

  diam1 = 10;
  diam = 10;
  duration = 150;
}

function draw() {
  background(224,243,219);
  
   for (let i = 0; i<circles.length; i++) {
     diam = 10;
     if ((frameCount - counts[i])<duration) {
       circles[i].diam = diam+(frameCount - counts[i]);
        } else {
          circles[i].diam = diam + duration;
     }
     circles[i].show();
   }
}

class Circle{
  constructor(x,y,diam,col){
    this.diam = diam;
    this.col = col;
    this.x = x;
    this.y = y;
  }
   show() {
    fill(this.col);
    noStroke();
    ellipse(this.x, this.y, this.diam);
  }
}

function mouseDragged() {
  colo = color(random(50,250),10,random(100,200));
  b = new Circle(mouseX, mouseY, diam1, colo);
  circles.push(b);
  c = frameCount;
  counts.push(c);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
