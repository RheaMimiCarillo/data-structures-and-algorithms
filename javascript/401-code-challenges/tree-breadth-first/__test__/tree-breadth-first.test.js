'use strict';

const BinaryTree = require('../src/BinaryTree.js');
const BinarySearchTree = require('../src/BinarySearchTree.js');
const { Node } = require('../src/Node.js');

describe('Testing tree breadth-first traversal method', () =>
{
  test('Can successfully return a collection using a breadth-first approach from a Binary Tree with values', () =>
  {
    let testTree = new BinaryTree();
    let root = new Node(1);
    root.left = new Node(99);
    root.right = new Node(1000);
    testTree.root = root;

    let result = testTree.breadthFirst();

    expect(result).toEqual([ 1, 99, 1000 ]);
  });

  test('Can successfully return a collection using a breadth-first approach from a Binary Search Tree with values', () =>
  {
    let testBinarySearchTree = new BinarySearchTree();
    testBinarySearchTree.add(4);
    testBinarySearchTree.add(2);
    testBinarySearchTree.add(6);
    testBinarySearchTree.add(1);
    testBinarySearchTree.add(3);
    testBinarySearchTree.add(5);
    testBinarySearchTree.add(7);

    let breadthFirstResult = testBinarySearchTree.breadthFirst();
    expect(breadthFirstResult).toEqual([ 4, 2, 6, 1, 3, 5, 7 ]);
  });

  test('Can successfully return an empty collection when called on an empty tree', () =>
  {
    let emptyTree = new BinaryTree();

    let result = emptyTree.breadthFirst();

    expect(result).toEqual([]);
  });
});
