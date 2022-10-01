'use strict';

// import the `Node` class from the linked list class
const { Node } = require('./linked-list.js');

class Stack
{
  constructor(top = null)
  {
    this.top = top;
  }

  // this method adds a new node to the Top of a Stack
  // accepts 1 parameter: value of new node
  push(data)
  {
    // create a new Node with `data`
    let newTop = new Node(data);

    // if this stack has a top node already
    if (this.top)
    {
      // newTop node point to the current top node
      newTop.next = this.top;
    }

    // set the `top` of this Stack to point to the new Node
    this.top = newTop;
  }

  // this method removes a node from the top of a Stack and return that node's value
  // accepts no parameters
  pop()
  {
    // attempt to pop top node
    try
    {
      // make a temp value that points to the current top (two things are pointing to the node that's a the top, now)
      let temp = this.top;

      // set the `top` property of this stack to be the next node down the stack
      this.top = this.top.next;

      // break the reference to the previous top node by setting its .next to `null`
      temp.next = null;

      // return the data of the node we removed from the stack
      return temp.data;
    }
    // if no top node to pop, return an error
    catch (error)
    {
      return error;
    }
  }

  // this method looks at the Top node and returns its value
  // accepts no parameters
  peek()
  {
    // try to return the value of the `top` node
    try
    {
      return this.top.data;
    }
    // if empty, or top node has no value, return an error
    catch (error)
    {
      return error;
    }
  }

  // this method returns a boolean for if the stack had no nodes attached
  // accepts no parameters
  isEmpty()
  {
    // if this.top is truthy, return true, otherwise, return false
    return this.top ? true : false;
  }

  // this method prints the stack class and nodes in a vertical format:
  toString()
  {
    // if there is no head `Node` to point to
    if (this.top === null)
    {
      return `\nHEAD\n↓{}`;
    }
    // if there is a head `Node` to point to
    else
    {
      // start building first node from `head`
      let output = '\nHEAD\n↓\n{ ';

      // fill output with data in `head`
      output += `${ this.top.data } }\n↓`;

      // specify the next node
      let current = this.top.next;

      // whilst `current` isn't null
      while (current !== null)
      {
        // add the brackets, `current` data, and arrow to the  `output` string
        output += `\n{ ${ current.data } }\n↓`;
        current = current.next;
      }

      // when we get here, current isn't a `Node`, it's `null, so we concatenate `NULL` to the end of `output`
      output += `\nNULL`;

      // returns `output`
      return output;
    }
  }
}

module.exports = Stack;
