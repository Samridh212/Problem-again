var wall,thickness;
var bullet,speed,weight;



function setup() {
  thickness = random(22,83)
  speed = random(223,321);
  weight= random(30,52)
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,50)       
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,0); 
  bullet.velocityX = speed;
  
if(hasCollided(bullet, wall)){

  var damage =0.5 * weight * speed * speed/(thickness * thickness *thickness)
  
  if(damage>10)
    {
      wall.shapeColor = color(255,0,0);
    }

  if(damage<10)
   { 
  wall.shapeColor=color(0,255,0)  
   }
}

  drawSprites();
}
function hasCollided(lbullet, lwall)
{
   bulletRightEdge=lbullet.x =lbullet.width;
   wallLeftEgde=lwall.x;
   if (bulletRightEdge>=wallLeftEgde)
   {
     return true
   }
return false

}