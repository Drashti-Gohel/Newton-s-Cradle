
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(330,250,20);
	World.add(world,bob1);
	bob2 = new Bob(360,250,20);
	World.add(world,bob2);
	bob3 = new Bob(390,250,20);
	World.add(world,bob3);
	bob4 = new Bob(420,250,20);
	World.add(world,bob4);
	bob5 = new Bob(450,250,20);
	World.add(world,bob5);
	roof = new Roof(390,140,140,20);
	World.add(world,roof);
	
	rope = new Rope(bob1.body,{x:330,y:145});
	rope2 = new Rope(bob2.body,{x:360,y:145});
	rope3 = new Rope(bob3.body,{x:390,y:145});
	rope4 = new Rope(bob4.body,{x:420,y:145});
	rope5 = new Rope(bob5.body,{x:450,y:145});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:10});
	}
}