class Form{
    constructor(){
        this.input = createInput("Enter Your Name");
        this.button = createButton("Play")
        this.greeting=createElement("h2")
        this.title = createElement('h1');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }

    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-350, 0);      

        this.input.position(displayWidth/2-110, displayHeight/2-200);
        this.button.position(displayWidth/2+42, displayHeight/2-200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            player.getCount();
            
            playerCount+=1;
            player.index=playerCount;
            player.update();
            console.log(playerCount);
            player.updateCount(player.index);
            
            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/2, displayHeight/4);
        })
    }
}