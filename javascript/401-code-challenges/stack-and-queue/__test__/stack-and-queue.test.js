'use strict';

// import Stack class from stack
const Stack = require('../stack.js');

describe('stack stuff', ()=>
{
  describe('push node to top of stack', () =>
  {
    it('should do stuff', ()=>
    {
      // do stuff

      // what the expected output should be
      expect('');
    });
  });

  // push test
  describe('Push test', () =>
  {
    it('should return a stack with nodes added to the top', ()=>
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

        \n
        HEAD\n
        ↓\n
        { 3 }\n
        ↓\n
        { 2 }\n
        ↓\n
        { 1 }\n
        ↓\n
        NULL
      */
    });
  });

  // pop test
  describe('Pop tests', () =>
  {
    it('should remove nodes from the stack', ()=>
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
    it('should return the value of a popped node', ()=>
    {
      // do stuff

      // what the expected output should be
      expect('');
    });
  });

  // test to attempt pop on an empty linked list

  // peek tests
  describe('Peek test', () =>
  {
    it('should do stuff', ()=>
    {
      // do stuff

      // what the expected output should be
      expect('');
    });
  });

  // test to attempt to peak an empty stack

  // is empty test 
  describe('Is empty test', () =>
  {
    it('should do stuff', ()=>
    {
      // do stuff

      // what the expected output should be
      expect('');
    });
  });
});
