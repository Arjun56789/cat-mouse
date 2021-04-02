var backgroundImg;
var cat, mouse;
var catSleeping;
var mouseStanding;
var catRunning;
var mouseTeasing;
var cat4animation;
var mouse4animation;
function preload() {
    //load the images here
backgroundImg = loadImage("images/garden.png");
catSleeping = loadAnimation("images/cat1.png");
mouseStanding = loadAnimation("images/mouse1.png")
catRunning = loadAnimation("images/cat2.png","images/cat3.png");
mouseTeasing = loadAnimation("images/mouse2.png","images/mouse3.png");
cat4animation = loadAnimation("images/cat4.png");
mouse4animation = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(840,600,20,20);
    cat. addAnimation("catSleeping", catSleeping);
    cat.scale = 0.2;
    mouse = createSprite(200, 600, 20, 20);
    mouse.addAnimation("mouseStanding", mouseStanding);
    mouse.scale = 0.15;
}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
     if(cat.x - mouse.x<= (cat.width-mouse.width)/2){
         cat.velocityX = 0
         cat.addAnimation("lastcatImg", cat4animation);
         cat.changeAnimation("lastcatImg");
         mouse.addAnimation("lastmouseImg", mouse4animation);
         mouse.changeAnimation("lastmouseImg");
         cat.x = 300;
     }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode===LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning", catRunning);
        cat.changeAnimation("catRunning");
        mouse.addAnimation("mouseTeasing", mouseTeasing);
        mouse.changeAnimation("mouseTeasing");
    }

}
