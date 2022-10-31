# Hashtables

HashTable class for strings in JavaScript.

A hash table is a data structure designed to improve the efficiency of storing and retrieving data.

## Challenge

Implement a Hashtable Class with the methods listed in the 'API' section.

## Approach & Efficiency

I'm going to approach this challenge utilizing the 'Single-responsibility principle'. Any methods I write will be clean, reusable, and elegant.

Our hashing algorithm will take the sum of each character in a string and take into account the total number of buckets available to calculate a reliably replicable key.

Each bucket in our table will be a linked-list with node objects. Each node's data value will hold the key and value for the data we're storing.

In our JavaScript implementation, our HashTable will be an Array of LinkedLists.

## API

Implementation of a Hashtable Class with the following methods:

- `set`
  - Arguments: `key`, `value`
  - Returns: nothing
  - This method should hash the `key`, and set the `key` and value pair in the table, handling collisions as needed.
  - Should a given `key` already exist, replace its value from the `value` argument given to this method.
  - `set` data ends up at a stringified key:value pair

- `get`
  - Arguments: `key`
  - Returns: Value associated with that `key` in the table

- `has`
  - Arguments: `key`
  - Returns: Boolean, indicating if the `key` exists in the table already.

- `keys`
  - Returns: Collection of `keys`

- `hash`
  - Arguments: `key`
  - Returns: Index in the collection for that `key`

## Testing

My test suite will cover these cases:

1. Setting a key/value to your hashtable results in the value being in the data structure
2. Retrieving based on a key returns the value stored
3. Successfully returns null for a key that does not exist in the hashtable
4. Successfully returns a list of all unique keys that exist in the hashtable
5. Successfully handle a collision within the hashtable
6. Successfully retrieve a value from a bucket within the hashtable that has a collision
7. Successfully hash a key to an in-range value
