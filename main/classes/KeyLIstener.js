class KeyListener {
    constructor() {
        this.observers = [];
    }

    subscribe(callable) {
        this.observers.push(callable);
    }

    notifyAll(keyPressed) {
        for (callable of this.observers) {
            callable(keyPressed);
        }
    }

    register() {
        document.onkeydown(event => {
            this.notifyAll(event.key);
        });
    }
}
