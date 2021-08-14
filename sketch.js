var garden,rabbit;
var gardenImg,rabbitImg,apple2,leeaf,leeaf2;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple2=loadAnimation("apple.png")
  leeaf=loadAnimation("leaf.png");
  leeaf2=loadAnimation("orangeleaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


  // write your code here 
 
}

 

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX
  if (frameCount%200===0) {
    apple=createSprite(300,10,40,10);
    apple.addAnimation("runn",apple2)  
    apple.scale=0.07;
    apple.velocityY=3;                                        
    apple.x=Math.round(random(10,600))
     
    
  }
  if (frameCount%100===0) {
    leaf=createSprite(500,50,40,10)
    leaf.addAnimation("errrr",leeaf)
    leaf.scale=0.07;
    leaf.velocityY=3;
    leaf.x=Math.round(random(100,400))
  }
  if ( frameCount%300===0 ) {
    leaf2=createSprite(300,70,40,10)
    leaf2.addAnimation("errrr2",leeaf2)
    leaf2.scale=0.07;
    leaf2.velocityY=3;
    leaf2.x=Math.round(random(100,400))
  }
  drawSprites();
}

 
 
 