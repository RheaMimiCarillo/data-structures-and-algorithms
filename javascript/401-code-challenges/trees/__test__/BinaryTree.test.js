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
    root.left = new Node(1);
    root.right = new Node(50);
    root.left.left = new Node(1000);
    testTree.root = root;

    console.log('pre-order:', testTree.preOrder());

    console.log('in-order: ', testTree.inOrder());

    console.log('post-order: ', testTree.postOrder());

    console.log('breadth first: ', testTree.breadthFirst());

    expect(testTree.root.data).toEqual(10);
  });


  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () =>
  {
    let testBinaryTree = new BinarySearchTree();

    let root = new Node(10);

    testBinaryTree.root = root;
  });

  test('Can successfully return a collection from a pre-order traversal', () =>
  {

  });

  test('Can successfully return a collection from an in-order traversal', () =>
  {

  });

  test('Can successfully return a collection from a post-order traversal', () =>
  {

  });

  test('Returns true|false for the contains method, given an existing or non-existing node value', () =>
  {

  });
});
