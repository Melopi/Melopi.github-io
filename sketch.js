let x = 0, y=0,x1= 0, y1=0;
let d = 100;
let f = 51;
let HP = 1;
let z = 40;
let playcheck = 0;
let button;
let move= 6, move1 = 5;
let timer = 30;

let h = 80;
let block1 = [] ,block2 = [], block3 = [],block4 = [] ,block5 = [];
let Block1 = [] ,Block2 = [], Block3 = [],Block4 = [] ,Block5 = [];
let Bblock1 = [],Bblock2 = [],Bblock3 = [],Bblock4 = [],Bblock5 = [];
let BblockCol1 = [], BblockCol2 = [], BblockCol3 = [], BblockCol4 = [], BblockCol5 = [];
let blockCol1 = [], blockCol2 = [], blockCol3 = [], blockCol4 = [], blockCol5 = [];
let BlockCol1 = [], BlockCol2 = [], BlockCol3 = [], BlockCol4 = [], BlockCol5 = [];
let finalcheck = 0;
let finalcheck1 = 0;
let finalcheck2 = 0;


function setup() {
  button = createButton('Start Game');
  createCanvas(880, 880);
  x1=width/2;
  y1=height-40;
  x = width/2;
  y= 40;
  for(let i = 0; i<4; i++){
    Bblock1[i]= new Banish_wall();
    Bblock2[i]= new Banish_wall();
    Bblock3[i]= new Banish_wall();
    Bblock4[i]= new Banish_wall();
    Bblock5[i]= new Banish_wall();
    BblockCol1[i]=0;
    BblockCol2[i]=0;
    BblockCol3[i]=0;
    BblockCol4[i]=0;
    BblockCol5[i]=0;
  }
  for(let i = 0; i < 5; i ++)
  {
    block1[i] = new Wall();
    block2[i] = new Wall();
    block3[i] = new Wall();
    block4[i] = new Wall();
    block5[i] = new Wall();
    Block1[i] = new Wall1();
    Block2[i] = new Wall1();
    Block3[i] = new Wall1();
    Block4[i] = new Wall1();
    Block5[i] = new Wall1();
    blockCol1[i] = 0;
    blockCol2[i] = 0;
    blockCol3[i] = 0;
    blockCol4[i] = 0;
    blockCol5[i] = 0;
    BlockCol1[i] = 0;
    BlockCol2[i] = 0;
    BlockCol3[i] = 0;
    BlockCol4[i] = 0;
    BlockCol5[i] = 0;
  }
}

function draw() {
background(180);
player1();
player2();
goal_line();
make_wall();
make_banish_wall();
EndOfGame();
ballcrash();
goal_in();
window_barrior();



}
function player1(){
  
  
  for(let i = 0; i <4; i ++)//1P Yellow wall
  {

    if(BblockCol1[i] == 1 ||  BblockCol2[i] == 1 || BblockCol3[i] == 1 
    || BblockCol4[i] == 1 || BblockCol5[i] == 1) 
    {
      finalcheck2 = 1;
      break;            
    }
    else{
      finalcheck2 = 0;
    }
  }


    for(let i = 0; i <5; i ++)//1P wall
    {

      if(blockCol1[i] == 1 ||  blockCol2[i] == 1 || blockCol3[i] == 1 
        || blockCol4[i] == 1 || blockCol5[i] == 1) 
      {
        finalcheck = 1;
        break;            
      }
      else{
        finalcheck = 0;
      }
    }
    if(finalcheck == 1 )
    {
      move = 1.5;
    }
    else if (finalcheck2 == 1){
      move = 1.5;
    }
    else{
      move = 6;
    }


    push(); //1P move
    if(keyIsDown(65)){
      x-=move;
    }
    if(keyIsDown(68)){
      x += move;
    }
    if(keyIsDown(87)){
      y -=move;
    }
    if(keyIsDown(83)){
      y+=move;
    }
    fill(255,0,0);
    ellipse(x,y,40,40);
    pop();
  
}
function player2()
{

  for(let i = 0; i<5; i++){//2P wall
    if(BlockCol1[i] == 1 ||  BlockCol2[i] == 1 || BlockCol3[i] == 1 
      || BlockCol4[i] == 1 || BlockCol5[i] == 1)
    {
      finalcheck1 = 1;
      break;            
    }
    else{
      finalcheck1 = 0;
    }
}
    if(finalcheck1 == 1 )
    {
      move1 = 0.5;
    }
    else{
      move1 = 5;
    } 

  push(); //2P move
  if(keyIsDown(LEFT_ARROW)){
    x1-=move1;
  }
  if(keyIsDown(RIGHT_ARROW)){
    x1 += move1;
  }
  if(keyIsDown(UP_ARROW)){
    y1 -=move1;
  }
  if(keyIsDown(DOWN_ARROW)){
    y1+=move1;
  }
  fill(255,255,0);
  ellipse(x1,y1,30,30);
  pop();
}

function ballcrash()   //if 1P hit 2P
{    
  let dis = 100;
    dis = dist(x1, y1, x,y);
    if(dis<d/2)
    {
      HP--;
    }
  }
  function goal_in()    //if 2P hit goal line
{    
  let dis = 100;
    dis = dist(x1, y1, z,z);
    dis2 = dist(x1,y1,840,40);
    if(dis<f/2)
    {
      HP++;
    }
    if(dis2<f/2)
    {
      HP++;
    }
  }
function EndOfGame()
{
 
  if(HP<0){     //1P catch 2p
    background(0);
    push();
    fill(0);
    rect(width/2,height/2,width,height);
    fill(255);
    textAlign(CENTER);
    textSize(16);
    text("1P Win", width/2, height/2);
    text("if you want to play the game once again, plz press R", width/2, height/2+20);
    pop();
    x1=width/2; //moving after game end blocking
    y1=height-40;
    x = width/2;
    y= 40;
  }
  if(HP>1){    //2P got into goal
    background(0);
    push();
    fill(0);
    rect(width/2,height/2,width,height);
    fill(255);
    textAlign(CENTER);
    textSize(16);
    text("2P Win", width/2, height/2);
    text("if you want to play the game once again, plz press R", width/2, height/2+20);
    pop();
    x1=width/2;  //moving after game end blocking
    y1=height-40;
    x = width/2;
    y= 40;
  }
  if(playcheck==0) //start title
  {
    background(0);
    push();
    fill(255);
    textAlign(CENTER);
    textSize(16);
    text("TAG GAME", width/2, height/2);
    text("if you want to play the game, plz press the button", width/2, height/2+20);
    text("1P Red Ball MOVE:  W: UP A: LEFT S: DOWN D: RIGHT", width/2, height/2+80);
    text("2P Yellow Ball MOVE:  UP_ARROW, LEFT_ARROW, DOWN_ARROW, RIGHT_ARROW", width/2, height/2+100);
    pop();
    push();
    textAlign(LEFT);
    textSize(20);
    fill(255,255,0);
    text("Rule 1: 1P Must catch 2P",140, height/2+180);
    text("Rule 2: 2P Must avoid 1P and go in to the green zone",140, height/2+200);
    text("Rule 3: In the sand zone you could pass through but it will make you slow",140, height/2+220);
    text("Rule 4: Yellow wall will make 1P slow but 2P can just pass,",140, height/2+240);
    text("It will disapear after 30 seconds",140,height/2+260);
  pop();
    button.center();
    button.position(width/2-40, height/2+30);
    button.mousePressed(reset);
}


}
function goal_line()  //goal line
{
  push();
  fill(125,255,150);
  rect(0,0,z,z);
  rect(840,0,z,z);
  pop();
}
function keyPressed() //reset key
{    
  if(key == 'r')
  {
    reset();
  }
  else if(key == 'R')
  {
    reset();
  }
}
function reset()  //reset
{
  playcheck++;
  button.hide();
  HP=1;
  x1=width/2;
  y1=height-40;
  x = width/2;
  y= 40;
  timer = 30;
}

function window_barrior()  //block getting out from sketch
{
  if(x<23){ //1P left window
    x = x + move ;
  }
  if(x>width-23){//1P right window
    x = x - move;
  }
  if(y<23){ //1P top window
    y= y + move ;
  }
  if(y>height-23){//1P bottom window
    y = y - move;
  }
  if(x1<17){ //2P left window
    x1 = x1 + move1 ;
  }
  if(x1>width-17){//2P right window
    x1 = x1 - move1;
  }
  if(y1<17){ //2P top window
    y1 = y1 + move1 ;
  }
  if(y1>height-17){//2P bottom window
    y1 = y1 - move1;
  }
}

function make_wall()
{
  for(let i = 0; i <5; i ++)
  {
   block1[i].display(80+(i*160),h,80,80);
   blockCol1[i] = block1[i].collision(80+(i*160),h,80,80);
   block2[i].display(80+(i*160),h+160,80,80);
   blockCol2[i] = block2[i].collision(80+(i*160),h+160,80,80);
   block3[i].display(80+(i*160),h+320,80,80);
   blockCol3[i] = block3[i].collision(80+(i*160),h+320,80,80);
   block4[i].display(80+(i*160),h+480,80,80);
   blockCol4[i] = block4[i].collision(80+(i*160),h+480,80,80);
   block5[i].display(80+(i*160),h+640,80,80);  
   blockCol5[i] = block5[i].collision(80+(i*160),h+640,80,80);
   Block1[i].display(80+(i*160),h,80,80);
   BlockCol1[i] = Block1[i].collision1(80+(i*160),h,80,80);
   Block2[i].display(80+(i*160),h+160,80,80);
   BlockCol2[i] = Block2[i].collision1(80+(i*160),h+160,80,80);
   Block3[i].display(80+(i*160),h+320,80,80);
   BlockCol3[i] = Block3[i].collision1(80+(i*160),h+320,80,80);
   Block4[i].display(80+(i*160),h+480,80,80);
   BlockCol4[i] = Block4[i].collision1(80+(i*160),h+480,80,80);
   Block5[i].display(80+(i*160),h+640,80,80);
   BlockCol5[i] = Block5[i].collision1(80+(i*160),h+640,80,80);
  }
} 
function make_banish_wall()
{
  let l = -40;
  for(let i = 0; i <4; i ++)
  {
  
    Bblock1[i].display(l+(i*320-100),h,40,40);
    BblockCol1[i] = Bblock1[i].collision2(l+(i*320-100),h,40,40);
    Bblock2[i].display(l+(i*320-260),h+160,40,40);
    BblockCol2[i] = Bblock2[i].collision2(l+(i*320-260),h+160,40,40);
    Bblock3[i].display(l+(i*320-100),h+320,40,40);
    BblockCol3[i] = Bblock3[i].collision2(l+(i*320-100),h+320,40,40);
    Bblock4[i].display(l+(i*320-260),h+480,40,40);
    BblockCol4[i] = Bblock4[i].collision2(l+(i*320-260),h+480,40,40);
    Bblock5[i].display(l+(i*320-100),h+640,40,40);
    BblockCol5[i] = Bblock5[i].collision2(l+(i*320-100),h+640,40,40);
    if(timer == 0)
    {
      l = 900;
    }
  }
  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }

}