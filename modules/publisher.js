// Usamos un class, pero tambien se puede usar un CustomEvent
class Publisher {
  constructor() {
    this.subscribers = [];
  }

  subscribe(cb) {
    this.subscribers.push(cb);
  }

  publish(data) {
    this.subscribers.forEach(cb => cb(data))
  }
  // Se podria agrega un metodo de unsubscribe
}

export default Publisher;