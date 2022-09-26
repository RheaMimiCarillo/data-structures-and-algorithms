'use strict';


class LinkedList
{
  // specify the default `head` of the linked list class will be `null` one isn't provided
  constructor(head = null)
  {
    // `head' property points to a `Node` object that serves as the start of this linked list
    this.head = head;
  }

  // this method adds a new node at the `head` of the linked list with O(1) Time performance
  // pass in a new `Node` we want to serve as the `head`
  // make the passed in node point to the current `head`
  // then make this linked list object point to the new `head`
  insert(newHead)
  {
    //
    // returns nothing
  }

  // traverse the linked list to look if this linked list includes the specified `searchKey`
  // if the list does, return `true`
  // else, return `false`
  includes(searchKey)
  {


    // returns boolean
  }

  // this method returns a string to represent all values in a linked list
  // ex: "{ a } -> { b } -> { c } -> NULL"
  // build a string
  // steps:
  // - check if the LinkedList has any nodes
  // if so, start with `{ ` and go from there
  // next would be the `<value-of-the-'head'> } -> ``
  // then check if the head's `next` property isn't null
  // if so, rinse and repeat
  // until we point to 'NULL'
  // then return the final string
  toString()
  {
    // if there is no head `Node` to point to
    if (this.head === null)
    {
      return '{}';
    }
    // if there is a head `Node` to point to
    else
    {
      let output = '{ ';

      output += `${this.head.data} } -> `;

      let current = this.head.next;

      while(current !== null)
      {
        output += ``
      }

      // returns string
      return output;
    }
  }
}

// Node class for use with singly linked lists
class Node
{
  // value is the data of the Node and 'next' points at the next Node object in this linked list
  // `next` is null if not provided
  constructor(data, next = null)
  {
    // data of this Node
    this.data = data;

    // pointer to the next `Node` object in the linked list
    this.next = next;
  }
}
