class PlayerManager{
    
    constructor(oListOfPlayer){
        PlayerManager.playerList = new Map();
        PlayerManager.isPlayerAdded = false;
        this.oListOfPlayer = oListOfPlayer;
    }

    addPlayerToList(sPlayerId,oPlayer){
        PlayerManager.playerList.set(sPlayerId,oPlayer);
    }

    getPlayerFromList(sPlayerId){
        return PlayerManager.playerList.get(sPlayerId);
    }


    setPlayerData(oOwnPlayerData,oAllUserData){
        if(PlayerManager.isPlayerAdded == false){
            this.setPlayerDataToPlayerManager(oOwnPlayerData,oAllUserData);
        }
        for(var i=0; i< oAllUserData.length; i++){
            this.getPlayerFromList(oAllUserData[i].iUserId).setPlayerData(oAllUserData[i].eState,oAllUserData[i].sAvatar,oAllUserData[i].sUserName);
        }
    }

    setPlayerDataToPlayerManager(oOwnPlayerData,oAllUserData){
        PlayerManager.isPlayerAdded = true;
        var nTempCounter = 1;
        for(var i=0; i< oAllUserData.length; i++){
            if(oAllUserData[i].iUserId == oOwnPlayerData.iUserId){
                this.addPlayerToList(oAllUserData[i].iUserId,this.oListOfPlayer[0]);
                this.getPlayerFromList(oAllUserData[i].iUserId).setPlayerInfo(oAllUserData[i].iUserId,true);
                nTempCounter = 0;
            }else{
                this.addPlayerToList(oAllUserData[i].iUserId,this.oListOfPlayer[i+nTempCounter]);
                this.getPlayerFromList(oAllUserData[i].iUserId).setPlayerInfo(oAllUserData[i].iUserId,false);
            }
        }
    }

    setPlayerState(oAllUserData){
        for(var i=0; i< oAllUserData.length; i++){
            this.getPlayerFromList(oAllUserData[i].iUserId).setPlayerState(oAllUserData[i].eState);
        }
    }
}