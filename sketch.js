var fixrect, moverect;



function setup() {
  createCanvas(800,400);
  

  fixrect = createSprite(500, 300, 50, 100);
  moverect = createSprite(400, 300, 50, 50);

  fixrect.shapeColor = "blue";
  moverect.shapeColor = "blue";

  fixrect.velocityX = -2;
  moverect.velocityX = 2;
}

function draw() {
  background(255,255,255);
  
  
  bounceOff(moverect, fixrect)

  drawSprites();
}


