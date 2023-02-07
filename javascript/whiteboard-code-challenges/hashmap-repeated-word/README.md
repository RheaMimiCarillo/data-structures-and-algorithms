# Hashmap Repeated Word

Find the first repeated word in a book.

## Challenge

Find the first repeated word in a book.

## Approach & Efficiency

I'm going to approach this challenge utilizing the 'Single-responsibility principle'. Any methods I write will be clean, reusable, and elegant.

## API

Implementation of a Hashtable Class with the following method:

- `repeatedWord`
  - Arguments: (String)`book`
  - Returns: {string}
  - This method returns the first instance of a repeated word from a book
  - Should a given `key` already exist, replace its value from the `value` argument given to this method.
  - `set` data ends up at a stringified key:value pair

## Testing

My test suite will cover these cases:

1. Reading from a book without any words
2. Reading from a book without any repeated words
3. Reading from a book with at least one repeated word

## Stretch Goals

- Modify your function to return a count of each of the words in the provided string
- Modify your function to return a list of the words most frequently used in the provided string
