var helicopterIMG, helicopterSprite, packageSprite,packageIMG,rect1,rect1spr,rect2,rect3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 rect1= Bodies.rectangle(200,200,10,10,{isStatic:false});
	 World.add(world,rect1)
	 
	 w1=rect1.width
	 height1=rect1.height


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  rect (200,560,20,200);
  rect.shapeColor="red"
  rect(365,650,350,20)
  rect(550,560,20,200);
  
   
  drawSprites();
  keyPressed();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW){
		helicopterSprite.x=helicopterSprite.x-5
	}
	if (keyCode === RIGHT_ARROW){
		helicopterSprite.position.x=helicopterSprite.position.x+5
	}
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
Matter.Body.setStatic(packageBody,false);
    
  }
}



