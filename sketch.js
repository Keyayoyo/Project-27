var bob1,bob2,bob3,bob4,bob5,bobDiameter;
var roof;
var rope1,rope2,rope3,rope4,rope5 ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	bob1 = new Bob(280,500,30);
	bob2 = new Bob(340,500,30);
	bob3 = new Bob(400,500,30);
	bob4 = new Bob(460,500,30);
	bob5 = new Bob(520,500,30);

	roof = new Roof(400,100,300,30);

	rope1 = new Rope(bob1.body,{x:280,y:100})
	rope2 = new Rope(bob2.body,{x:340,y:100})
	rope3 = new Rope(bob3.body,{x:400,y:100})
	rope4 = new Rope(bob4.body,{x:460,y:100})
	rope5 = new Rope(bob5.body,{x:520,y:100})

}


function draw() {
  background(255);
  Engine.update(engine);
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-35,y:-45})
	}
}

