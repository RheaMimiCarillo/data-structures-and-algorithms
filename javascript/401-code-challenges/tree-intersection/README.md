# Tree Intersection

## Challenge

Find common values in 2 binary trees.

Using **your** Hashmap implementation as a part of your algorithm, return a set of values found in both trees.

## Approach & Efficiency

I'm going to approach this challenge utilizing the 'Single-responsibility principle'. Any methods I write will be clean, reusable, and elegant.

## API

Implementation of a Hashtable Class with the following method:

- ` treeIntersection`
  - Arguments: (Binary Tree)`leftTree`, (Binary Tree)`rightTree`
  - Returns: {Array}
  - This method returns an Array of values found in both Binary Trees

## Testing

My test suite will cover these cases:

1. Reading from a trees without any values
2. Reading from a trees without any repeated values
3. Reading from a book with at least one repeated value

## Input and Output

`Input:`
![Input Tree 1](./images/BT1.png "Input Tree 1")
![Input Tree 2](./images/BT2.png "Input Tree 2")

`Output`
`100,160,125,175,200,350,500`

## Stretch Goals

- Describe how you might solve this differently if the parameters were Binary Search Trees.
  - What are the potential efficiency differences?
