'use strict';


class Node
{
  // left and right are null, by default
  constructor(data, left = null, right = null)
  {
    this.data = data;
    // left and right point to other instances of Node
    this.left = left;
    this.right = right;
  }
}

// what's `Knode' used for?
class Knode {
  constructor(value, k) {
    this.value = value;
    this.children = new Array(k);
  }
}

module.exports = {
  Node,
  Knode
};
