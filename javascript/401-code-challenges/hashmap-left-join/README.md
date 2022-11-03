# Hashmap LEFT JOIN

## Challenge

Implement a simplified LEFT JOIN for 2 Hashmaps.

## API

Function utilizing the Hashtable Class:

- function `hashmapLeftJoin`
  - Arguments: {Hashmap} `leftMap`, {Hashmap} `rightMap`
  - Returns: {Array} Matrix
  - This method accepts 2 Hashmaps and returns an a structure of values from the leftMap with an existing key in the rightMap, as well as the rightMap's matching data

## Testing

My test suite will cover these cases:

1. Reading from a hashmaps without any values
2. Reading from a hashmaps without any matching values
3. Reading from a hashmaps with at least one matching value

## Input and Output

**`Input:`**

| **Synonyms Hash Table** |           |   | **Antonyms Hash Table** |           |
|-------------------------|-----------|---|-------------------------|-----------|
| **Key**                 | **Value** |   | **Key**                 | **Value** |
| diligent                | employed  |   | diligent                | idle      |
| fond                    | enamored  |   | fond                    | averse    |
| guide                   | usher     |   | guide                   | follow    |
| outfit                  | garb      |   | flow                    | jam       |
| wrath                   | anger     |   | wrath                   | delight   |

**`Output:`**

``` js
[
   ["font", "enamored", "averse"],
   ["wrath", "anger", "delight"],
   ["diligent", "employed", "idle"],
   ["outfit", "garb", NULL],
   ["guide", "usher","follow"]
]
```

## Approach & Efficiency

I'm going to approach this challenge utilizing the 'Single-responsibility principle'. Any methods I write will be clean, reusable, and elegant.

My strategy is traverse the left hashmap and use `.keys()` to get all keys and `get(key)` to get the associated `value` and put those into an array. Then I'll use `.has(key)` on the right hashmap to see if it has a matching key, and then append either the value from that key, or `NULL` to the end of the array entry. Then, I'll nest each array/result into a `results` array.

The **time complexity** for this approach is, at worst, O(2n) ->

- read all values from left hashmap (Array/LinkedList traversal)
- read all values from right hashmap (Array/LinkedList traversal)

The **space complexity** for this approach is, at worst, O(n) ->

- n arrays for left hashmap

## Stretch Goals

*Consider a RIGHT JOIN. Can you implement this as a new function? How about by passing an optional parameter to your initial function, to specify if LEFT JOIN or RIGHT JOIN logic should be used?*
