/**
 * Implement a Stack using nothing more than a LinkedList.
 */

const LinkedList = require("../linked-list/linkedList");

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    this.linkedList.insertAtHead(value);
  }

  pop() {
    return this.linkedList.remove(() => true);
  }

  peek() {
    let value = this.pop()
    this.linkedList.insertAtHead(value)
    return value;
  }

  isEmpty() {
    return !this.linkedList.length;
  }
}

module.exports = Stack;
