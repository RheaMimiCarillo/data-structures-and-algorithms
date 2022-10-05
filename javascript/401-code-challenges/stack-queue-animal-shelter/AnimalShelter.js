'use strict';

// import Node class
const { Node } = require('./linked-list');

// import Stack class
const Stack = require('./stack');
const Queue = require('./queue');

class AnimalShelter
{
  constructor()
  {
    // these two structures hold the nodes
    // only have access to push, pop, and peek
    this.stack = new Stack();

    // access to enqueue and dequeue
    this.queue = new Queue();
  }

  // enqueue
  // accepts 1 argument: animal (cat or dog)
  // this method inserts `animal node` into the AnimalShelter using FiFo


  // dequeue
  // accepts 1 argument: pref(cat or dog)
  // this methods extracts the front `data` from the PseudoQueue using FiFo
  // this method extracts a dog or cat node, based on pref, with fifo
}


module.exports = AnimalShelter;
