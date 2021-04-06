class Form{
    constructor(){
        this.input = createInput("").attribute("placeholder", "Name");
        this.button = createButton("Play");
        this.greeting=createElement("h1");
        this.greeting2=createElement("h3");
        this.greeting3=createElement("h3");
        this.title = createElement('h1');
        this.title2 = createElement('h3');
        this.reset = createButton('Reset');
    }
    hide(){
        this.greeting.hide();
        this.greeting2.hide();
        this.greeting3.hide();
        this.button.hide();
        this.input.hide();
        this.title2.hide();
    }

    display(){
        this.title.html("Car Racing Game");
        this.title2.html("Enter your name and press 'Play' if you are ready :- ")
        this.title.position(displayWidth/2-350, 0);
        this.title2.position(displayWidth/2-50, displayHeight/2-250);      

        this.input.position(displayWidth/2+30, displayHeight/2-200);
        this.button.position(displayWidth/2+182, displayHeight/2-200);
        this.reset.position(displayWidth/2+600, 30);

        this.reset.mousePressed(()=>{
        game.updateState(0);
        player.updateCount(0);
        });

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.title2.hide();

            player.name = this.input.value();
            player.getCount();
            
            playerCount+=1;
            player.index=playerCount;
            player.update();
            console.log(playerCount);
            player.updateCount(player.index);
            
            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/2+40, displayHeight/4+20);
            this.greeting2.html("Waiting For Other Players To Join ");
            this.greeting2.position(displayWidth/2, displayHeight/3);
            
            //this.greeting3.html("Players Joined : " + playerCount + "/4");
            //this.greeting3.position(displayWidth/2+50, displayHeight/2-110);
        })
    }
}