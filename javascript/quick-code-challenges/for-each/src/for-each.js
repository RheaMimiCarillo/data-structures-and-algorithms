'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named `addOne` that takes an array of numbers, and returns a new array of the numbers, incremented by 1.

Use `forEach` to loop over the input array and work with each value.  Push the new value into a local array. Return the local array;
------------------------------------------------------------------------------------------------ */

const addOne = (arr) =>
{
  // new, local array
  let newArr = [];

  // traverse through arr and add one to the value at each index
  // forEach requires a callback function
  arr.forEach(value => newArr.push(value + 1));

  // return local array
  return newArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named `addExclamation` that takes an array of strings, and returns a new array of the same strings with an "!" added to the end.

Use `forEach` to loop over the input array. Modify each string, and add the updated value into a local array. Return the local array;
------------------------------------------------------------------------------------------------ */

const addExclamation = (arr) =>
{
  // arr: an array of strings

  // newArr[] with '!'
  let newArr = [];

  // forEach to traverse and push to local array
  arr.forEach(value => newArr.push(value + '!'));

  // return newArr[]
  return newArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named `allUpperCase` that takes an array of strings, and returns a new array of the strings converted to upper case.

Use `forEach` to loop over the input array. The modified strings should each be added into a local array. Return that local array.
------------------------------------------------------------------------------------------------ */

const allUpperCase = (arr) =>
{
  // arr = array of strings

  // upperArr = arr with all values uppercase
  let upperArr = [];

  // traverse through each item in arr and .toUpperCase()
  arr.forEach(value => upperArr.push(value.toUpperCase()));

  // return upperArr
  return upperArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named `greeting` that takes in a single string and returns the string in all uppercase letters, and followed by an "!".

Then, write a function named `speaker` that takes in an array of strings and a callback function.

Use `forEach` to build a new array of strings, each string modified by the callback. Return the new array.
------------------------------------------------------------------------------------------------ */

const greeting = (word) =>
{
  return `${ word.toUpperCase() }!`;
};

const speaker = (words, callback) =>
{
  // words = array of strings

  // empty array to store UPPERCASE'd and !'d strings
  let speakerArr = [];

  // traverse through words[] and run callback() on each word in words
  // remember, callback() requires a string as a parameter
  words.forEach(word => speakerArr.push(callback(word)));

  // return speakerArr
  return speakerArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named addValues that takes in an array and a value and pushes the value into the array. This function does not need a return statement.

Then, write a function named addNumbers that takes in four arguments:
  - A number to be added to an array
  - An array into which the number should be added
  - The number of times the number should be added
  - A callback function to use to add the numbers to the array (Hint: you already defined it)

Within the addNumbers function, invoke the callback function as many times as necessary, based on the third argument of the addNumbers function.

Return the modified array.
------------------------------------------------------------------------------------------------ */

// arr is a an array
// value is a value that'll be pushed to arr
// addValues takes in an array and a value and pushes the value into the array
const addValues = (arr, value) =>
{
  arr.push(value);
};

// addNumbers() takes in four arguments and runs stuff as many times as the 'times' argument
// return a modified array
const addNumbers = (num, arr, times, callback) =>
{

  // for loop to run 'times' amount of times
  // the prompt doesn't say we're limited to forEach on this one
  for (let i = 0; i < times; i++)
  {
    // run callback with arr and num as arguments
    callback(arr, num);
  }

  // return the original arr[] passed in earlier
  return arr;
};

/* ------------------------------------------------------------------------------------------------

CHALLENGE 6

Write a function named createList that takes in an array of the current store inventory.

The inventory is formatted like this:
[
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
]

This function should use forEach to populate your grocery list based on the store's inventory. If the item is available, add it to your list. Return the final list.
------------------------------------------------------------------------------------------------ */

const createList = (availableItems) =>
{
  // gonna need a for each on availableItems
  // gonna need to get name and available properties from each item in the array
  // gonna need to check if (available)
  // gonna need to add, push, or something each item into my 'grocery list'

  // empty string
  let groceryList = [];

  // for each object in availableItems, get item name and availability
  // if available === true, add item to grocery list
  availableItems.forEach(item =>
  {
    // item is the current object literal in availableItems[]
    // item.available is the value of the available: true/false key/value pair
    if (item.available)
    {
      groceryList.push(item.name);
    }
  });

  // return the grocery list
  return groceryList;
};

/* ------------------------------------------------------------------------------------------------
STRETCH - CHALLENGE 7

Write a function named fizzbuzz that takes in an array of numbers.

Iterate over the array using forEach to determine the output based on several rules:
  - If a number is divisible by 3, add the word "Fizz" to the output array.
  - If the number is divisible by 5, add the word "Buzz" to the output array.
  - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
  - Otherwise, add the number to the output array.

Return the resulting output array.
------------------------------------------------------------------------------------------------ */

const fizzbuzz = (arr) =>
{
  // Solution code here...
  // output array
  let output = [];

  arr.forEach(current =>
  {
    // if number is divisible by 3 and 5
    if ((current % 3 === 0) && (current % 5 === 0))
    {
      output.push('Fizz Buzz');
    }
    // if number is divisible by 3
    else if (current % 3 === 0)
    {
      output.push('Fizz');
    }
    // if number divisible by 5
    else if (current % 5 === 0)
    {
      output.push('Buzz');
    }
    else
    {
      output.push(current);
    }
  });

  return output;
};

module.exports = {
  addOne,
  addExclamation,
  allUpperCase,
  greeting,
  speaker,
  addValues,
  addNumbers,
  createList,
  fizzbuzz
};
