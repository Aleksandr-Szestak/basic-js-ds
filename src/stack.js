const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor() {
    this.stackItems = [];
  }

  push(element) {
    this.stackItems.push(element);
  }

  pop() {
    let returnItem = this.stackItems.pop();
    return returnItem;
  }

  peek() {
    return this.stackItems.at(-1);
  }

  out() {
    console.log('->', this.stackItems.length);
    for (let i=0; i < this.stackItems.length; i++) {
      console.log(i, this.stackItems[i]);
    }
  }

}

module.exports = {
  Stack
};
