# memory_match_oop

### card.js

1. look at the constructor and note its 3 primary parts:
    1. a callback function binding section
    1. a property parameter storing section
    1. an initial state section

1. create the render function
    prameters: none
    returns: a jquery dom object
    purpose:
        1. recreates the following dom structure```
<div class="cardContainer">
    <div class="card">
        <div class="front" style="background-image: url(images/donald1.jpg);"></div>
        <div class="back" style="background-image: url(images/disneylogo.jpg);"></div>
    </div>
</div>
```
        1. stores the dom structure into this object's state
        1. adds a click handler to the outermost dom element that links to this object's handleClick
        1. adds a background image to the front face dom element with the frontImage from the data stored in this object's state
        1. adds a background image to the back face dom element with the backImage from the data stored in this object's state
        1. returns the outermost dom element that contains the rest of the dom elements

1. handleClick
    - parameters: none
    - returns: none
    - purpose: 
        1. calls this object's clickCallback function and passes to it the argument of this object

1. revealFront
    - parameters: none
    - returns: none
    - purpose:
        1. takes this object's backface dom element and hides it
    
1. revealBack
    - parameters: none
    - returns: none
    - purpose:
        1. takes this object's backface dom element and shows it
1. getID
    - parameters: none
    - returns: this object's id
    - purpose:
        1. returns this object's ID, which it got when it was constructed
1. playSound
    - parameters: (string) key
    - returns: none
    - purpose:
    1. checks in this object's sounds object, which it received when it was constructed
        1. looks for the key parameter
        1. if it finds the key in the object, it grabs the string there as a URL
        1. instantiates an Audio object
            1. adds a oncanplaythrough function that
                1. selects the Audio object and calls the play method
