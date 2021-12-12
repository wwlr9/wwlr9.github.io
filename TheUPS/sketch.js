let p5lm;
let video;
let E3;
let proteasome;
let TAUp;
let degrade;

let hands = [];
let partnerPose = [];

let Tautint1 = 255;
let Tautint2 = 255;
let Tautint3 = 255;
let Tautint4 = 255;
let Tautint5 = 255;

let degradetint1 = 255;
let degradetint2 = 255;
let degradetint3 = 255;
let degradetint4 = 255;
let degradetint5 = 255;

let prevPixels = [];

let start = 0;
let triggersou;
let clearsou;

function modelReady() {
  console.log('hand pose loaded');
  handpose.on('predict', gotMyPose);
}

function preload() {
  proteasome = loadImage('Procolor.png');
  E3 = loadImage('E3ligasecolor.png');
  TAUp = loadImage('TAU.png');
  degrade = loadImage('degrade.png');

}

function setup() {

  createCanvas(640,480);
  video = createCapture(VIDEO);
  video.size(width,height);
  video.hide();

 
  
  p5lm = new p5LiveMedia(this,"DATA",null,"myRoom");
  p5lm.on('data',gotPartnerPose);
  
  handpose = ml5.handpose(video, {flipHorizontal: true},modelReady);

}

function gotMyPose(results) {
  hands = results;
  p5lm.send(JSON.stringify(hands));
}

function gotPartnerPose(data,id){
  partnerPose = JSON.parse(data);
}

function generateTau(){
  
  generateDegrade()
  
  tint(Tautint1,Tautint1);
  image(TAUp,width/3.5,height/50);
  tint(Tautint2,Tautint2);
  image(TAUp,width-200,height/7);
  tint(Tautint3,Tautint3);
  image(TAUp,width/8,height-100);
  tint(Tautint4,Tautint4);
  image(TAUp,width-100,height/3);
  tint(Tautint5,Tautint5);
  image(TAUp,width/70,height/20);
  
  noStroke();
  fill(255,0,0,0);
  ellipse(width/3.5+50,height/50+50,70);
  ellipse(width-200+50,height/7+50,70);
  ellipse(width/8+50,height-100+50,70);
  ellipse(width-100+50,height/3+50,70);
  ellipse(width/70+50,height/20+50,70);
  
  
}

function generateDegrade(){
  //degrades
  tint(degradetint1,degradetint1);
  image(degrade,width/3.5,height/50);
  tint(degradetint2,degradetint2);
  image(degrade,width-200,height/7);
  tint(degradetint3,degradetint3);
  image(degrade,width/8,height-100);
  tint(degradetint4,degradetint4);
  image(degrade,width-100,height/3);
  tint(degradetint5,degradetint5);
  image(degrade,width/70,height/20);
  
}

function comicsBack() {
  video.loadPixels();
  const currentPixels = video.pixels;
  for(let y=0;y<height;y++){
    for(let x=0;x<width;x++){
      
      const i = (y*width+x)*4;
      const diffR = abs(currentPixels[i+0]-prevPixels[i+0]);
      const diffG = abs(currentPixels[i+1]-prevPixels[i+1]);
      const diffB = abs(currentPixels[i+2]-prevPixels[i+2]);
      
      prevPixels[i+0] = currentPixels[i+0];
      prevPixels[i+1] = currentPixels[i+1];
      prevPixels[i+2] = currentPixels[i+2];

      const avgDiff = (diffR + diffG+ diffB)/3;
      if (avgDiff < 100) { 
        currentPixels[i+0] = 0;
        currentPixels[i+1] = 0;
        currentPixels[i+2] = 0;
      } 
      else { 
        currentPixels[i+0] = 255;//293
        currentPixels[i+1] = 255;//73
        currentPixels[i+2] = 255;//129
      }
    }
  }
  video.updatePixels();
  
  noTint();
  push();
  translate(width,0);
  scale(-1,1);
  image(video, 0,0);
  pop();
  
}

function e3Move(){
   generateTau();
   //me
  if (hands && hands.length > 0) {
    let hand = hands[0];
    let landmarks = hand.landmarks;    
    fill(293,73,129,0);
    noStroke();
    for (let i = 0; i < landmarks.length; i++) {
      let [x, y, z] = landmarks[i];     
      //my palm
      if(i==0){
        // tint(255, 127);
        noTint();
        ellipse(x+20,y-70,50);    
        image(E3,x-20,y-120);   
        var d1 = dist(x+20,y-70, width/3.5+50,height/50+50);
        if(d1<50+70){
          Tautint1 = 0;  
          console.log('ub');
          
        }
        var d2 = dist(x+20,y-70, width-200+50,height/7+50);
        if(d2<50+70){
          Tautint2 = 0;  
           console.log('ub');
        }
        var d3 = dist(x+20,y-70, width/8+50,height-100+50);
        if(d3<50+70){
          Tautint3 = 0;  
           console.log('ub');
        }
        var d4 = dist(x+20,y-70, width-100+50,height/3+50);
        if(d4<50+70){
          Tautint4 = 0;  
          console.log('ub');
        }
        var d5 = dist(x+20,y-70, width/70+50,height/20+50);
        if(d5<50+70){
          Tautint5 = 0;  
          console.log('ub');
        }
      }      
    }
  }
  
  proteasomeMove();
}

function proteasomeMove(){
  //partner
  if (partnerPose && partnerPose.length > 0) {
    let partnerhand = partnerPose[0];
    let partnerlandmarks = partnerhand.landmarks;    
    fill(101,211,156,0);
    noStroke();
    for (let i = 0; i < partnerlandmarks.length; i++) {
      let [x, y, z] = partnerlandmarks[i];     
      
      //partner palm
      if(i==0){
        noTint();
        ellipse(x,y,10);    
        image(proteasome,x,y);  
        
        
        var d6 = dist(x+40,y+50, width/3.5+50,height/50+50);
        if(d6<50+70 && Tautint1 == 0){
          degradetint1 = 0;  
          console.log('clear!');
        }
        var d7 = dist(x+40,y+50, width-200+50,height/7+50);
        if(d7<50+70 && Tautint2 == 0){
          degradetint2 = 0;  
          console.log('clear!');
        }
        var d8 = dist(x+40,y+50, width/8+50,height-100+50);
        if(d8<50+70 && Tautint3 == 0){
          degradetint3 = 0;  
          console.log('clear!');
        }
        var d9 = dist(x+40,y+50, width-100+50,height/3+50);
        if(d9<50+70 && Tautint4 == 0){
          degradetint4 = 0;  
          console.log('clear!');
        }
        var d10 = dist(x+40,y+50, width/70+50,height/20+50);
        if(d10<50+70 && Tautint5 == 0){
          degradetint5 = 0;  
          console.log('clear!');
        }
      }      
    }
  }
  
  if(degradetint1 == 0 && degradetint2 == 0 && degradetint3 == 0 && degradetint4 == 0 && degradetint5 == 0){
    console.log('end');
    //game end
    document.getElementById("success").textContent = 'game end';
  }
  
}

function draw() {

   if(start ==1){
     background(0,0,0);
    // comicsBack();
    e3Move();
   }
  
}