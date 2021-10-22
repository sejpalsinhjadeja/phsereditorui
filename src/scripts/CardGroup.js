class CardGroup{

    constructor(oSceneObj,oGroupData){
        this.aCards = [];
        this.oSceneObj = oSceneObj;
        this.eGroupType = oGroupData.eGroupType;
        this.nScore = oGroupData.nScore;
        this.cardXGap = 60;

        this.addCards(oGroupData.aCards);
    }

    addCard(newCardData,nXPos,nYPos){
        var tempCard = new BaseCardPrefab(this.oSceneObj,nXPos,nYPos);
        tempCard.setCardDataForHandCard(newCardData);
        this.oSceneObj.addCardToHand(tempCard);
        this.aCards.push(tempCard);
    }

    addCards(aCardsData){
        for(var i=0; i<aCardsData.length; i++){
            this.addCard(aCardsData[i],(i*this.cardXGap) - (aCardsData.length*this.cardXGap/2),0);
            
        }
    }

    clearGruop(){
        for(var i=0; i<this.aCards.length; i++){
            this.aCards[i].destroy();
        }
        this.aCards = [];
    }
}