class Wall1{
    
    constructor(ww,hh,ww1,hh1){
    this.a = ww
    this.b= hh
    this.c=ww1
    this.d=hh1

    this.collicheck1=0;

    }
    display(ww,hh,ww1,hh1){
        push();
        fill(194,178,128);
        rect(ww,hh,ww1,hh1);
        pop();
    }
    collision1(ww,hh,ww1,hh1){
        if(x1 > ww-15 && x1 < ww + ww1+15 && y1 > hh-15 && y1 <hh + hh1+15){
            this.collicheck1=1; 
        }
        else
        {
            this.collicheck1=0;            
        }
        return this.collicheck1;
            
    }
}
