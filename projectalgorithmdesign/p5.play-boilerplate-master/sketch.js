var fixedrect,movingrect
var GameObject1,GameObject2,GameObject3,GameObject4;



function setup() {
  createCanvas(1200,800);
  
  fixedrect = createSprite(200, 200, 50, 80);
  fixedrect.shapeColor = "green";
  fixedrect.velocityX = 5;
  fixedrect.velocityY = 5;

  movingrect = createSprite(400, 200, 80, 30);
  movingrect.shapeColor = "green";
  movingrect.velocityX = -5;
  movingrect.velocityY = -5;

  GameObject1 = createSprite(100, 100, 50, 50);
  GameObject1.shapeColor = "green";

  GameObject2 = createSprite(200, 100, 50, 50);
  GameObject2.shapeColor = "green";

  GameObject3 = createSprite(300, 100, 50, 50);
  GameObject3.shapeColor = "green";

  GameObject4 = createSprite(400, 100, 50, 50);
  GameObject4.shapeColor = "green";

}

function draw() {
  
  background(0,0,0);  
  
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY
  
  if( isTouching(movingrect, GameObject1) ){
    movingrect.shapeColor = "blue";
    GameObject1.shapeColor = "blue";
    
  }else {
    movingrect.shapeColor = "green";
    GameObject1.shapeColor = "green";
  }

  bounceOff(movingrect, fixedrect);
  drawSprites();
}
