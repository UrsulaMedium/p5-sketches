let b;
let baseline;
let a;
let d;
let side;

function setup() {
    createCanvas(windowWidth, windowHeight);
    side = 100;
    baseline = 100;
}


function mousePressed() {
    side = random(20, 250);
}

function draw() {
    background(240);
    fill(100, 95, 95);
    rectMode(CORNERS);
    noStroke();
    rect(0, windowHeight - baseline, windowWidth, windowHeight)
    b = new Box(mouseX, side, windowHeight - baseline - side / 2);
    b.show();
}

class Box {
    constructor(x, h, axis) {
        this.h = h;
        this.x = x;
        this.axis = axis;
    }

    show() {
        d = sqrt(Math.pow(this.h, 2) + Math.pow(this.h, 2));
        this.y = this.axis - abs(sin(this.x / this.h * PI)) * (d - this.h) / 2;
        ;
        push();
        translate(this.x, this.y);
        rotate(this.x / this.h * HALF_PI);
        fill(50, 60, 60);
        noStroke();
        rectMode(CENTER);
        rect(0, 0, this.h, this.h);

        pop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
