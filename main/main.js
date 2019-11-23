import Game from "./classes/Game.js";

window.onload = function() {
    const canvas = document.getElementById("snake");
    const context = canvas.getContext("2d");

    const game = new Game(context, canvas.width, canvas.height);
    game.init();
};
