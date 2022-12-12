'use strict';

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
}

module.exports = BinaryTree;
