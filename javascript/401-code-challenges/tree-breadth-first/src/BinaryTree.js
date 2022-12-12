'use strict';

const Queue = require("./Queue");

class BinaryTree
{
  constructor(root = null)
  {
    this.root = root;
  }

  /**
   * @return {Array} collection of values from tree
   * returns an Array of values from a Breadth-first traversal of this Binary Tree
   */
  breadthFirst()
  {
    let result = [];

    if (this.root !== null)
    {
      const breadthFirstQueue = new Queue();

      breadthFirstQueue.enqueue(this.root);

      while (!breadthFirstQueue.isEmpty())
      {
        let front = breadthFirstQueue.dequeue();
        result.push(front.data);

        if (front.left)
        {
          breadthFirstQueue.enqueue(front.left);
        }

        if (front.right)
        {
          breadthFirstQueue.enqueue(front.right);
        }
      }
    }
    return result;
  }

  /**
   * @return {Number} highest value in the tree
   * returns the highest (numerical) value stored in this tree
   */
  findMax()
  {
    if (this.root === null) return new Error('Tree is empty');

    let currentMax = this.root.data;

    // helper function to traverse this binary tree recursively
    const traversal = (currentRoot) =>
    {
      if (currentRoot !== null)
      {
        if (currentRoot.data > currentMax)
        {
          currentMax = currentRoot.data;
        }

        if (currentRoot.left)
        {
          traversal(currentRoot.left);
        }

        if (currentRoot.right)
        {
          traversal(currentRoot.right);
        }
      }
    };
    traversal(this.root);
    return currentMax;
  }

  /**
   * @param {root} root of this Binary Tree, by default
   * @param {Array} preOrderArr, target array
   * @return {Array} collection of data from a pre-order traversal
   * accepts no parameters by default, (or a specified root and target array), and returns a collection of data from a pre-order traversal of this Binary Tree's nodes
   */
  preOrder(root = this.root, preOrderArr = [])
  {
    if (root !== null)
    {
      preOrderArr.push(root.data);
      if (root.left)
      {
        this.preOrder(root.left, preOrderArr);
      }

      if (root.right)
      {
        this.preOrder(root.right, preOrderArr);
      }
    }
    return preOrderArr;
  }

  /**
   * @param {root} root of this Binary Tree, by default
   * @param {Array} inOrderArr, target array
   * * @return {Array} collection of data from an in-order traversal
   * accepts no parameters by default, (or a specified root and target array), and returns a collection of data from an in-order traversal of this Binary Tree's nodes
   */
  inOrder(root = this.root, inOrderArr = [])
  {
    if (root !== null)
    {
      if (root.left !== null)
      {
        this.inOrder(root.left, inOrderArr);
      }
      inOrderArr.push(root.data);
      if (root.right !== null)
      {
        this.inOrder(root.right, inOrderArr);
      }
    }
    return inOrderArr;
  }

  /**
   * @param {root} root of this Binary Tree, by default
   * @param {Array} postOrderArr, target array
   * @return {Array} collection of data from a post-order traversal
   * accepts no parameters by default, (or a specified root and target array), and returns a collection of data from a post-order traversal of this Binary Tree's nodes
   */
  postOrder(root = this.root, postOrderArr = [])
  {
    if (root !== null)
    {
      if (root.left !== null)
      {
        this.postOrder(root.left, postOrderArr);
      }

      if (root.right !== null)
      {
        this.inOrder(root.right, postOrderArr);
      }
      postOrderArr.push(root.data);
    }
    return postOrderArr;
  }
}

module.exports = BinaryTree;
