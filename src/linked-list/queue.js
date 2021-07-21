const LinkedList = require("./linkedList");

/**
 * Implement a Queue using nothing more than a LinkedList.
 */

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.insert(value);
  }

  dequeue() {
    return this.linkedList.remove(() => true);
  }

  peek() {
    let value = this.dequeue()
    this.linkedList.insertAtHead(value)
    return value;
  }

  isEmpty() {
    return !this.linkedList.length;
  }
}

module.exports = Queue;
