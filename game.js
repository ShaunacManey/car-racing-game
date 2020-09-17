class Game{
    constructor(){

    }
getgamestate(){
        var gamestateref=database.ref("gamestate")
        gamestateref.on("value",function (data){
            gamestate=data.val();
            
        })
    }
updategamestate(state){
    var gamestateref=database.ref("/")
    gamestateref.set({
        gamestate:state
    })
}
start(){
    if (gamestate===0){
        player=new Player()
        form=new Form()
        player.getplayercount()
        form.display();
    }

}


}

    

