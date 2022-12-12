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
    // return false if BST is empty
    if (this.root === null) return false;

    /* strategy:
      traverse/search tree efficiently, so that I don't look at nodes I don't have to

      when I see a child that's greater than my data, go left
      when I see a child that's less than my data, go right
      when I see a node's data that's not greater than or less than my data, return true
      if we reach the end of the tree without matches, return false
    */
    return (this.containsWhenNotEmpty(this.root, data));
  }

  containsWhenNotEmpty(currentRoot, data)
  {
    {
      if (currentRoot === null)
        return false;

      else if (data < currentRoot.data)
        return this.containsWhenNotEmpty(currentRoot.left, data);

      else if (data > currentRoot.data)
        return this.containsWhenNotEmpty(currentRoot.right, data);

      else
        return true;
    }
  }
}

module.exports = BinarySearchTree;
