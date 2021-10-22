class UserHand{

    constructor(oSceneObj){
        console.log("UserHand creation");
        this.aGroups = [];
        this.oSceneObj = oSceneObj;
    }

    addGroup(newGroup){
        this.aGroups.push(newGroup);
    }

    getTopCardValue(){
        return this.aGroups[this.aGroups.length - 1];
    }

    getTopCardType(){
        return this.aGroups[this.aGroups.length - 1].getCardValue();
    }

    getTopCard(){
        return this.aGroups.pop();
    }

    updateHandCardData(oResHand){
        this.isValid = oResHand.isValid;
        this.nInpureSequences = oResHand.nInpureSequences;
        this.nPureSequences = oResHand.nPureSequences;
        this.nScore = oResHand.nScore;
        this.nSet = oResHand.nSet;
        this.clearHandData();
        for(var i=0; i< oResHand.aGroups.length; i++){
            var tempCarGroup = new CardGroup(this.oSceneObj,oResHand.aGroups[i])
            this.addGroup(tempCarGroup);
        }
    }

    clearHandData(){
        for(var i=0; i<this.aGroups.length; i++){
            this.aGroups[i].clearGruop();
        }
        this.aGroups = [];
    }
}