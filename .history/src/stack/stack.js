class Stack {
  constructor() {
    this.list = [];
  }

  set(items) {
    this.list = [...items];
  }

  push(item) {
    this.list = [...this.list, item];
  }

  pop() {
    this.list = this.list.slice(0, this.list.length - 1);
  }
}

module.exports = Stack;
