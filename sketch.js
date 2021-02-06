const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drop1, drop2, drop3, drop4, drop5, drop6, drop7, drop8, drop9, drop10, drop11, drop12, drop13, drop14, drop15, drop16, drop17, drop18, drop19, drop20;

var thunder1, thunder2, thunder3, thunder4;

var umbrella1;

var drops = [];

var maxDrops = 100;

var thunder;

function preload()
{
  
    thunder1 = loadImage("images/thunderbolt/1.png")
    thunder2 = loadImage("images/thunderbolt/2.png")
    thunder3 = loadImage("images/thunderbolt/3.png")
    thunder4 = loadImage("images/thunderbolt/4.png")

}

function setup()
{
    
    var canvas = createCanvas(350, 500);

    engine = Engine.create();
    world = engine.world;

    umbrella1 = new umbrella();

    if(frameCount % 150 === 0)
    {

    for(var i = 0; i < maxDrops; i++)
    {

        drops.push(new drop(random(0, 400), random(0, 400)))

    }

    }

    console.log(drops);

}

function draw()
{
    
    background("black");

    Engine.update(engine);

    umbrella1.display();

    for(var i = 0; i < maxDrops; i++)
    {

        drops[i].display();
        drops[i].reset();

    }

    Thunder();

    //console.log(mouseX);
    //console.log(mouseY);

    drawSprites();

}   

function Thunder()
{

    rand = Math.round(random(1, 4));
    if(frameCount % 80 === 0)
    {

        thunder = createSprite(random(0, 350), random(10, 30));

        switch(rand)
        {

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

        thunder.scale = random(0.3, 0.6);
        thunder.lifetime = 12;

    }

}