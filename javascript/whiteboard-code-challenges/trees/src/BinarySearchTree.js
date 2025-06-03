'use strict';

const BinaryTree = require('./BinaryTree');
const { Node } = require('./Node.js');

class BinarySearchTree extends BinaryTree
{
  constructor()
  {
    // extends BinaryTree class
    super();
  }

  /**
   * @param {any} data
   * accepts data, create node, adds a new node in the correct position for a binary search tree
   */
  add(data)
  {
    let newNode = new Node(data);
    if (this.root === null)
    {
      this.root = newNode;
    }
    // if the tree is not empty, call helper function
    else
    {
      this.addWhenNotEmpty(this.root, newNode);
    }
  }

  /**
   * @param {Node} currentRoot
   * @param {Node} newNode
   * accepts root node and new node and compares their values to add the newNode to the correct spot
   */
  addWhenNotEmpty(currentRoot, newNode)
  {
    if (newNode.data < currentRoot.data) // if false-y
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
      if (!currentRoot.right) // if false-y
      {
        currentRoot.right = newNode;
      }
      else
      {
        this.addWhenNotEmpty(currentRoot.right, newNode);
      }
    }
  }

  /**
   * @param {any} data
   * @return {Boolean}
   * accepts data and returns a Boolean whether or not a value is contained within the this tree at least once
   */
  contains(data)
  {
    // return false if BST is empty
    if (this.root === null) return false;
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
