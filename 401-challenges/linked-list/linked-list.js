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
  insert(value)
  {

    // returns nothing
  }

  includes(value)
  {


    // returns boolean
  }

  // this method returns a string to represent all values in a linked list
  // ex: "{ a } -> { b } -> { c } -> NULL"
  toString()
  {

    // returns string
    return '';
  }
}

// Node class for use with singly linked lists
class Node
{
  // value is the data of the Node and 'next' points at the next Node object in this linked list
  // `next` is null if not provided
  constructor(value, next = null)
  {
    this.value = value;
    this.next = next;
  }
}
