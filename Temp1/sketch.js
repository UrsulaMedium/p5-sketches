let boxes = [];

function setup() {
  createCanvas(800,800);
  for (i = 0; i<6000; i++){
  b = new Box(random(width),random(height), random(1,70), random(1,70));
  boxes.push(b);
  }
}

function draw() {
  background(80);
  for (item of boxes){
  item.show();
  }
}

class Box{
  constructor(x,y,w,h){
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
  }

  show() {
    fill(200,10);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }

}
