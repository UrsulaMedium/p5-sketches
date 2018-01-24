let col;

function setup() {
  createCanvas(600, 400);
  background(255);

  for (let i = 0; i<12; i++){
      //random parent
      let col = color(random(255), random(255), random(255));
      let parentposX = random(width);
      let parentposY = random(height);
      let pdiam = random(30,100);

      push();
        translate(parentposX,parentposY);
        p = new Parent(parentposX, parentposY, pdiam, col);

          //draw children
          let childnum = random(15);

              for (let j = 0; j < childnum; j++){
                let chdiam = [];
                chdiam[j] = random(5,40);
                push();
                   //rotate if needed
                  if (chdiam>0) {
                     let anglcos =  (Math.pow((chdiam[j]/2+pdiam/2),2) + Math.pow((chdiam[j-1]/2+pdiam/2),2) - Math.pow((chdiam[j-1]/2+chdiam[j]/2),2))/2*(chdiam[j]/2+pdiam/2)*(chdiam[j-1]/2+pdiam/2);
                     let angl = Math.acos(anglcos);
                     rotate(angl);
                    };
                    translate(parentposX, parentposY+(chdiam[j]/2+pdiam/2));
                  let ch = new Child(0,0,chdiam, col);
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
    noStroke();
    fill(this.col);
    ellipse(0,0,this.diam);
  }
}

class Child{
  constructor(cposX,cposY, diam, col){
    this.cposX = cposX;
    this.cposY = cposY;
    this.diam = diam;
    this.col = col;
  }

  show(){
    noStroke();
    fill(this.col);
    ellipse(0,0,this.diam);
  }
}
