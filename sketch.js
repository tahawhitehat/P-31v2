const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var drops
function preload(){
    
}

function setup(){
 createCanvas(400,350);
 engine = Engine.create();
 world = engine.world; 
 drops = new Drops(random(0,400),random(0,400),50)
}

function draw(){
    background("black"); 
    Engine.update(engine);
    drops.update()
}   
