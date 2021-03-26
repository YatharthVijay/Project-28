const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var tree, stone, ground, launcher;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;

var boyImage;

function preload()
{
  boyImage = loadImage("images/boy.png");
}

function setup()
{
  createCanvas(1200, 600);
  
	engine = Engine.create();
	world = engine.world;

  ground = new Ground(width/2, 600, width, 20);
  tree = new Tree(950, 320);
  stone = new Stone(235, 420, 30);
  launcher = new Launcher(stone.body, {x:235, y:420});

	mango1 = new Mango(900, 100, 30);
  mango2 = new Mango(940, 100, 30);
	mango3 = new Mango(980, 100, 30);
	mango4 = new Mango(900, 180, 30);
	mango5 = new Mango(940, 180, 30);
	mango6 = new Mango(980, 180, 30);
	mango7 = new Mango(1020, 180, 30);
	mango8 = new Mango(860, 260, 30);
	mango9 = new Mango(900, 260, 30);
	mango10 = new Mango(950, 260, 30);
	mango11 = new Mango(1000, 260, 30);
	mango12 = new Mango(1050, 260, 30);

	Engine.run(engine);
}

function draw()
{
  rectMode(CENTER);
  background("black");

  image(boyImage, 200, 340, 200, 350);
  
  ground.display();
  tree.display();
  stone.display();
  launcher.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);
  detectollision(stone, mango4);
  detectollision(stone, mango5);
  detectollision(stone, mango6);
  detectollision(stone, mango7);
  detectollision(stone, mango8);
  detectollision(stone, mango9);
  detectollision(stone, mango10);
  detectollision(stone, mango11);
  detectollision(stone, mango12);

  fill("blue");
  textSize(40);
  text("Press 'Space' to play again!!", 50, 200);

  drawSprites();
}

function mouseDragged()
{
	Body.setPosition(stone.body, {x: mouseX, y: mouseY}); 
}

function mouseReleased()
{
	launcher.fly();
}

function keyPressed()
{
  if (keyCode === 32)
  {
    Body.setPosition(stone.body, {x: 235, y: 420}) 
	  launcher.attach(stone.body);
	}
}

function detectollision(lstone, lmango)
{
  var mangoBodyPosition = lmango.body.position;
  var stoneBodyPosition = lstone.body.position;  
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

  if(distance <= lmango.radius + lstone.radius)
  {
    Body.setStatic(lmango.body, false);
  }
}