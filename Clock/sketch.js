var h;
var m;
var s;
var hours = ["00","01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13","14","15","16", "17","18","19","20", "21","22","23"];
var minutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
var seconds = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
var diameter = 500;
var step_ms;
var step_m;
var step_h;
var msr;
var myFont;

//Load font
function preload() {
  myFont = loadFont('fonts/Prata/Prata-Regular.ttf');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

h = hour();
m = minute();
s = second();
msr = Date.now() % 1000;
textFont(myFont);
background(25);

//Highlight rectangle
rectMode(CENTER);
fill(200);
stroke(200);
strokeWeight(2);
rect(width / 2, height / 2+3, 320, 50);


//Rotating hours

 push();
   translate(width / 2 - diameter, height / 2);
    if (m<59) {
      rotate(radians(h/24*360));
    } else if (s<59){
      rotate(radians(h/24*360));
    }
    else if (msr<900) {
      rotate(radians(h/24*360));
    }
    else {
      step_h= map(msr, 900,999,0,1/24*360);
      rotate(radians(h/24*360 + step_h));
    }

    for (var i = (hours.length - 1); i >= 0; i -= 1) {
      rotate(2 * PI / hours.length);
      textAlign(CENTER, CENTER);
       if (i/24*360 == h/24*360) {
          stroke(30);
          fill(30);
          strokeWeight(1);
          textSize(32);
       } else {
          stroke(100);
          fill(100);
          strokeWeight(0);
          textSize(32);
       }

      text(hours[i], diameter-100, 0);
    }
 pop();


//Rotating minutes

  push();
    translate(width / 2 - diameter, height / 2);

    if (s<59) {
      rotate(radians(m/60*360));
    } else if (msr<900) {
      rotate(radians(m/60*360));
    }
    else {
      step_m= map(msr, 900,999,0,1/60*360);
      rotate(radians(m/60*360 + step_m));
    }

     for (var i = (minutes.length - 1); i >= 0; i -= 1) {
      rotate(2 * PI / minutes.length);
      textAlign(CENTER, CENTER);
       if (i/60*360 == m/60*360) {
          stroke(30);
          fill(30);
          strokeWeight(1);
          textSize(32);
       } else {
          stroke(100);
          fill(100);
          strokeWeight(0);
          textSize(32);
       }

      text(minutes[i], diameter, 0);
    }
  pop();


//Rotating seconds

  push();
    translate(width / 2 - diameter, height / 2);

    if (msr<900) {
      rotate(radians(s/60*360));
    }
    else {
      step_ms= map(msr, 900,999,0,1/60*360);
      rotate(radians(s/60*360 + step_ms));
    }


    for (var i = (seconds.length - 1); i >= 0; i -= 1) {
      rotate(2 * PI / seconds.length);
      textAlign(CENTER, CENTER);
      if (i/60*360 == s/60*360) {
          stroke(30);
          fill(30);
          strokeWeight(1);
          textSize(32);
       } else {
          stroke(100);
          fill(100);
          strokeWeight(0);
          textSize(32);
       }
      text(seconds[i], diameter+100, 0);
    }
  pop();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




//function circle(measure,diam){
//  for (var n = (measure.length - 1); n >= 0; n -= 1) {
//      rotate(2 * PI / measure.length);
//      textAlign(CENTER, CENTER);
//      text(measure[n], diam, 0);
//  }
//}
