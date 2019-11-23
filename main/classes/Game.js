class Game {
    constructor(context, width, height) {
        this.context = context;
        this.width = width;
        this.height = height;

        this.snake = new Snake(10);
        this.food = new Food(10);
    }
}
