class Snake {
    constructor(size) {
        this.size = size;
        this.direction = "RIGHT";
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
        const keyHandlers = {
            ArrowUp: () => {
                if (this.direction != "DOWN") this.direction = "UP";
            },
            ArrowDown: () => {
                if (this.direction != "UP") this.direction = "DOWN";
            },
            ArrowRight: () => {
                if (this.direction != "LEFT") this.direction = "RIGHT";
            },
            ArrowLeft: () => {
                if (this.direction != "RIGHT") this.direction = "LEFT";
            }
        };

        let keyHandler = keyHandlers[keyPressed];
        if (!keyHandler) return false;
        keyHandler();
        return true;
    }

    move() {
        let head = Object.assign({}, this.body[0]);
        let newX = head.x;
        let newY = head.y;

        if (this.direction == "RIGHT") newX += this.size;
        if (this.direction == "LEFT") newX -= this.size;
        if (this.direction == "UP") newY -= this.size;
        if (this.direction == "DOWN") newY += this.size;

        this.body.pop();
        this.body.unshift({ x: newX, y: newY });
    }

    grow() {
        this.body.push(Object.assign({}, this.body[0]));
    }

    hitSomething(mh, mw) {
        let head = this.body[0];

        // if snake hit the body
        for (let i = 1; i < this.body.length; i++) {
            let piece = this.body[i];
            if (head.x == piece.x && head.y == piece.y) {
                return true;
            }
        }

        // if snake hit the wall
        if (head.x < 0 || head.x > mw || head.y < 0 || head.y > mh) {
            return true;
        }

        return false;
    }

    eatSomething(food) {
        let head = this.body[0];
        return food.x == head.x && food.y == head.y;
    }
}

export default Snake;