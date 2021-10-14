class PlayerManager{
    
    constructor(oListOfPlayer,nNumberOfPlayer){
        PlayerManager.playerList = [];
        for(var i=0; i<nNumberOfPlayer; i++){
            this.addPlayerToList(oListOfPlayer[i]);
        }
    }

    addPlayerToList(oPlayer){
        PlayerManager.playerList.push(oPlayer);
    }


    setPlayerData(oOwnPlayerData,oAllUserData){
        var nTempCounter = 1;
        for(var i=0; i<PlayerManager.playerList.length; i++){
            if(oAllUserData[i].iUserId == oOwnPlayerData.iUserId){
                nTempCounter = 0;
                PlayerManager.playerList[0].setPlayerData(oAllUserData[i].iUserId,oAllUserData[i].eState,oAllUserData[i].sAvatar,oAllUserData[i].sUserName,true);
            }else{
                PlayerManager.playerList[i+nTempCounter].setPlayerData(oAllUserData[i].iUserId,oAllUserData[i].eState,oAllUserData[i].sAvatar,oAllUserData[i].sUserName,false);
            }
        }
    }

    setPlayerState(oOwnPlayerData,oAllUserData){
        var nTempCounter = 1;
        for(var i=0; i<PlayerManager.playerList.length; i++){
            if(oAllUserData[i].iUserId == oOwnPlayerData.iUserId){
                nTempCounter = 0;
                PlayerManager.playerList[0].setPlayerData(oAllUserData[i].eState,true);
            }else{
                PlayerManager.playerList[i+nTempCounter].setPlayerData(oAllUserData[i].eState,false);
            }
        }
    }
}