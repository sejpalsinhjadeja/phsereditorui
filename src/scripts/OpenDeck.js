class OpenDeck{

    constructor(){
        OpenDeck.CardDeckStack = [];
    }


    addCard(newCard){
        OpenDeck.CardDeckStack.push(newCard);
    }

    getTopCardValue(){
        return OpenDeck.CardDeckStack[OpenDeck.CardDeckStack.length - 1];
    }

    getTopCardType(){
        return OpenDeck.CardDeckStack[OpenDeck.CardDeckStack.length - 1].getCardValue();
    }

    getTopCard(){
        return OpenDeck.CardDeckStack.pop();
    }


}