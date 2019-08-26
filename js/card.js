

class Card{
    constructor(paramOptions, clickCallback){
        //bind callbacks
        this.handleClick = this.handleClick.bind(this);
        
        //store any passed in properties (parameters)
        this.options = {
            frontImage: paramOptions.frontImage,
            backImage: paramOptions.backImage,
            id: paramOptions.id,
            sounds: paramOptions.sounds
        }
        this.clickCallback = clickCallback;

        //store any required initial state for later use
        this.domElements = {
            cardContainer: null,
            card: null,
            frontFace: null,
            backFace: null
        }
    }

}