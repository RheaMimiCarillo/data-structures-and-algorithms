'use strict';

class Node
{
  // left and right children pointers are null, by default
  constructor(data, left = null, right = null)
  {
    this.data = data;
    // left and right point to other instances of Node
    this.left = left;
    this.right = right;
  }
}

class Knode
{
  constructor(data, k)
  {
    this.data = data;
    this.children = new Array(k);
  }
}

module.exports = {
  Node,
  Knode
};
