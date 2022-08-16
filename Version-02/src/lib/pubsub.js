class PubSub {
  constructor() {
    this.listeners = {};
  }

  subscribe(listener, callback) {
    if (!this.listeners[listener]) {
      this.listeners[listener] = [];
    }

    this.listeners[listener].push(callback);
  }

  publish(listener, data = {}) {
    if (!this.listeners[listener]) {
      return [];
    }

    this.listenres[listener].forEach((listener) => listener(data));
  }
}

export default PubSub;
