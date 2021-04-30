

var axe , wall;
var viking;
var mountainimage,vikingimage;
var obstacles;
var rockimage,rockburstimage;
var obstacleGroup,axeimage;
var axe;
var score = 0;
var life = 3;
var gameState = "play";
function preload(){

mountainimage = loadImage("images/MOUNTAIN IMAGE.jpg")
vikingimage = loadImage("images/viking image1.png")
rockimage = loadImage("rockk2.png")
rockburstimage = loadImage("t.png")
axeimage = loadImage("axeimage2.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);

   viking = createSprite(displayWidth/2,displayHeight-200,50,50);
  viking.shapeColor = "yellow";
  //continous movement of viking forward
 viking.velocityY = -3;
  viking.scale = 0.2;
  obstacleGroup = new Group()
  
}

function draw() {
  background("red");  
 image(mountainimage,0,-10*displayHeight,displayWidth,displayHeight*11)
 viking.addImage(vikingimage);
 fill ("yellow")
 stroke ("orange")
 textSize(30)
text ("LIFE:"+ life,displayWidth-120,viking.y - 200);



textSize(30)
text("Score:"+ score, displayWidth-120, viking.y - 150);
if(gameState==="play"){
  if(keyWentDown(RIGHT_ARROW)){

    viking.velocityX += 3
  
  }
  // moving the viking left
  if(keyWentDown(LEFT_ARROW)){
  
    viking.velocityX -= 3
  }
   camera.position.x = displayWidth/2;
   camera.position.y = viking.y; 
   createobstacles();
  
   //life method
   if(viking.isTouching(obstacleGroup)){
     life = life - 1
     obstacleGroup.destroyEach()
     
   }
  if(frameCount%20 === 0){
  
  score++;
  
  }
  if(life=== 0){

    gameState="end"
  }
}else if(gameState==="end"){

  viking.destroy()
 
 
   }

 
  drawSprites();
}
function createobstacles(){

if(frameCount%80 === 0){

  obstacles = createSprite(500,100,50,50);
  obstacles.debug = true
  
  obstacles.x = random(213,1281);
  obstacles.y = viking.y - 500 ;
  
  obstacles.velocityY = 1;
  obstacles.addImage(rockimage)
  //obstacles.addImage("rockburst",rockburstimage)
  obstacles.scale = 1.5;
  obstacles.lifetime = 200;
  obstacleGroup.add(obstacles);

}  


}
function keyPressed(){
  if(keyCode===32){
    axe = createSprite(viking.x,viking.y,30,30);
    console.log("hi")
    axe.addImage(axeimage)
    //axe.scale = 0.2;  
    axe.velocityY = -5
    
  }
}