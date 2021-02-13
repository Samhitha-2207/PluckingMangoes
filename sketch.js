
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var boyImg;
var boy;
var stoneObject;
var launchingForce = 100;

function preload() {
	boyImg = loadImage("images/boy.png");
	//mangoimage = loadImage("images/mango.png");
}

function setup() {
	createCanvas(900, 700);

	engine = Engine.create();
    world = engine.world;

	//Create the Bodies Here.

	boy = createSprite(100,600,10,10);
	boy.addImage("boy.png",boyImg);
	boy.scale = 0.1;

	//ball = createSprite(50,550,10,10);

	stoneObject = new Stone(50,580,10);

	ground = new Ground(400,650,1000,10);

	tree = new Tree(600,670,20,20);
	
	mangoObject1 = new Mango(600,180,10);
	mangoObject2 = new Mango(680,280,10);
	mangoObject3 = new Mango(600,250,10);
	mangoObject4 = new Mango(520,300,10);
	mangoObject5 = new Mango(550,200,10);

	elasticObject = new Elastic(stoneObject.body,{x:50, y:550});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  stoneObject.display();
  ground.display();
  tree.display();
  mangoObject1.display();
  mangoObject2.display();
  mangoObject3.display();
  mangoObject4.display();
  mangoObject5.display();
  //elasticObject.display();

  detectCollision(stoneObject,mangoObject1);
  detectCollision(stoneObject,mangoObject2);
  detectCollision(stoneObject,mangoObject3);
  detectCollision(stoneObject,mangoObject4);
  detectCollision(stoneObject,mangoObject5);
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObject.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    elasticObject.fly();
}

function detectCollision(lstone,lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stoneObject.body, {x:50,y:550})
		elasticObject.attach(stoneObject.body);
	}
}