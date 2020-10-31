var bananaImage;
var obstacleImage;
var obstacleGroup;
var backImage;
var score;
var player_running;
var scene;

function preload(){
   backImage = loadImage("jungle.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
    
}



function setup() {
  createCanvas(400, 400);
  
  scene = createSprite(200,200,200,200);
  scene.addImage(backImage);
  scene.scale=1.5;
  scene.x=scene.width/2;
  scene.velocityX=-4
  
  player = createSprite(100,340,200,50);
  
  player.addAnimation("running", player_running);
  player.scale=0.1;
   ground = createSprite(400,350,800,20);
  ground.visible=false;
  ground.x = ground.width /2;
  
  
}

function draw() {
  background(220);
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    if (scene.x <100){
      scene.x = scene.width/2;
      
    }
  spawnbanana();
  
  drawSprites();
}

function spawnbanana() {
  //write code here to spawn the banana
 if (frameCount % 60 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = player.depth;
   player.depth = player.depth + 1;
    
    //add each banana to the group
   // bananaGroup.add(banana);
  }
}

