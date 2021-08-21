var bg,bgImg;
var jake,jakeImg;
var robert,robertImg;

function preload(){
jakeImg=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
robertImg=loadAnimation("run1.png","run3.png","run5.png");
bgImg=loadImage("bg.png");


}


function setup(){
createCanvas(1370,650);   
bg=createSprite(500,300,10,10);
bg.addImage(bgImg);
bg.scale=2.2;
jake=createSprite(700,550,10,10);
jake.addAnimation("jake",jakeImg);
robert=createSprite(400,550,10,10);
robert.addAnimation("robert",robertImg);
robert.scale=2.5;



}

function draw(){
drawSprites();


}