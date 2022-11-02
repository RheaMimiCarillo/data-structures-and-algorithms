'use strict';
const HashTable = require('../HashTable');
const BinaryTree = require('../binary-tree/BinaryTree');
const { Node } = require('../binary-tree/Node');

// import BinaryTree class

describe('Testing tree-intersection', () =>
{
  test('Should return empty array for empty trees', () =>
  {
    let testHashTable = new HashTable(1024);

    let testLeftTree = new BinaryTree();

    let testRightTree = new BinaryTree();

    let result = testHashTable.treeIntersection(testLeftTree, testRightTree);

    expect(result).toEqual([]);
  });
  test('Should return empty array for trees without any matching values', () =>
  {
    let testHashTable = new HashTable(1024);

    let testLeftTree = new BinaryTree();
    let leftRoot = new Node(150);
    leftRoot.left = new Node(100);
    leftRoot.left.left = new Node(75);
    leftRoot.left.right = new Node(160);
    leftRoot.left.right.left = new Node(125);
    leftRoot.left.right.right = new Node(175);

    leftRoot.right = new Node(250);
    leftRoot.right.left = new Node(200);
    leftRoot.right.right = new Node(350);
    leftRoot.right.right.left = new Node(300);
    leftRoot.right.right.right = new Node(500);
    testLeftTree.root = leftRoot;

    let testRightTree = new BinaryTree();
    testRightTree.root = new Node(9001);

    let result = testHashTable.treeIntersection(testLeftTree, testRightTree);

    expect(result).toEqual([]);
  });
  test('Should return an array of values found in both trees', () =>
  {
    let testLeftTree = new BinaryTree();
    let leftRoot = new Node(150);
    leftRoot.left = new Node(100);
    leftRoot.left.left = new Node(75);
    leftRoot.left.right = new Node(160);
    leftRoot.left.right.left = new Node(125);
    leftRoot.left.right.right = new Node(175);

    leftRoot.right = new Node(250);
    leftRoot.right.left = new Node(200);
    leftRoot.right.right = new Node(350);
    leftRoot.right.right.left = new Node(300);
    leftRoot.right.right.right = new Node(500);
    testLeftTree.root = leftRoot;

    // [ 150, 100, 75, 160, 125, 175, 250, 200, 350, 300, 500 ]
    let leftPreOrder = testLeftTree.preOrder();

    // console.log('left tree pre order array: ', leftPreOrder);

    let testRightTree = new BinaryTree();
    let rightRoot = new Node(42);
    rightRoot.left = new Node(100);
    rightRoot.left.left = new Node(15);
    rightRoot.left.right = new Node(160);
    rightRoot.left.right.left = new Node(125);
    rightRoot.left.right.right = new Node(175);

    rightRoot.right = new Node(600);
    rightRoot.right.left = new Node(200);
    rightRoot.right.right = new Node(350);
    rightRoot.right.right.left = new Node(4);
    rightRoot.right.right.right = new Node(500);
    testRightTree.root = rightRoot;

    // [ 42, 100, 15, 160, 125, 175, 600, 200, 350, 4, 500 ]
    let rightPreOrder = testRightTree.preOrder();
    // console.log('right tree pre order array: ', rightPreOrder);

    // [ 100, 160, 125, 175, 200, 350, 500 ]
    let expectedResult = [];
    rightPreOrder.forEach(value =>
    {
      if (leftPreOrder.includes(value) && !expectedResult.includes(value))
      {
        expectedResult.push(value);
      }
    });
    // console.log(expectedResult);

    let testHashTable = new HashTable(1024);
    let results = testHashTable.treeIntersection(testLeftTree, testRightTree);
    console.log('tree intersection results: ', results);

    // expect all duplicate values in the results array to be also be the expectedResult array
    expect(expectedResult.every(value => results.includes(value))).toEqual(true);
    expect(results.length).toEqual(expectedResult.length);
  });
});
