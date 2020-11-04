const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
 var world,engine,box1,ground,ball,box2,box3,box4,box5,pig1,pig2,log1,log2,log3,log4,bird;
 var bg
 function preload()
 {
   bg=loadImage("sprites/bg.png");
 }
 function setup()
 {
   createCanvas(1200,400);
   engine = Engine.create();
   world = engine.world;
   ground=new Ground(600,380,1200,20);
   box1=new Box(700,330,70,70);
   box2=new Box(700,260,70,70);
   box3=new Box(920,330,70,70);
   box4=new Box(920,260,70,70);
   box5=new Box(810,160,70,70);
   pig1=new Pig(810,240);
   pig2=new Pig(810,310);
   log1=new Log(810,180,300,PI/2);
   log2=new Log(810,260,300,PI/2);
   log3=new Log(760,120,150,PI/7);
   log4=new Log(870,120,150,-PI/7);
   bird=new Bird(100,100);
 }
 function draw()
 {
   background(bg);
   
   Engine.update(engine);
   ground.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   pig1.display();
   pig2.display();
   log1.display();
   log2.display();
   log3.display();
   log4.display();
   bird.display();
 }