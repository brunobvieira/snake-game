class Snake {
    constructor(size) {
        this.size = size;
        this.direction = 'RIGHT';
        this.body = [
            { x: this.size * 3, y: this.size * 1 },
            { x: this.size * 2, y: this.size * 1 },
            { x: this.size * 1, y: this.size * 1 }
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

    handleKeydown(keyPressed) {
        this.setDirection(keyPressed);
    }

    setDirection(keyPressed) {
        console.log(keyPressed);

        const allowedKeys = {
            Arrowup: () => {
                console.log("key up pressed");
            }
        };
    }

    move() {}
}
