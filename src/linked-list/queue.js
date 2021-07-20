const LinkedList = require("./linkedList");

/**
 * Implement a Queue using nothing more than a LinkedList.
 */

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {

  }

  dequeue() {

  }

  peek() {

  }

  isEmpty() {
    return !this.size;
  }
}

module.exports = Queue;
