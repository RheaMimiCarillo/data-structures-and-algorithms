/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function named updateAnimal that takes in array of animals (strings) and some callback function.

This function should first create a new array. Then iterate over the input array and modify each value based on the callback function provided.

Push each updated animal string into the new array. Return the new array.

HINT: Look at the tests to see how the callback functions are used.

------------------------------------------------------------------------------------------------ */

function upper(str)
{
  return str.toUpperCase();
}

function lower(str)
{
  return str.toLowerCase();
}

const updateAnimal = (arr, callback) =>
{
  return arr.map(animal => callback(animal));
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function called sortNames that takes an array of names and sorts them alphabetically. Capital letters should come before lowercase letters.

For example: 'Cat' would come before 'apple'
------------------------------------------------------------------------------------------------ */

const sortNames = (arr) =>
{
  return arr.sort();
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function called sortNumbers that takes an array of numbers and sorts them from smallest to largest.

HINT: Beware... JS default is "Lexical" ordering.
------------------------------------------------------------------------------------------------ */

const sortNumbers = (arr) =>
{
  // Solution code here...

  // arr is an array of numbers
  // return an array sorted from lowest to highest

  // return an array where a and b are compared and if a - b is a positive number, a is larger than b and will switch indices with b
  return arr.sort((a, b) => a - b);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named sortBackwards that takes in an array of numbers and returns the same array, with the numbers sorted, largest to smallest.

HINT: Do it with a custom sort callback, not with using `.reverse()`. ;)
------------------------------------------------------------------------------------------------ */

const sortBackwards = (arr) =>
{
  // Solution code here...
  return arr.sort((a, b) => b - a);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named alphabetize that takes in an array of strings and returns the same array with the strings sorted alphabetically.

In this alphabetization, capital letters come before lower case letters.

For example, ['Alphabet', 'Zebra', 'alphabet', 'carrot'] is correctly sorted.
------------------------------------------------------------------------------------------------ */

const alphabetize = (arr) =>
{
  // Solution code here...

  // how is different from challenge 2??
  return arr.sort();
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named sortByPrice that takes in an array of objects, each of which has a 'price' property, and sorts those objects by price, lowest to highest, returning the same array.

Here is an example of the input:
[
  {name: 'Sweatshirt', price: 45},
  {name: 'Bookmark', price: 2.50},
  {name: 'Tote bag', price: 15}
];
------------------------------------------------------------------------------------------------ */

const sortByPrice = (arr) =>
{
  // Solution code here...

  // arr is an array of objects that have a 'price' property
  // 1. traverse an the arr
  // 2. look at each item.price
  // 3. sort with item.price comparator
  // 4. return the array

  let cheapExpensive = arr.sort((item1, item2) => item1.price - item2.price);

  return cheapExpensive;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named alphabetizeBetter that takes in an array of strings and returns the same array, with the strings sorted alphabetically. Capitalization should not change the sort order of two strings.

For example, ['Alphabet', 'alphabet', 'carrot', 'Zebra'] is correctly sorted, and so is ['alphabet', 'Alphabet', 'carrot', 'Zebra'].
------------------------------------------------------------------------------------------------ */

const alphabetizeBetter = (arr) =>
{
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named sortByLength that takes in an array of strings and returns the same array, with the strings sorted by their length, lowest to highest.
------------------------------------------------------------------------------------------------ */

const sortByLength = (arr) =>
{
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named sortNumbersByLength that takes in an array of numbers and sorts those numbers by their length.

For example, [1, 14, 0.2, -281, 54782] is only correctly sorted in that order.
------------------------------------------------------------------------------------------------ */

const sortNumbersByLength = (arr) =>
{
  // Solution code here...
};

/*-----------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named sortPeople that takes in an array of Person objects, each of which has firstName, lastName, and age properties, and sorts those people by their last names. Do not worry about capitalization or first names.
------------------------------------------------------------------------------------------------ */

function Person(firstName, lastName, age)
{
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const people = [
  new Person('Wes', 'Washington', 25),
  new Person('Casey', 'Codefellow', 38),
  new Person('Stan', 'Seattle', 67),
];

const sortPeople = (arr) =>
{
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Stretch Goal

Write a function named sortPeopleBetter that takes in an array of Person objects, each of which has firstName, lastName, and age properties, and sorts those people by their last names.

If two people share the same last name, alphabetize on their first name.

If two people have the same full name, the younger one should come first. Do not worry about capitalization.
------------------------------------------------------------------------------------------------ */

const sortPeopleBetter = (arr) =>
{
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 12 - Stretch Goal

Write a function named sortMeetingsByDay that takes in an array of objects, each of which represents a meeting happening a particular day of the week, with a particular start time and end time.

Sort the meetings by the day on which they happen, Monday-Friday. It does not matter which order meetings come in on a particular day. For example, if there are two meetings on Monday, it does not matter which comes first.
------------------------------------------------------------------------------------------------ */

function Meeting(dayOfWeek, start, end)
{
  this.dayOfWeek = dayOfWeek;
  this.start = start;
  this.end = end;
}
const meetings = [
  new Meeting('Monday', '0900', '1000'),
  new Meeting('Wednesday', '1300', '1500'),
  new Meeting('Tuesday', '1145', '1315'),
  new Meeting('Wednesday', '0930', '1000'),
  new Meeting('Monday', '0900', '0945'),
  new Meeting('Friday', '1200', '1345'),
];

const sortMeetingsByDay = (arr) =>
{
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 13 - Stretch Goal

This challenge should use the array of meetings from challenge 12, above.

Sort the meetings in the order that they start. If two meetings start at the same time on the same day, the shorter meeting should come first.

You DO NOT need to use your solution to Challenge 12 in completing Challenge 13.
------------------------------------------------------------------------------------------------ */

const sortSchedule = (arr) =>
{
  // Solution code here...
};

module.exports = {
  upper,
  lower,
  updateAnimal,
  sortNames,
  sortNumbers,
  sortBackwards,
  alphabetize,
  sortByPrice,
  alphabetizeBetter,
  sortByLength,
  sortNumbersByLength,
  Person,
  people,
  sortPeople,
  sortPeopleBetter,
  Meeting,
  meetings,
  sortMeetingsByDay,
  sortSchedule
};
