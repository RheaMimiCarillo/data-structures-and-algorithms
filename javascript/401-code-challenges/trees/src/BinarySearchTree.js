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
  add(data, currentRoot)
  {
    let newNode = new Node(data);
    // base case
    // if the specified root is null, add the data right there
    if (this.root === null)
    {
      currentRoot = newNode;
      this.root = currentRoot;
      console.log('new root Node in add() base case: ', currentRoot);
      console.log('this.root: ', this.root);
      console.log('total current tree when adding a new Node: ', this.preOrder());
    }
    // if the currentRoot is not falsy
    if (currentRoot)
    {
      // if the data passed in is less than the data of the current root,  go left
      if (data < currentRoot.data)
      {
        currentRoot.left = this.add(data, currentRoot.left);
      }
      // if the data passed in is greater than the data of the current root, go right
      else if (data > currentRoot.data)
      {
        currentRoot.right = this.add(data, currentRoot.right);
      }
      // otherwise, if the data passed in is equivalent to the current root, it's a duplicate
      else if (data === currentRoot.data)
      {
        return new Error('duplicate data already in tree');
      }
    }

  }



  // returns a boolean whether or not a value is contained within the this tree at least once
  contains(data)
  {

  }
}

module.exports = BinarySearchTree;
