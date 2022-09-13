
var trex ,trex_running;
var ground, invisibleGround, groundImg;

function preload(){
trex_running=loadAnimation("trex1.png", "trex3.png","trex4.png") 
groundImg=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex=createSprite(50,200,20,50)
 trex.addAnimation("running", trex_running)
 trex.scale=0.5
 ground=createSprite(200,180,400,20)
 ground.addImage(groundImg)
 ground.x= ground.width /2;
 ground.velocityX = -4;
}


function draw(){
  background("white")
  if(keyDown("space")){
  trex.velocityY = -10; 
  }
//gravedad 
  trex.velocityY = trex.velocytyY +0.8

 if(ground.x<0){
ground.x=ground.width/2;
 }


trex.collide(ground);
  drawSprites();
}
