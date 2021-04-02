var database;
var position;
var allPlayers;

var form, player, game;
var gameState=0;
var playerCount=0;
var car1, car2, car3, car4, cars;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth/2,displayHeight/2+150);

    game = new Game();
    game.getState();
    game.start();
  
}

function draw(){
  background("white");
  if(playerCount ===4){
    game.updateState(1);
  }
  if(gameState===1){
    clearInterval();
    game.play();
  }
  
    
}

