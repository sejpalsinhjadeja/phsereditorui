class PlayerManager{
    
    constructor(oListOfPlayer,nNumberOfPlayer){
        PlayerManager.playerList = [];
        PlayerManager.sOwnPlayerId = "";
        for(var i=0; i<nNumberOfPlayer; i++){
            this.addPlayerToList(oListOfPlayer[i]);
        }
    }

    addPlayerToList(oPlayer){
        PlayerManager.playerList.push(oPlayer);
    }


    setPlayerData(oOwnPlayerData,oAllUserData){
        var nTempCounter = 1;
        for(var i=0; i< oAllUserData.length; i++){
            if(oAllUserData[i].iUserId == oOwnPlayerData.iUserId){
                nTempCounter = 0;
                PlayerManager.sOwnPlayerId = oOwnPlayerData.iUserId;
                PlayerManager.playerList[0].setPlayerData(oAllUserData[i].iUserId,oAllUserData[i].eState,oAllUserData[i].sAvatar,oAllUserData[i].sUserName,true);
            }else{
                PlayerManager.playerList[i+nTempCounter].setPlayerData(oAllUserData[i].iUserId,oAllUserData[i].eState,oAllUserData[i].sAvatar,oAllUserData[i].sUserName,false);
            }
        }
    }

    setPlayerState(oAllUserData){
        var nTempCounter = 1;
        console.log("PlayerManager GamePlayerStateDataHandler");
        for(var i=0; i< oAllUserData.length; i++){
            if(oAllUserData[i].iUserId == PlayerManager.sOwnPlayerId){
                nTempCounter = 0;
                PlayerManager.playerList[0].setStatusForPlayer(oAllUserData[i].eState);
            }else{
                PlayerManager.playerList[i+nTempCounter].setStatusForOpp(oAllUserData[i].eState);
            }
        }
    }
}