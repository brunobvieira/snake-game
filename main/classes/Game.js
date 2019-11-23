import Snake from "./Snake.js";
import Food from "./Food.js";
import KeyListener from "./KeyListener.js";

class Game {
    constructor(context, width, height) {
        this.context = context;
        this.width = width;
        this.height = height;
        this.intervalId = null;
        this.listener = new KeyListener();
        this.initialized = false;
    }

    init() {
        // definition of initial state
        this.score = 0;
        this.snake = new Snake(10);
        this.food = new Food(10);
        this.food.updatePosition(this.width, this.height);

        // create the observer
        this.listener.subscribe(this.snake);
        this.listener.subscribe(this);
        this.listener.register();

        this.initialized = true;
    }

    handleKeydown() {
        this.start();
    }

    start() {
        if (this.intervalId != null) return false;
        if (!this.initialized) this.init();

        this.intervalId = setInterval(() => {
            if (this.snake.hitSomething(this.height, this.width)) {
                this.stop();
                return false;
            }

            //Drawing the game
            this.context.clearRect(0, 0, this.width, this.height);
            this.food.draw(this.context);
            this.snake.draw(this.context);

            // If the Snake eat the food
            if (this.snake.eatSomething(this.food)) {
                this.score++;
                this.snake.grow();
                this.food.updatePosition(this.width, this.height);
            }

            // Move the Snake
            this.snake.move();
        }, 100);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.initialized = false;
        alert(`Your score: ${this.score}, press any button to try again.`);
    }
}

export default Game;
