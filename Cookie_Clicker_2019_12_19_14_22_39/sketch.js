let cookie = {
  x: 200,
  y: 200,
  width: 250
}

let button1 = {
  x: 300,
  y: 20,
  width: 80
}
let img;
let score = 0;
let addScore = 0;
let ppc = 1;

function preload() {
 img = loadImage('cookie.png'); 
}

  function setup() {
    createCanvas(400, 400);
    

    //button = createButton('upgrade');
    //button.mouseClicked(multScore);
    //button.position(300, 20);
  

}

function multScore() {
  addScore = 2;
  //score = score + addScore;
}
function multScore2() {
  addScore = 5;
  //score = score + addScore;
}
function multScore3() {
  addScore = 10;
  //score = score + addScore;
}

function draw() {
  background("white");
  fill("tan");
  image(img, 100, 100);
  //ellipse(cookie.x, cookie.y, cookie.width, cookie.width)
  if (score >= 10) {
      button = createButton('+2 points per click');
      button.mouseClicked(multScore);
      button.position(260, 20);
      }
  if (score >= 100) {
      button = createButton('+5 points per click');
      button.mouseClicked(multScore2);
      button.position(260, 50);
      }
  if (score >= 500) {
      button = createButton('+10 points per click');
      button.mouseClicked(multScore3);
      button.position(260, 80);
      }
  
  
  if (mouseIsPressed && dist(img.x, img.y, mouseX, mouseY) <= img.width/2) {
    score = score + addScore;
    ellipse(200, 200, 230, 230);
  } else {
    ellipse(img.x, img.y, img.width, img.width);
  }
  
  /*if (score >= 10){
    ellipse(50,50,20,20)
  }
  
  if (score >= 20){
    ellipse(100,50,20,20)
  }
  
  if (score >= 30){
    ellipse(150,50,20,20)
  }
  
  if (score >= 40){
    ellipse(200,50,20,20)
  }
  
  
  line(mouseX, 0, mouseX, 400)
  line(0, mouseY, 400, mouseY)*/
  fill("black");
  textSize(25);
  //addScore = score;
  text("Score: " + (score /*+ addScore*/), 10, 30);
  text("Points/Click: (1) + " + addScore, 10, 60);
}


//function mousePressed() {
 // if ( dist(button1.x, button1.y, mouseX, mouseY) <= //(button1.width/2) ) {
    //addScore++;
  //}
 
//}
function mouseClicked() {
  if ( dist(cookie.x, cookie.y, mouseX, mouseY) <= (cookie.width/2)-25 ) {
    score++;
    score = score + addScore
  }
  //if (score == 10) {
    //button1 = createButton('upgrade');
    //button1.position(300, 20);
     //if(button1.mousePressed){
    //addScore++;
    //}
  //}
}
