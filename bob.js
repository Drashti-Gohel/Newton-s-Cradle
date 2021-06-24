class Bob{
    constructor(x,y,radius){
        var options = {
            restitutions:0.3,
            friction:0.1,
            density:1.2,
            isStatic:false,
        }
        this.body = Matter.Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius=30;
        

    }
    display(){
        push ();
        fill (255,0,255);
        ellipse( this.body.position.x, this.body.position.y, this.radius,30);
        pop ();
    }
}