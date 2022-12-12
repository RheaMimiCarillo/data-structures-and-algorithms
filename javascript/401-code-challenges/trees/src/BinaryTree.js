'use strict';

class BinaryTree
{
  constructor(root = null)
  {
    this.root = root;
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
