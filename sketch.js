var world,engine
var ground,ball

const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies
var box1,box2

function setup (){

  createCanvas (800,500)
  
  engine = Engine.create()
  world = engine.world

  var groundProperties = {
    isStatic: true
  }
  ground = Bodies.rectangle (400,490,800,20,groundProperties)
  World.add (world,ground)

 // console.log (ground)
  box1 = new Body (200,200)
  box2 = new Body (230,100)
  
}

function draw () {
  background ("blue")

  Engine.update (engine)

  rectMode (CENTER)
  rect(ground.position.x,ground.position.y,800,20)

  box1.display()
  box2.display ()
}