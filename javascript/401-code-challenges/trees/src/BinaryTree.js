'use strict';

// import Node class
const { Node, Knode } = require('./Node.js');

class BinaryTree
{
  constructor()
  {
    this.root = null;
  }

  preOrder(root = this.root)
  {
    let preOrderArr = [];
    if (root !== null)
    {
      preOrderArr.push(root.data);
      console.log(root.data);
      if (root.left !== null)
      {
        this.preOrder(root.left);
        preOrderArr.push(root.left.data);
      }

      if (root.right !== null)
      {
        this.preOrder(root.right);
        preOrderArr.push(root.right.data);
      }

    }
    return preOrderArr;
  }

  inOrder(root = this.root)
  {
    let inOrderArr = [];
    if (root !== null)
    {
      if (root.left !== null)
      {
        this.inOrder(root.left);
        inOrderArr.push(root.left.data);
      }

      console.log(root.data);
      inOrderArr.push(root.data);


      if (root.right !== null)
      {
        this.inOrder(root.right);
        inOrderArr.push(root.right.data);
      }
    }
    return inOrderArr;
  }

  postOrder(root = this.root)
  {
    let postOrderArr = [];
    if (root !== null)
    {
      if (root.left !== null)
      {
        this.postOrder(root.left);
        postOrderArr.push(root.left.data);
      }

      if (root.right !== null)
      {
        this.inOrder(root.right);
        postOrderArr.push(root.right.data);
      }
      console.log(root.data);
      postOrderArr.push(root.data);
    }
    return postOrderArr;
  }
}

module.exports = BinaryTree;
