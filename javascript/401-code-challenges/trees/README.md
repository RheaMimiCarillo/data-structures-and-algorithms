# Trees

![Tree UML](./images/lab15.jpg "Tree UML")

## Challenge

Create BinaryTree and BinarySearchTree classes with pre, in, and post-order searches, as well as 'add' and 'contains' methods to the BinarySearchTree class.

## Approach & Efficiency

I'm taking the approach to put search values into an array, to make for easier data manipulation and testing.

## API

### Node

- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

### Binary Tree

- Create a Binary Tree class
  - Define a method for each of the depth first traversals which returns an array of the values, ordered appropriately:
    - pre order
    - in order
    - post order

### Binary Search Tree

- Extends Binary Tree class
  Add
  - Arguments: value
  - Return: nothing
  - Adds a new node with that value in the correct location in the binary search tree.

  - Contains
    - Argument: value
    - Returns: boolean indicating whether or not the value is in the tree at least once.
