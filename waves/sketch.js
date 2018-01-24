let sizeW;
let sizeH;
let baseline;
let n;
let stripes = [];
let b;
let step;
let cols = [];
let col;
let xoff = 0.1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
//ff
//ff
//dfv

    //sel the first row parameters
    sizeW = 2;
    sizeH = 1000;
    baseline = windowHeight/2-200;

  for (let j = 0; j < 8; j++) {
      //set number of cols in this row
      n = Math.ceil(windowWidth / sizeW);

      stripes[j] = [];

      //set color for this row
      col = color(180,80,40+j*3);
      cols.push(col);

      //initiate arrays
      for (let i = 0; i < n; i++) {
          stripes[j][i] = new Stripe(i * sizeW, baseline, sizeW, sizeH, cols[j])
      }
     //iterate size and baseline between rows
      sizeW = sizeW*2;
      baseline = baseline + j*30;

  }

}


function draw() {
background(190,20,100);

    for (j=0; j<stripes.length; j++) {
        for (i = 0; i < stripes[j].length; i++) {
            //figure position of the rectangle
            stripes[j][i].calcPos(i, frameCount/j, noise(xoff));
            //draw the rectangle with color of the respective row
            stripes[j][i].show(cols[j]);
        }
        xoff+=0.0001;
    }

}


class Stripe {
    constructor(displ, base, sizeX, sizeY, colir) {
        this.displ = displ;
        this.base = base;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.colir = colir;
        this.Y;
    }

    //figure position of the rectangle
    calcPos(step, offset, naise){
    this.displ = step * this.sizeX;
    this.Y = this.base + sin((step*this.sizeX+offset)/20)*this.sizeX*naise*1.5;
    }

    //draw rectangle
    show(col) {
        noStroke();
        fill(this.colir);
        rect(this.displ, this.Y, this.sizeX, this.sizeY);
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
