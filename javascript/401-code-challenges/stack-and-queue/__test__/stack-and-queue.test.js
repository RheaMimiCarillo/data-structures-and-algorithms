'use strict';

// import Node class from linked-list
const { Node } = require('../linked-list.js');

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

  // instantiate a new stack
  describe('push node to top of stack', () =>
  {
    it('should do stuff', ()=>
    {
      // do stuff
      let testStack = new Stack();
      testStack.push(1);
      testStack.push(2);
      testStack.push(3);
      console.log(testStack.toString());
      // what the expected output should be
      expect('');
    });
  });
});
