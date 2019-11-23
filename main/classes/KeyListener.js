class KeyListener {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribeAll() {
        this.observers = [];
    }

    notifyAll(keyPressed) {
        for (let i = 0; i < this.observers.length; i++) {
            let observer = this.observers[i];
            observer.handleKeydown(keyPressed);
        }
    }

    handleEvent(event) {
        this.notifyAll(event.key);
    }

    register() {
        document.addEventListener("keydown", this);
    }

    unregister() {
        document.removeEventListener("keydown", this);
    }
}

export default KeyListener;