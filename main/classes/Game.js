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
            this.food.draw(this.context);
            this.snake.draw(this.context);

            this.snake.move();
        }, 600);
    }

    stop() {
        clearInterval(this.intervalId);
        this.listener.unregister();
        this.listener.unsubscribeAll();
    }
}
