'use strict';

const KaryTree = require('../src/KaryTree.js');
const { Knode } = require('../src/Node.js');

describe('Testing k-ary tree fizz buzz method', () =>
{
  test('Can successfully return a new k-ary tree from a k-ary tree with values', () =>
  {
    let testKaryTree = new KaryTree();

    let testRoot = new Knode(3, 3);
    testRoot.children[ 0 ] = new Knode(5, 0);
    testRoot.children[ 1 ] = new Knode(15, 0);
    testRoot.children[ 2 ] = new Knode(17, 0);

    testKaryTree.root = testRoot;

    let result = testKaryTree.treeFizzBuzz();

    expect(result.root.data).toEqual('Fizz');
    expect(result.root.children[ 0 ]).toEqual('Buzz');
    expect(result.root.children[ 1 ]).toEqual('FizzBuzz');
    expect(result.root.children[ 2 ]).toEqual('17');
  });

  test('Can successfully return a tree with numbers turned into Strings from a tree without and values divisible by 3 or 5', () =>
  {
    let testKaryTreeWithoutFizzAndBuzz = new KaryTree();

    let testRoot = new Knode(1, 3);
    testRoot.children[ 0 ] = new Knode(2, 0);
    testRoot.children[ 1 ] = new Knode(4, 0);
    testRoot.children[ 2 ] = new Knode(7, 0);

    testKaryTreeWithoutFizzAndBuzz.root = testRoot;

    let result = testKaryTreeWithoutFizzAndBuzz.treeFizzBuzz();

    expect(result.root.data).toEqual('1');
    expect(result.root.children[ 0 ]).toEqual('2');
    expect(result.root.children[ 1 ]).toEqual('4');
    expect(result.root.children[ 2 ]).toEqual('7');
  });

  test('Can successfully return an empty k-ary tree when called on an empty tree', () =>
  {
    let emptyKaryTree = new KaryTree();

    let result = emptyKaryTree.treeFizzBuzz();

    expect(result).toBeInstanceOf(KaryTree);
    expect(result.root === null).toBe(true);
  });
});
