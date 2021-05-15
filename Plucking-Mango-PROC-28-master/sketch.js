
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var mangoBodyPosition,stoneBodyPosition

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  treee=new tree(1000,600)

  mango1=new mango(900,299,30)
  mango2=new mango(990,270,30)
  mango3=new mango(1100,200,30)
  mango4=new mango(1150,150,30)
  mango5=new mango(1050,110,30)
  mango6=new mango(1000,110,30)
  mango7=new mango(950,100,30)
  mango8=new mango(950,169,30)
  mango9=new mango(890,210,30)

  stone1=new stone(240,420,25)

  con=new Launcher(stone1.body,{x:240,y:420})


	Engine.run(engine);
 
}

function draw() {

  background(230);
  
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);

  treee.display();
 
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();

 stone1.display();

 con.display();

 detectCollision(stone1,mango1);
 detectCollision(stone1,mango2);
 detectCollision(stone1,mango3);
 detectCollision(stone1,mango4);
 detectCollision(stone1,mango5);
 detectCollision(stone1,mango6);
 detectCollision(stone1,mango7);
 detectCollision(stone1,mango8);
 detectCollision(stone1,mango9);








}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  con.fly();
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone1.body,{x:240,y:420})
    con.attach(stone1.body);
  }
}
function detectCollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
   var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
   	if(distance<=lmango.r+lstone.r)
     {
   	  Matter.Body.setStatic(lmango.body,false);
    }
 }
// function detectCollision(s,m){

// var collision=Matter.Body.SAT.collides(s,m)
// if(collision.collided){
//   console.log(collided)
//   Matter.Body.setStatic(m,false)
//  }
// }


