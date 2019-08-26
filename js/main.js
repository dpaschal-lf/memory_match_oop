
var game = null;

$(document).ready( initiateApp );

function initiateApp(){
    game = new MemoryMatch(data, '#cardArea');
    game.addAllCards();
}