class Snake {
    constructor(size) {
        this.size = size;
        this.direction = null;
        this.body = [
            { x: this.size * 3, y: 3 },
            { x: this.size * 2, y: 3 },
            { x: this.size * 1, y: 3 }
        ];
    }

    draw(context) {
        for (let i = 0; i < this.body.length; i++) {
            let pos = this.body[i];
            context.fillStyle = "#ffffff";
            context.fillRect(pos.x, pos.y, this.size, this.size);

            context.strokeStyle = "#000000";
            context.strokeRect(pos.x, pos.y, this.size, this.size);
        }
    }

    setDirection(keyPressed) {
        console.log(keyPressed);
    }
}
