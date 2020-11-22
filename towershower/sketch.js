const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Bodies;
const Constraint=Matter.Constraint;
var ground1,floor1,floor2,ball1,con;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var cd="yellow";
function preload()
{
  
}
function setup() {

  createCanvas(800,400);
  engine =Engine.create();
  world = engine.world;
  
  ground1=new ground(400,370,800,10);
  floor1=new ground(350,200,300,20);
  ball1=new ball(100,200,30);
  con=new chain(ball1.body,{x:100,y:200})
  b1=new bar(255,165,50,35)
  b2=new bar(305,165,50,35)
  b3=new bar(355,165,50,35)
  b4=new bar(405,165,50,35)
  b5=new bar(455,165,50,35)
  b6=new bar(275,130,50,35)
  b7=new bar(325,130,50,35)
  b8=new bar(375,130,50,35)
  b9=new bar(425,130,50,35)
  b10=new bar(355,95,50,35)
  b11=new bar(405,95,50,35)
  b12=new bar(305,95,50,35)
  b13=new bar(325,60,50,35)
  b14=new bar(375,60,50,35)
  b15=new bar(355,25,50,35)
 // cb()
}

function draw() {
  
  background(cd);
  Engine.update(engine);
  
  floor1.display();
  ground1.display();
  con.display();
  ball1.display();
 if(mouseDown("leftButton"))
  {
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});

  }
  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
 
  drawSprites();

}

function mouseReleased()
{
 con.fly()
}
function keyPressed(){

  if (keyCode==32)
  {  
    Matter.Body.setPosition(ball1.body, {x:100 , y:200 });

    con.attach(ball1.body)
    
  }
}
/*function mouseDragged()
{
  Matter.Body.setPosition(bodyA, {x: mouseX , y: mouseY});
}   */
async function cb()
  {
    var rps= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var rpsjson= await rps.json();
    var dt= rpsjson.datetime;
    var sd= dt.slice(11,13);
  //  var time;
  
    if(sd>=6 && sd<=18)
    {
    // background("yellow")
   // time=cd
    cd=loadImage("day.png");
    }
    else
    {
      //background("black")
     // time=cn;
      cd=loadImage("night.png");
    }
  }