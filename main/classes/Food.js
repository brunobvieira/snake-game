class Food {
    constructor(size) {
        this.size = size;
    }

    updatePosition(cWidth, cHeight) {
        let xVar = cWidth / this.size - 1;
        let yVar = cHeight / this.size - 1;

        this.x = Math.floor(Math.random() * xVar + 1) * this.size;
        this.y = Math.floor(Math.random() * yVar + 1) * this.size;
    }

    draw(context) {
        context.fillStyle = "green";
        context.fillRect(this.x, this.y, this.size, this.size);

        context.strokeStyle = "#red";
        context.strokeRect(this.x, this.y, this.size, this.size);
    }
}

export default Food;
