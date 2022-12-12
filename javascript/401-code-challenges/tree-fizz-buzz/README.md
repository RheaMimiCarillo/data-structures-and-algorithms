# Code Challenge

## Tree Fizz-Buzz

*Conduct “FizzBuzz” on a k-ary tree while traversing through it to create a new tree.*

*Set the values of each of the new nodes depending on the corresponding node value in the source tree.*

## API

- **`K-ary Tree` class `method`:**
  - **`treeFizzBuzz():`**
    - Arguments: none
    - Return: `K-ary Tree`: Collection of values in the input Binary Tree

  Determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:

      - If the value is divisible by 3, replace the value with “Fizz”
      - If the value is divisible by 5, replace the value with “Buzz”
      - If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
      - If the value is not divisible by 3 or 5, simply turn the number into a String

## Approach & Efficiency

### K-ary Tree Fizz-Buzz UML

> ![K-ary Tree Fizz-Buzz UML](./images/tree-fizz-buzz.png "K-ary Tree Fizz-Buzz UML")

### Big O

- **`breadthFirst()`**
  - Time: `O(n)`
    - As a traversal we must visit every node in the tree
  - Space: `O(n)`
    - The space accounts for frames added to the call-stack, as well as the resulting `k-ary tree` from the traversal

## Testing

My test suite covers these cases:

1. Can successfully `return a new k-ary tree` from a `k-ary tree` with values
2. Can successfully `return a tree with numbers turned into Strings` from a tree without and values divisible by 3 or 5
3. Can successfully return an `empty k-ary tree` when called on `an empty tree`
