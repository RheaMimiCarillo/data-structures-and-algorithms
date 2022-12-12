'use strict';

const BinaryTree = require('../src/BinaryTree.js');
const { Node } = require('../src/Node.js');

describe('Testing tree data structures', () =>
{


  test('Can successfully return the maximum value from a tree with values', () =>
  {
    let testTree = new BinaryTree();
    let root = new Node(2);
    root.left = new Node(7);
    root.right = new Node (5);
    testTree.root = root;

    expect(testTree.root.data).toEqual(7);
  });

  test('Can successfully return an Error when called on an empty tree', () =>
  {
    let emptyTree = new BinaryTree();
    let result = emptyTree.findMax();

    //console.log('empty tree result: ', result);

    expect(result).toBeFalsy();
  });

  test('Can successfully return the maximum value from a tree with duplicate maximum values', () =>
  {
    let testTreeWithDuplicateMaxValues = new BinaryTree();
    let root = new Node(2);
    root.left = new Node(7);
    root.right = new Node (5);
    root.right.right = new Node (7);
    testTreeWithDuplicateMaxValues.root = root;

    let result = testTreeWithDuplicateMaxValues.findMax();

    expect(result).toEqual(7);
  });

});
