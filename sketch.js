const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var maxDrops = 100;
var boy, thunderGroup;
var drops;


function preload(){
  thunder1 = loadImage("1.png");
  thunder2 = loadImage("2.png");
  thunder3 = loadImage("3.png");
  thunder4 = loadImage("4.png");
} 

function setup(){
  var canvas = createCanvas(400, 600);
  engine = Engine.create();
  world = engine.world;

  boy = new Umbrella();
}

function draw() {
  background(0);
  Engine.update(engine);

  // for (var i=0; i<maxDrops; i++){
  //   drops.push(new Drops(random(0, 400), random(0, 400)));
  // }

  boy.display();

  Thunder();
  drawSprites();
}

function Thunder() {
  if(frameCount % 50 === 0) {
    var thunder = createSprite(200,100,10,40);
    
    //generate random obstacles
    var rand = Math.round(random(1, 4));
    switch(rand) {
      case 1: thunder.addImage(thunder1);
            break;
      case 2: thunder.addImage(thunder2);
            break;
      case 3: thunder.addImage(thunder3);
            break;
      case 4: thunder.addImage(thunder4);
            break;
      default: break; 
}
    
    //assign scale and lifetime to the obstacle           
    thunder.scale = 0.3;
    thunder.lifetime = 11;
  }
}

