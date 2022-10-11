'use strict';

const BinaryTree = require('../src/BinaryTree.js');
const BinarySearchTree = require('../src/BinarySearchTree.js');
const { Node, Knode } = require('../src/Node.js');

describe('Testing tree data structures', () =>
{
  test('Can successfully instantiate an empty tree', () =>
  {
    let testTree = new BinaryTree();
    expect(testTree.root).toEqual(null);
  });

  test('Can successfully instantiate a tree with a single root node', () =>
  {
    let testTree = new BinaryTree();
    let root = new Node(10);
    testTree.root = root;

    expect(testTree.root.data).toEqual(10);
  });


  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () =>
  {
    let testBinarySearchTree = new BinarySearchTree();

    testBinarySearchTree.add(10);
    testBinarySearchTree.add(1);
    testBinarySearchTree.add(100);
    testBinarySearchTree.add(9001);
    testBinarySearchTree.add(4);

    let result = testBinarySearchTree.inOrder();

    console.log(result);
  });

  test('Can successfully return a collection from a pre-order traversal', () =>
  {
    let testTree = new BinaryTree();
    let root = new Node(10);
    root.left = new Node(1);
    root.right = new Node(50);
    root.left.left = new Node(1000);
    testTree.root = root;

    //console.log('pre-order:', testTree.preOrder());

    let preOrderResult = testTree.preOrder();
    expect(preOrderResult).toEqual([ 10, 1, 1000, 50 ]);
  });

  test('Can successfully return a collection from an in-order traversal', () =>
  {
    let testTree = new BinaryTree();
    let root = new Node(10);
    root.left = new Node(1);
    root.right = new Node(50);
    root.left.left = new Node(1000);
    testTree.root = root;

    //console.log('in-order: ', testTree.inOrder());
    let inOrderResult = testTree.inOrder();
    expect(inOrderResult).toEqual([ 1000, 1, 10, 50 ]);
  });

  test('Can successfully return a collection from a post-order traversal', () =>
  {
    let testTree = new BinaryTree();
    let root = new Node(10);
    root.left = new Node(1);
    root.right = new Node(50);
    root.left.left = new Node(1000);
    testTree.root = root;

    //console.log('post-order: ', testTree.postOrder());
    let postOrderResult = testTree.postOrder();

    expect(postOrderResult).toEqual([ 1000, 1, 50, 10 ]);
  });

  test('Returns true|false for the contains method, given an existing or non-existing node value', () =>
  {

  });

  test('Can successfully return a collection from a breadth-first traversal', () =>
  {
    let testBinarySearchTree = new BinarySearchTree();

    testBinarySearchTree.add(10);
    testBinarySearchTree.add(1);
    testBinarySearchTree.add(100);
    testBinarySearchTree.add(9001);
    testBinarySearchTree.add(4);

    // console.log('breadthFirst: ', testTree.breadthFirst());
    let breadthFirstResult = testBinarySearchTree.breadthFirst();
    console.log(breadthFirstResult);

    expect(breadthFirstResult).toEqual([ ]);
  });

});
