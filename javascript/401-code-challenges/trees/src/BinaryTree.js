'use strict';

// import Node class
const { Node, Knode } = require('./Node.js');
const Queue = require('./queue');

class BinaryTree
{
  constructor(root = null)
  {
    this.root = root;
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
  // still working on this
  // create an array to hold final results of the traversal
  // create a queue to facilitate the order of traversal
  breadthFirst(root = this.root, breadthArr = [], breadthQueue = new Queue())
  {
    if (root !== null)
    {
      breadthQueue.enqueue(root);
      console.log('breadthQueue after enqueuing root: ', breadthQueue.toString());

      // if the breadthQueue still has values in it
      while (!breadthQueue.isEmpty())
      {
        // dequeue each item, in FiFo
        let front = breadthQueue.dequeue();

        // log of current front's data
        console.log(front.data);

        // push the data of the breadthQueue to the breadthArr, in Fifo
        breadthArr.push(front.data);

        // get all left data
        if (front.left !== null)
        {
          breadthQueue.enqueue(front.left);
        }

        // then get all right data
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
