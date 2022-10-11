'use strict';

// import BinaryTree class
const BinaryTree = require('./BinaryTree');
// import Node class
const { Node, Knode } = require('./Node.js');
const Queue = require('./queue');

class BinarySearchTree extends BinaryTree
{
  constructor()
  {
    // super() gets the constructor bits from the BinaryTree class
    super();
  }

  // adds a new node in the correct position for a binary search tree
  add(data, root = this.root)
  {
    if (root === null)
    {
      root = new Node(data);
    }

    else if (data <= this.root.data)
    {
      root.left = this.add(data, root.left);
    }

    else
    {
      root.right = this.add(data, root.right);
    }
  }

  // returns a boolean whether or not a value is contained within the this tree at least once
  contains(data)
  {

  }
}

module.exports = BinarySearchTree;
