'use strict';

// import Node class
const { Node, Knode } = require('./Node.js');
const Queue = require('./queue');

class BinaryTree
{
  constructor()
  {
    this.root = null;
  }

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

  breadthFirst(root = this.root, breadthArr = [], breadthQueue = new Queue())
  {
    if (root !== null)
    {
      breadthQueue.enqueue(root);

      while (!breadthQueue.isEmpty())
      {
        let front = breadthQueue.dequeue();
        breadthArr.push(front.data);

        if (front.left !== null)
        {
          breadthQueue.enqueue(front.left);
        }

        if (front.right !== null)
        {
          breadthQueue.enqueue(front.right);
        }
      }
    }
    return breadthArr;
  }
}

module.exports = BinaryTree;
