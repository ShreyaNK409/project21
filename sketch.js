
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,rightside,leftside

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

    var options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}


	engine = Engine.create();
	world = engine.world;

	ball= Matter.Bodies.circle(400,100,20,options);
	World.add(world,ball);

	groundObj= new Ground(100,600,2000,10)
	leftside= new Ground(700,600,20,800)
	rightside= new Ground(300,600,20,800)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20) 
  groundObj.display()
  leftside.display()
  rightside.display()
  Engine.update(engine)
  drawSprites();
 
}

function keyPressed()
{
 if(keyCode===UP_ARROW)
 {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
 }
}
