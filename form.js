class Form{
    constructor(){}
    display(){
        var title=createElement("h2")
        title.html("RACING FORM")
        title.position(130,0)

        var inputbox=createInput("name")
        inputbox.position(130,160)

        var enterbutton=createButton("OK")
        enterbutton.position(250,200)
        var greeting=createElement("h4")
        
        enterbutton.mousePressed(function(){
            inputbox.hide()
            enterbutton.hide()
            var name=inputbox.value();
            playercount=playercount+1
           player.updateplayercount(playercount)
           player.updateplayerinfo(name)
           greeting.html("welcome"+name)
           greeting.position(130,160)
        })
    }


}