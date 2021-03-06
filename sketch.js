var bullet, wall, wallleftedge, bulletrightedge;
var thickness;
var speed, weight;
var damage;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 30, 7);
  thickness = random(22,83);
  wall = createSprite(1220,200,thickness,height/2);

  speed = random(223,321);
  weight = random(30,52);
 
  bullet.velocityX = speed/3;
}

function draw() {
  background(0); 
   bullet.shapeColor = color(255,255,255)
  damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness)

  if(collided(bullet, wall)){
    
    bullet.velocityX = 0;
    if(damage > 10){
     wall.shapeColor = color(255,0,0)
    }
    if(damage < 10){
     wall.shapeColor = color(0,255,0)
    }

  }

  drawSprites();
}

function collided(bullet, wall)
{
  bulletrightedge = bullet.x + bullet.width;
  wallleftedge = wall.x
  if(bulletrightedge >= wallleftedge){
    return true
  }
  return false
}