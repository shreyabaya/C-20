var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  object1 = createSprite(300,200,50,80)
  object2 = createSprite(200,300,80,50)
fixedRect.debug = true;
movingRect.debug = true;
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if (isTouch(movingRect, object1)){
  movingRect.shapeColor = "blue"
  object1.shapeColor = "blue"
}
else{
  movingRect.shapeColor = "green"
  object1.shapeColor = "green"
}
  drawSprites();
}

