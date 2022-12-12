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
  // the `correct` position is ascending order, from left to right
  add(data)
  {
    // make a new node
    let newNode = new Node(data);

    // base case
    // if the specified root is null, add the data right there
    if (this.root === null)
    {
      this.root = newNode;
    }
    // if the tree is not empty add to the correct spot in BST
    else
    {
      this.addWhenNotEmpty(this.root, newNode);
    }
  }

  addWhenNotEmpty(currentRoot, newNode)
  {
    if (newNode.data < currentRoot.data)
    {
      if (!currentRoot.left)
      {
        currentRoot.left = newNode;
      }
      else
      {
        this.addWhenNotEmpty(currentRoot.left, newNode);
      }
    }
    else
    {
      if (!currentRoot.right)
      {
        currentRoot.right = newNode;
      }
      else
      {
        this.addWhenNotEmpty(currentRoot.right, newNode);
      }
    }
  }



  // returns a boolean whether or not a value is contained within the this tree at least once
  contains(data)
  {
    
  }
}

module.exports = BinarySearchTree;
