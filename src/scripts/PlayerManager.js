class PlayerManager{
    
    constructor(oListOfPlayer,nNumberOfPlayer){
        PlayerManager.playerList = [];
        for(var i=0; i<nNumberOfPlayer; i++){
            oListOfPlayer[i].setVisible(true);
            this.AddPlayerToList(oListOfPlayer[i]);
        }
    }

    AddPlayerToList(oPlayer){
        PlayerManager.playerList.push(oPlayer);
    }
}