var water1=0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("#f814c5");
  fill("#add8e6");
  stroke("#cfe048");
  strokeWeight(5);
  ellipse(50,100,water1,water1);
  
  fill("#ff0000");
  ellipse(mouseX,mouseY,20,20);
  textSize(20);
  textFont("Georgia");
  textStyle(ITALIC);
  textAlign(CENTER);
  text("coco",40,40);
}

function mousePressed(){
  water1=water1+5;
}