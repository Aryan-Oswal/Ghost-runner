var tower;
var towerImg;
var doors;
var doorsImg;
var doorsGroup;
var climber;
var climberImg;
var climberGroup;
var ghost;
var ghostImg;
var invisbleBlock;
var invisbleBlockGroup;
var sound1;
var PLAY =1;
var END = 0;
var GameState = PLAY;
function preload(){
  towerImg = loadImage("tower.png")
  doorsImg = loadImage("door.png")
  climberImg  = loadImage("climber.png")
  ghostImg = loadImage("ghost-standing.png")
  sound1 = loadSound("spooky.wav")
  doorsGroup = createGroup();
  climberGroup = createGroup();
  invisbleBlockGroup = createGroup();
}



function setup(){
  createCanvas(600,600)
  background("white")
  
  tower = createSprite(300,300)
  tower.addImage(towerImg)
  tower.velocityY = 1;
  
  ghost = createSprite(300,300,10,10)
  ghost.addImage(ghostImg)
  ghost.scale  = 0.35;
  
  sound1.loop()
}


function draw(){
  background("white");
  
  if(tower.y > 400){
    tower.y = 300;
  }
  
   

  
  
  
  

  
  
  if(GameState === PLAY){
    ghost.velocityY = ghost.velocityY + 1;
    
    
      if(keyDown("space")){
        ghost.velocityY = -6
      }
  
  
      if(keyDown("right")){
         ghost.x = ghost.x+3
      }
  
  
      if(keyDown("left")){
        ghost.x = ghost.x-3
      }
  
    
      if(frameCount % 300 === 0){ 
        spawnDoors();
      }
      if(tower.y > 400){
        tower.y = 300;
      }
    
    
        if(ghost.isTouching(climberGroup)){
        ghost.velocityY = 0
      }
  
      if(invisbleBlockGroup.isTouching(ghost) || ghost.y > 600){
        ghost.destroy();
        GameState = END;
      } 
    drawSprites();
    
  }
  
  if(GameState === END){
    textSize(40)
    text("Game Over" ,300,300)
    
  
  }
  
 
  
  
}


function spawnDoors(){
  doors = createSprite(200,-50)
  doors.addImage(doorsImg)
  doors.velocityY = 1;
  doors.x = Math.round(random(100,500))
  doors.depth = ghost.depth
  ghost.depth = ghost.depth + 1
  doorsGroup.add(doors)
  
  climber = createSprite(200,10)
  climber.addImage(climberImg);
  climber.velocityY = 1;
  climber.x = doors.x;
  climberGroup.add(climber)   
  
  
  invisbleBlock = createSprite(200,15)
  invisbleBlock.velocityY = 1;
  invisbleBlock.x = doors.x;
  invisbleBlock.width = climber.width;
  invisbleBlock.height = 2;
  invisbleBlockGroup.add(invisbleBlock)
}




