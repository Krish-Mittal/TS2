class ball {
    constructor(x,y,r)
    {
     var op=
     {
         isStatic:false
     }
     this.body=Body.circle(x,y,r,op);
     this.r=r;
     World.add(world,this.body);
    }
    display()
    {
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.r);
    }
}