class Pig{
    constructor(x,y){
        var Options={
            restitution:0.8,
            friction:0.3,
            dencity:1.0
        }
        this.pig=Bodies.rectangle(x,y,50,50,Options);
        this.width=50;
        this.height=50;
        World.add(world,this.pig);
    }
    display(){
        var pos=this.pig.position;
        var angle=this.pig.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        fill ("green")
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}