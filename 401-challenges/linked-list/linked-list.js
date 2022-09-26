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
    // if there is no `head` on this linked list
    if (this.head === null)
    {
      // return false, because there's nothing to search through
      return false;
    }
    // there there is a 'head' node in this linked list
    else
    {
      // designate current as the linked list's head
      let current = this.head;

      // flag to designate if the searchKey has been found
      let found = false;

      // keep looping until we run out of `node`s to check, or if the searchKey is found
      while (current !== null || !found)
      {
        // if the data of the current node matches the searchKey
        // set `found` to `true`
        // otherwise, go to the next node
        /*
        if (current.data === searchKey)
        {
          found = true;
        }
        else
        {
          current = current.next;
        }
        */

        current.data === searchKey
          ? found = true
          : current = current.next;
      }
      // returns boolean
      // will return
      return found;
    }
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
      // start building first node from `head`
      let output = '{ ';

      // fill output with data in `head`
      output += `${ this.head.data } } -> `;

      // specify the next node
      let current = this.head.next;

      // whilst `current` isn't null
      while (current !== null)
      {
        // add the brackets, `current` data, and arrow to the  `output` string
        output += `{ ${ current.data } } -> `;
        current = current.next;
      }

      // when we get here, current isn't a `Node`, it's `null, so we concatenate `NULL` to the end of `output`
      output += 'NULL';

      // returns `output`
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


let testNode = new Node('poop');

let testList = new LinkedList(testNode);

console.log(testList.toString());
