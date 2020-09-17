class Player{
    constructor(){

    }
    getplayercount(){
        var playercountref=database.ref("playercount")
        playercountref.on("value",function (data){
            playercount=data.val();

        })
    }
    updateplayercount(count){
        var playercountref=database.ref("/")
        playercountref.set({
            playercount:count
        })
    }
    updateplayerinfo(name){
        var playerindex="player"+playercount
        var nameref=database.ref(playerindex)
        nameref.set({
            playername:name
        })
    }



}