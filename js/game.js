class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        } )
    }

    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            player=new Player();
            var gameRef = await database.ref('playerCount').once('value');
            if(gameRef.exists()){
                playerCount= gameRef.val();
                player.getCount();
            }
            form=new Form();
            form.display();
        }
        
        car1 = createSprite(displayWidth-1220,200);
        car2 = createSprite(displayWidth-1420,200);
        car3 = createSprite(displayWidth-1620,200);
        car4 = createSprite(displayWidth-1820,200);

        car1.addImage(car1_img);
        car2.addImage(car2_img);
        car3.addImage(car3_img);
        car4.addImage(car4_img);


        cars=[car1,car2,car3,car4];
    }
    play(){
        textSize(20);
        form.hide();
        Player.getAllPlayerInfo();
        if(allPlayers!==undefined){
            background(rgb(198,135,103));
            image(track,0,-displayHeight*4,displayWidth, displayHeight*5);

           var x=displayWidth-1220;
           var y;
           var index=0;

            for(var plr in allPlayers){
                x=x+200;
                y= displayHeight-allPlayers[plr].distance;
                index=index+1;

                cars[index-1].x=x;
                cars[index-1].y=y;

                if(index===player.index){
                    cars[index-1].shapeColor="red";
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y;
                }
                
           }
        }

        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance = player.distance + 10;
            player.update();
        }

        if(player.distance>4350){
            gameState=2;
          }

        drawSprites();
    }
    end(){
        game.updateState(2);
        console.log("Game Ended");
      }
}