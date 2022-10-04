'use strict';

// import Node class
const { Node } = require('./linked-list');

// import Stack class
const Stack = require('./stack');


class PseudoQueue
{
  constructor()
  {
    // these two stacks hold the nodes
    // only have access to push, pop, and peek
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  // enqueue
  // accepts 1 argument: data
  // this method inserts `data` into the PseudoQueue using FiFo


  // dequeue
  // accepts no arguments
  // this methods extracts the front `data` from the PseudoQueue using FiFo
}

// thoughts

// to dequeue/get the `front` item in a queue (the `bottom` item in a stack)
// 1. get all of the items from stack1 to stack 2
// then use `peek` to look at the `top` item OR use `pop` to remove that item and return the value to the method
// then move all of the stuff back into the first stack, to reset

// to enqueue, which is to move to the back of the line
// to do so, make a new Node with data
// then put the new Node at the bottom of (the empty) stack2
// then `pop` all of stack2 back into stack1 (with new Nodes), with a loop


module.exports = PseudoQueue;
