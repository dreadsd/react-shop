const PubSub = {
  events: {},
  subscribe(en, fn) {
    this.events[en] = this.events[en] || [];
    this.events[en].push(fn);
  },
  publish(en, data) {
    if (this.events[en]) {
      this.events[en].forEach((fn) => fn(data));
    }
  },
};

export default PubSub;
