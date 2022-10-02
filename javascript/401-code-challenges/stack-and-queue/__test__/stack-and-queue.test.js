'use strict';

// import Stack class from stack
const Stack = require('../stack.js');

// import Queue class
const Queue = require('../queue.js');

describe('stack stuff', () =>
{
  // push test
  describe('Push test', () =>
  {
    it('should return a stack with nodes added to the top', () =>
    {
      // create stack
      let testStack = new Stack();

      // push 1, 2, and 3 nodes to the stack
      testStack.push(1);
      testStack.push(2);
      testStack.push(3);

      // what the expected output should be
      expect(testStack.toString()).toEqual(`\nHEAD\n↓\n{ 3 }\n↓\n{ 2 }\n↓\n{ 1 }\n↓\nNULL`);
      /*
        HEAD
        ↓
        { 3 }
        ↓
        { 2 }
        ↓
        { 1 }
        ↓
        NULL
      */
    });
  });

  // `pop test`
  describe('Pop tests', () =>
  {
    it('should remove nodes from the stack', () =>
    {
      // do stuff
      // create stack
      let testStack = new Stack();

      // push nodes to the stack
      testStack.push('t');
      testStack.push('a');
      testStack.push('c');
      testStack.push('o');
      testStack.push('c');
      testStack.push('a');
      testStack.push('t');

      // pop nodes off of the stack
      testStack.pop();
      testStack.pop();
      testStack.pop();
      testStack.pop();
      // what the expected output should be
      /*
        HEAD
        ↓
        { c }
        ↓
        { a }
        ↓
        { t }
        ↓
        NULL
      */
      expect(testStack.toString()).toEqual(`\nHEAD\n↓\n{ c }\n↓\n{ a }\n↓\n{ t }\n↓\nNULL`);
    });
  });

  // test to return the value of a popped node
  describe('Pop tests', () =>
  {
    it('should return the value of a popped node', () =>
    {
      // do stuff
      let testList = new Stack();

      // add nodes to test list
      testList.push('I\'m ready');
      testList.push('Mr. Krabbs, I have an idea');

      // pop and save value of popped item
      let poppedData = testList.pop();


      // what the expected output should be
      expect(poppedData).toEqual('Mr. Krabbs, I have an idea');
    });
  });

  // test to pop empty list
  describe('Pop tests', () =>
  {
    it('should return an error when no nodes to pop', () =>
    {
      // do stuff
      let testList = new Stack();

      // add nodes to test list
      let result = testList.pop();


      // expect error message
      // what the expected output should be
      expect(result).toEqual('error popping empty Stack');
    });
  });

  // test to attempt pop on an empty linked list

  // `peek` tests
  describe('Peek tests', () =>
  {
    it('should return the peeked value', () =>
    {
      // do stuff
      let testList = new Stack();

      testList.push('(✿ ͡° ͜ʖ ͡°)');
      // add nodes to test list
      let result = testList.peek();

      // expect error message
      // what the expected output should be
      expect(result).toEqual('(✿ ͡° ͜ʖ ͡°)');
    });
  });

  // test to peek empty list
  describe('Peek tests', () =>
  {
    it('should return an error peeking', () =>
    {
      // do stuff
      let testList = new Stack();

      // add nodes to test list
      let result = testList.peek();

      // expect error message
      // what the expected output should be
      expect(result).toEqual('error peeking empty Stack');
    });
  });

  // `is empty` test
  describe('Is empty test', () =>
  {
    it('should return true, for empty stack', () =>
    {
      // create an empty stack
      let testList = new Stack();

      // call .isEmpty() and save result to variable
      let result = testList.isEmpty();

      // testList had no nodes, so expect a `true` result
      expect(result).toEqual(true);
    });
  });

  // `is empty` test
  describe('Is empty test', () =>
  {
    it('should return false, for stack with at least one node', () =>
    {
      // create an empty stack
      let testList = new Stack();

      testList.push('(◡ ‿ ◡ ✿)');
      // call .isEmpty() and save result to variable
      let result = testList.isEmpty();

      // testList has a node, so expect a `false` result
      expect(result).toEqual(false);
    });
  });
});

// Queue class tests
describe('Queue stuff', () =>
{
  // test to add nodes to a queue with enqueue
  describe('enqueue test', () =>
  {
    it('Can successfully enqueue multiple values into a queue', () =>
    {
      let testQueue = new Queue();
      testQueue.enqueue('a');
      testQueue.enqueue('b');
      testQueue.enqueue('c');

      expect(testQueue.toString()).toEqual(`FRONT → { a } → { b } → { c } → BACK → NULL`);
    });
  });

  // test to dequeue and see the value of the removed node
  describe('dequeue test', () =>
  {
    it('Can successfully dequeue out of a queue the expected value', () =>
    {
      let testQueue = new Queue();
      testQueue.enqueue('a');
      testQueue.enqueue('b');
      testQueue.enqueue('c');

      let result = testQueue.dequeue();
      expect(result).toEqual('a');
    });
  });

  // test to peek into a queue and see the value of the front node
  describe('peek test', () =>
  {
    it('Can successfully peek into a queue, seeing the expected value', () =>
    {
      let testQueue = new Queue();
      testQueue.enqueue('a');
      testQueue.enqueue('b');
      testQueue.enqueue('c');

      let result = testQueue.peek();
      expect(result).toEqual('a');
    });
  });

  // test to empty a queue with dequeue
  describe('dequeue test', () =>
  {
    it('Can successfully empty a queue after multiple dequeues', () =>
    {
      let testQueue = new Queue();
      testQueue.enqueue('a');
      testQueue.enqueue('b');
      testQueue.enqueue('c');

      testQueue.dequeue();
      testQueue.dequeue();
      testQueue.dequeue();

      expect(testQueue.toString()).toEqual('FRONT → { } → BACK → NULL');
    });
  });

  // make empty queue
  describe('Queue instantiation test', () =>
  {
    it('Can successfully instantiate an empty queue', () =>
    {
      let testQueue = new Queue();
      expect(testQueue.toString()).toEqual('FRONT → { } → BACK → NULL');
    });
  });

  // isEmpty test
  describe('isEmpty test', () =>
  {
    it('Calling dequeue or peek on empty queue raises exception', () =>
    {
      let testQueue = new Queue();
      expect(testQueue.isEmpty()).toEqual(true);
    });
  });
});
