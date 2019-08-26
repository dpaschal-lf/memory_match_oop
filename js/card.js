

class Card{
    constructor(paramOptions, clickCallback){
        this.handleClick = this.handleClick.bind(this);
        this.options = {
            frontImage: paramOptions.frontImage,
            backImage: paramOptions.backImage,
            id: paramOptions.id,
            sounds: paramOptions.sounds
        }
        this.clickCallback = clickCallback;
        this.domElements = {
            cardContainer: null,
            card: null,
            frontFace: null,
            backFace: null
        }
    }
    handleClick(){
            this.clickCallback( this );
    }
    playSound( key ){
        if(!this.options.sounds.hasOwnProperty( key )){
            return;
        }
        var player = new Audio();
        player.oncanplaythrough = function(){
            player.play();
        }
        player.src= this.options.sounds[key];
    }
    revealFront(){
        this.domElements.backFace.hide();
    }
    coverFront(){
        this.domElements.backFace.show();
    }
    getID(){
        return this.options.id;
    }
    render(){
        this.domElements.cardContainer = $("<div>", {
            class: "cardContainer",
            on: {
                click: this.handleClick
            }
        });
        this.domElements.card = $("<div>",{
            class: 'card'
        });
        this.domElements.frontFace = $("<div>",{
            class: 'front',
            css: {
                backgroundImage: `url(${this.options.frontImage})`
            }
        });
        this.domElements.backFace = $("<div>",{
            class: 'back',
            css: {
                backgroundImage: `url(${this.options.backImage}`
            }
        });
        this.domElements.card.append( this.domElements.frontFace, this.domElements.backFace);
        this.domElements.cardContainer.append(this.domElements.card);
        return this.domElements.cardContainer;
    }
}