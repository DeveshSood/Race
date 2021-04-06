var database;
var position;
var allPlayers;

var form, player, game;
var gameState=0;
var playerCount=0;
var car1, car2, car3, car4, cars;
var car1_img, car2_img, car3_img, car4_img, track;

function preload(){
  car1_img=loadImage("images/car1.png");
  car2_img=loadImage("images/car2.png");
  car3_img=loadImage("images/car3.png");
  car4_img=loadImage("images/car4.png");
  track=loadImage("images/track.jpg");
  
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth/2+300,displayHeight/2+300);

    game = new Game();
    game.getState();
    game.start();
  
}

function draw(){
  background("white");
  if(playerCount === 4){
    game.updateState(1);
  }

  if(gameState=== 1){
    clearInterval();
    game.play();
  }
  
  if(gameState === 2){
    game.end();
  }
}

