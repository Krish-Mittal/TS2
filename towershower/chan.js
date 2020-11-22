class chain {
    constructor(bodyA,pointB)
    {
     var op=
     {
         bodyA:bodyA,
         pointB:pointB,
         stiffness:0.04,
         length:10
     }
     this.chain=Constraint.create(op);
     
     this.pointB=pointB;
     World.add(world,this.chain);
    }
    attach(body)
    {
        this.chain.bodyA = body;
    }
    fly()
    {
        this.chain.bodyA = null;
    }
    display()
    {
        if(this.chain.bodyA)
    { 
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
    
  
}
}       

  