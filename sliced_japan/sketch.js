function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(40);
    noStroke();
    fill(230,10,110);
    ellipse(windowWidth/2, windowHeight/2, windowHeight/4);

    stroke(240);
    strokeWeight(20);
    curveTightness(5);

    curve(0, 0, windowWidth, windowHeight);
    curve(windowWidth/2+50, windowHeight/2-50, windowWidth/2, windowHeight/2+100);

    //noLoop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

//function makeCurve()