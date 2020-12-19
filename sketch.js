var car;
var wall;
var speed;
var weight;


function setup() {
createCanvas(1600,700);
speed = random(55,90);
weight = random(400,1500);

car = createSprite(500, 200, 50, 50);
car.shapeColor="green";
car.velocityX = speed;

wall = createSprite(1250, 200, 50, 130);
wall.shapeColor="white";
}

function draw (){
  background("blue");

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;

    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
