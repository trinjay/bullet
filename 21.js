var thickness,wall;
var speed,weight,bullet;

function setup() {
  createCanvas(1500,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2)
}

function draw() {
  background("black");  
  bullet.velocityX=speed;

 
  drawSprites();
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed *speed/(thikness *thickness *thickness);

  }
  if(damage>10)
  {
    wall.shapecolor=color(255,0,0);
  }


  if(damage>10)
  {
    wall.shapecolor=color(0,255,0);
  }
}
function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x = bullet.width;
  wallleftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}