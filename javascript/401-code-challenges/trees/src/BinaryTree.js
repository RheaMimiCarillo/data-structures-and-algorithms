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
    //let result = 'preorder: ';

    if(root !== null)
    {
      console.log(root.data);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
    /*
    if (root.left !== null)
    {
      this.preOrder(root.left);
    }

    if (root.right !== null)
    {
      this.preOrder(root.right);
    }
    */
    //return result;
  }

  inOrder()
  {

  }

  postOrder()
  {

  }


}

module.exports = BinaryTree;
