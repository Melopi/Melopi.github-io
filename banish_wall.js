class Banish_wall{
    constructor(bw,bh,bw1,bh1)
    {
    this.a = bw
    this.b= bh
    this.c=bw1
    this.d=bh1
    this.collicheck2=0;
    }
    display(bw,bh,bw1,bh1){
        push();
        fill(255,255,0);
        rect(bw,bh,bw1,bh1);
        pop();
        text(timer,bw+12,bh+12,bw1,bh1);
    }
    collision2(bw,bh,bw1,bh1){
        if(x > bw-25 && x < bw + bw1+25 && y > bh-25 && y <bh + bh1+25){
            this.collicheck2=1;   
        }
        else
        {
            this.collicheck2=0;           
        }
        return this.collicheck2;     
    }
}