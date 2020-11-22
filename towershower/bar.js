class bar {
    constructor(x,y,w,h)
    {
     var op=
     {
         isStatic:false
     }
     this.body=Body.rectangle(x,y,w,h,op);
     this.h=h;
     this.w=w;
     World.add(world,this.body);
     this.Visiblity=255;
    }
    score()
    { 
         var s=0;
        if(this.Visiblity<0 && this.Visiblity>200)
        {
            s++;  
        }
        this.s=s
    }
    display()
    {   
        text("score is"+ this.s,300,300);     
        if(this.body.speed < 4){
         fill("red")
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          pop();
        } 
         
    }
}