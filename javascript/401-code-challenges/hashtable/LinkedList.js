'use strict';

const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  // add new Node to end of LinkedList
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    console.log('added this thing to bucket: ', value);

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  // traverse LinkedList to find the `value`
  // return the the `value` if it's found
  // or return `null` if not found


  // in this case, I want to search for `value.key`
  find(value) {
    let current = this.head;
    while (current) {
      // console.log('linkedlist find current: ', current);
      if (current.value === value) {
        return current.value;
      }
      current = current.next;
    }
    return null;
  }

  // returns an array of all `values/data` in this LinkedList
  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }

  toString() {
    let values = this.values();
    return values.reduce((prev, val) => prev += `${val} -> `, '');
  }
}

module.exports = LinkedList;
