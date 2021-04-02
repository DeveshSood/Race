class Player{
    constructor(){
        this.index=null,
        this.name="";
        this.distance=0
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on('value', (data)=>{
            playerCount=data.val();
        })
    }
    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).update({
            name:this.name,
            distance:this.distance
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

    static getAllPlayerInfo(){
        var allPlayerRef = database.ref('players');
        allPlayerRef.on('value', (data)=>{
            allPlayers = data.val();
        })
    }

}