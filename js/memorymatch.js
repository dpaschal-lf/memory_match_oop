

class MemoryMatch{
    constructor( cardList, cardArea ){
        this.handleCardClick = this.handleCardClick.bind( this );
        this.resetClickedCards = this.resetClickedCards.bind( this );
        this.cardList = cardList.slice();
        this.cardObjects = [];
        this.domElements = {
            cardArea : $(cardArea)
        }
        this.revealTime = 1500;
        this.selectedCards = [];
    }
    addAllCards(){
        this.domElements.cardArea.empty();
        for( var cardIndex = 0; cardIndex < this.cardList.length; cardIndex++){
            this.makeCard( this.cardList[cardIndex]);
        }
    }
    makeCard( cardData ){
        var card = new Card( cardData, this.handleCardClick );
        this.cardObjects.push( card );
        var cardDom = card.render();
        this.domElements.cardArea.append( cardDom );
    }
    handleCardClick( clickedCardObject ){
        if(this.selectedCards.length >= 2){
            return;
        }
        clickedCardObject.revealFront();

        this.selectedCards.push( clickedCardObject );
        if(this.selectedCards.length === 2){
            var card1ID = this.selectedCards[0].getID();
            var card2ID = this.selectedCards[1].getID();
            if( card1ID === card2ID ){
                this.selectedCards[0].playSound('match');
                this.selectedCards = [];
            } else {
                this.selectedCards[0].playSound('mismatch');
                setTimeout( this.resetClickedCards, this.revealTime );
            }
        } else {
            clickedCardObject.playSound('click');
        }
    }
    resetClickedCards(){
        for(var cardI = 0; cardI < this.selectedCards.length; cardI++){
            this.selectedCards[ cardI ].coverFront();
        }
        this.selectedCards = [];
    }

}