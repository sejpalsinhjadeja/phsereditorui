class SocketHandler {
    constructor(oGameObj,sAuthToken,sTableId,sRootUrl) {
        this.sToken_id = sAuthToken;
        this.sRootUrl = sRootUrl;
        this.sTableSocketUrl = sRootUrl+"/"+sTableId;
        this.oGameObj = oGameObj;

        // Root Socket conenction 
        this.oRootSocketConn = io(this.sRootUrl, {
            transports: ['websocket', 'polling'],
            query: {
                authorization:this.sToken_id,
            },
        });

        // Root Socket Connection Events - Start
        this.oRootSocketConn.on('connect', () => {
            this.oGameObj.showTableInfo("Waiting for player(s)");
            console.log("Connected to Socket",this.oRootSocketConn.id);
        });
        this.oRootSocketConn.on("error", (error) => {
            console.log("Connection error",error);
        });
        // Root Socket Connection Events - End

        // Socket conenction with namespace with Table
        this.oTableSocketConn = io(this.sTableSocketUrl, {
            transports: ['websocket', 'polling'],
            query: {
                authorization:this.sToken_id,
            },
        });
        
        
        // Table Socket Connection Events - Start
        this.oTableSocketConn.on('connect', () => {
            console.log("Table ScoketConnection Done",this.oTableSocketConn.id);
        });
        this.oTableSocketConn.on("reconnect", (attempt) => {
            console.log("Table Connection reconnect");
        });
        this.oTableSocketConn.on("error", (error) => {
            console.log("Table Connection error",error);
        });
        this.oTableSocketConn.on("disconnect", (disconnect) => {
            console.log("Table disconnect",disconnect);
        });
        this.oTableSocketConn.on("resKickout", (resKickout) => {
            //console.log("Table resKickout",resKickout);
        });

        //  General Gameplay Events
        this.oTableSocketConn.on("resUserJoined", (resUserJoined) => {
            console.log("Table resUserJoined",resUserJoined);
        });
        this.oTableSocketConn.on("resGameState", (resGameState) => {
            // Set user profile and user name
            // Set player icon on tale
            this.oGameObj.gameStateDataHandler(resGameState);
            console.log("Table resGameState",resGameState);
        });
        this.oTableSocketConn.on("resSeatChange", (resSeatChange) => {
            //console.log("Table resSeatChange",resSeatChange);
        });
        this.oTableSocketConn.on("resGameInitilizeTimer", (resGameInitilizeTimer) => {
            console.log("Table resGameInitilizeTimer",resGameInitilizeTimer);
        });
        this.oTableSocketConn.on("resHand", (resHand) => {
            //console.log("Table resHand",resHand);
        });
        this.oTableSocketConn.on("resAutoDiscard", (resAutoDiscard) => {
            //console.log("Table resAutoDiscard",resAutoDiscard);
        });
        this.oTableSocketConn.on("resPlayersState", (resPlayersState) => {
            console.log("Table resPlayersState",resPlayersState);
        });
        this.oTableSocketConn.on("resHighCards", (resHighCards) => {
            //console.log("Table resHighCards",resHighCards);
        });
        this.oTableSocketConn.on("resClosedCard", (resClosedCard) => {
            //console.log("Table resClosedCard",resClosedCard);
        });
        this.oTableSocketConn.on("resWildJoker", (resWildJoker) => {
            //console.log("Table resWildJoker",resWildJoker);
        });
        this.oTableSocketConn.on("resPlayerTurn", (resPlayerTurn) => {
            //console.log("Table resPlayerTurn",resPlayerTurn);
        });
        this.oTableSocketConn.on("resCreditBalance", (resCreditBalance) => {
            console.log("Table resCreditBalance",resCreditBalance);
        });
        this.oTableSocketConn.on("resOpenedDeck", (resOpenedDeck) => {
            //console.log("Table resOpenedDeck",resOpenedDeck);
        });
        this.oTableSocketConn.on("resMessage", (resMessage) => {
            //console.log("Table resMessage",resMessage);
        });
        this.oTableSocketConn.on("resOfError", (resOfError) => {
            //console.log("Table resOfError",resOfError);
        });
        this.oTableSocketConn.on("resDeclare", (resDeclare) => {
            //console.log("Table resDeclare",resDeclare);
        });
        this.oTableSocketConn.on("resDeclareResult", (resDeclareResult) => {
            //console.log("Table resDeclareResult",resDeclareResult);
        });
        this.oTableSocketConn.on("resDroppedPlayer", (resDroppedPlayer) => {
            //console.log("Table resDroppedPlayer",resDroppedPlayer);
        });
        this.oTableSocketConn.on("resPlayerLeave", (resPlayerLeave) => {
            //console.log("Table resPlayerLeave",resPlayerLeave);
        });
        // Table Socket Connection Events - End

    }
}