# Linked List Insertions

## Challenge Summary

### Feature Tasks

Write the following methods for the Linked List class:

- append
  - arguments: new value
  - adds a new node with the given value to the end of the list

- insert before
  - arguments: value, new value
  - adds a new node with the given new value immediately before the first node that has the value specified

- insert after
  - arguments: value, new value
  - adds a new node with the given new value immediately after the first node that has the value specified

## Whiteboard Process

![Singly Linked List Whiteboard](./images/05.png "Singly Linked List Whiteboard")
![Linked List Insertions](./images/06.jpg "Linked List Insertions")
![Kth from the end](./images/07.jpg "Kth from the end")

## Approach & Efficiency

I took the approach to implement my methods with basic `for` and `while` loops to make my classes and functions accessible for humans to understand. I'd go back later, then optimize for efficiency.

## Solution

Traverse through a list, one at a time
have `current`, as well as an `offset` value, each pointing to nodes
the `offset` is `k` nodes 'behind', the `current`
when the `current.next` points to a `null` value, stop  traversing both, and get the value of whatever node `offset` is pointing to an return that value
