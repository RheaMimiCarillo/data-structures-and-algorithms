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
      // do stuff
      let testStack = new Stack();
      testStack.push(1);
      testStack.push(2);
      testStack.push(3);
      //console.log('testStack toString: ', testStack.toString());
      //console.log('testStack raw log: ', testStack);
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
  describe('Pop test', () =>
  {
    it('should do stuff', ()=>
    {
      // do stuff

      // what the expected output should be
      expect('');
    });
  });

  // peek test
  describe('Peek test', () =>
  {
    it('should do stuff', ()=>
    {
      // do stuff

      // what the expected output should be
      expect('');
    });
  });

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
