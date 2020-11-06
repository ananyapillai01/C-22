//namespacing
//universe 
const Engine = Matter.Engine; 

//world is actually inside the engine. All the objects live in the world, they all follow proeprties of physics. 
const World = Matter.World;

//objects that live in the world. 
const Bodies = Matter.Bodies;


var engine, world;

var ground, ball;

function setup() {
  createCanvas(800,400);


   engine = Engine.create();
   world = engine.world;

   var options = {
     isStatic: true
   }
   //you cannot see object. It gets created in the memory of the computer. 
   ground = Bodies.rectangle(400,380,800,20,options);
   //add my world, my object to the physics world. 
   World.add(world, ground);
   console.log(ground);

   //x 
   console.log(ground.position.x);

  
   ball = Bodies.circle(200, 100, 20, {restitution: 1.0});
   World.add(world, ball);
   console.log(ball);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20); 
 // drawSprites();
ellipseMode(RADIUS);
 ellipse(ball.position.x, ball.position.y, 20,20);
}