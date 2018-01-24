let col;
let anglcos;
let angl;

function setup() {
  createCanvas(800, 600);
  background(240);

  for (let i = 0; i<8; i++){
      //random parent
      let col = color(random(255), random(255), random(255));
      let parentposX = random(width);
      let parentposY = random(height);
      let pdiam = random(40,160);

      angl = 0;

      push();
        translate(parentposX,parentposY);
        p = new Parent(parentposX, parentposY, pdiam, col);
        p.show();

          //draw children
          let childnum = random(10);
          let chdiam = [];
              for (let j = 0; j < childnum; j++){
                chdiam[j] = random(5,40);

                  push();
                     //rotate canvas if needed
                    if (j>0) {
                      a = chdiam[j]/2+pdiam/2;
                      b = chdiam[j-1]/2+pdiam/2;
                      c = chdiam[j-1]/2+chdiam[j]/2;
                       anglcos = (Math.pow(a,2) + Math.pow(b,2) - Math.pow(c,2))/(2*a*b);
                       angl = angl + Math.acos(anglcos);
                       rotate(angl);
                    };
                      translate(0, 0+(chdiam[j]/2+pdiam/2));
                        let ch = new Child(0,0,chdiam[j], col);
                        ch.show();
                  pop();
              }
      pop();

  }

}

function draw() {
}

class Parent{
  constructor(pposX,pposY, diam, col){
    this.pposX = pposX;
    this.pposY = pposY;
    this.diam = diam;
    this.col = col;
  }

  show(){
    stroke(100);
    fill(this.col);
    ellipse(0,0,this.diam);
  }
}

class Child{
  constructor(cposX,cposY,cdiam, ccol){
    this.cposX = cposX;
    this.cposY = cposY;
    this.cdiam = cdiam;
    this.ccol = ccol;
  }

  show(){
    stroke(100);
    fill(this.ccol);
    ellipse(this.cposX,this. cposY,this.cdiam);
  }
}
