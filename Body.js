class Body {
    constructor (x,y){
        var boxProp = {
            restitution: 0.8,
            friction: 1
        }
        this.body = Bodies.rectangle (x,y,50,100,boxProp);
        World.add (world,this.body );
        

    }

    display(){
    push ();
    translate (this.body.position.x,this.body.position.y)
    rotate (this.body.angle)
    rectMode(CENTER)
    rect(0,0,50,100)
    pop ();

    }
}