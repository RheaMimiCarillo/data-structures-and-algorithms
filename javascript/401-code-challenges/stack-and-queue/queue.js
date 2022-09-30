'use strict';

const { LinkedList, Node, zipLists } = require('./linked-list.js');

class Queue extends LinkedList
{
  constructor(front = null, rear = null)
  {
    super();
    this.front = front;
    this.rear = rear;
  }
}


module.exports = Queue;
