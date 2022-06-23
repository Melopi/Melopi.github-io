class Wall{
    
    constructor(rw,rh,rw1,rh1){
    this.a = rw
    this.b= rh
    this.c=rw1
    this.d=rh1
    this.collicheck=0;



    }
    display(rw,rh,rw1,rh1){
        push();
        fill(194,178,128);
        rect(rw,rh,rw1,rh1);
        pop();
    }
    collision(rw,rh,rw1,rh1){
        if(x > rw-20 && x < rw + rw1+20 && y > rh-20 && y <rh + rh1+20 ){
            this.collicheck=1;   
        }
        else
        {
            this.collicheck=0;           
        }
        return this.collicheck;     
    }

}