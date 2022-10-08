'use strict';

const BinaryTree = require('../src/BinaryTree.js');
const BinarySearchTree = require('../src/BinarySearchTree.js');
const Node = require('../src/Node.js');

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
  });


  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () =>
  {

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
