'use strict';


/* ------------------------------------------------------------------------------------------------

CHALLENGE 1 - Review

Write a function named raisedToTheThird that takes in an array of numbers and returns a new array of each of those numbers raised to the 3rd power (hint: look up Math.pow()). Use forEach to solve this problem.

------------------------------------------------------------------------------------------------ */

const raisedToTheThird = (arr) =>
{
  let thirdPowArr = [];

  // for each value from input arr[]
  //  raise each value to the power of 3
  //  push() the new value to thirdPowArr[]
  arr.forEach(num => thirdPowArr.push(Math.pow(num, 3)));

  return thirdPowArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named addOne that, given an array of numbers, uses map to return a new array with each value simply incremented by 1.
------------------------------------------------------------------------------------------------ */

const addOne = (arr) =>
{
  return arr.map(num => num + 1);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named addQuestion that, given an array of strings, uses map to return a new array containing each string followed by a question mark character.
------------------------------------------------------------------------------------------------ */

const addQuestion = (arr) =>
{
  return arr.map(string => string + '?');
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named forLoopTwoToThe that, given an array of integers as input, iterates over the array and returns a new array. The returned array should contain the result of raising 2 to the power of the original input element.

You may choose to complete this challenge using a for loop, for...in syntax, or for...of syntax.

For example, twoToThe([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
------------------------------------------------------------------------------------------------ */

const forLoopTwoToThe = (arr) =>
{
  let twodleLoo = [];

  for (let i = 0; i < arr.length; i++)
  {
    twodleLoo.push(Math.pow(2, arr[ i ]));
  }
  return twodleLoo;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named forEachTwoToThe that produces the same output as your forLoopTwoToThe function from challenge 4, but uses forEach instead of a for loop.
------------------------------------------------------------------------------------------------ */

const forEachTwoToThe = (arr) =>
{
  let twodleLooTwo = [];

  arr.forEach(num => twodleLooTwo.push(Math.pow(2, num)));

  return twodleLooTwo;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named mapTwoToThe that produces the same output as your forLoopTwoToThe function from challenge 4 and your forEachTwoToThe function from challenge 5, but uses map instead of a for loop or forEach.
------------------------------------------------------------------------------------------------ */

const mapTwoToThe = (arr) =>
{
  return arr.map(num => Math.pow(2, num));
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named charCode that, given an array of letters as an input, uses map to return a new array where each element is the result of the `charCodeAt` method on the original array element.

Read the MDN documentation on String.charCodeAt() if necessary.

For example: charCode(['h','i']) returns [104, 105].
------------------------------------------------------------------------------------------------ */

const charCode = (arr) =>
{
  return arr.map(char => char.charCodeAt(0));
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function that, given an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.

If any element in the array is not a number, the resulting array should have the string "N/A" in its place.

For example: evenOdd([1,2,3]) returns ['odd','even','odd'].
------------------------------------------------------------------------------------------------ */

const evenOdd = (arr) =>
{
  let evenOddArr = arr.map(value =>
  {
    if (typeof value === 'number')
    {
      // ternary that evaluates whether the current `value`'s remainder is truthy or falsy (0 or 1) and returns the corresponding string
      return value % 2 ? 'odd' : 'even';
    }
    else
    {
      return 'N/A';
    }
  });

  return evenOddArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Use the snorlaxAbilities data, below, for this challenge.

Write a function named extractAbilities that, given the array of abilities, uses map to create an array containing only the ability name.

Note: Because this function is expecting the array of abilities, it will be invoked as:
extractAbilities(snorlaxAbilities.abilities)
------------------------------------------------------------------------------------------------ */

const snorlaxAbilities = {
  abilities: [
    {
      slot: 3,
      is_hidden: true,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/82/',
        name: 'gluttony',
      },
    },
    {
      slot: 2,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/56/',
        name: 'cute charm',
      },
    },
    {
      slot: 1,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/17/',
        name: 'immunity',
      },
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const extractAbilities = (arr) =>
{
  return arr.map(ability => ability.ability.name);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Use the snorlaxStats data, below, for this challenge.

Write a function named extractStats that, given an array of stats, uses map to return an array of objects containing the stat name and the total.

The total should be the sum of the effort and the baseStat.

Here is an example of a single array element: { name: 'speed', total: 35 }
------------------------------------------------------------------------------------------------ */

const snorlaxStats = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const extractStats = (arr) =>
{
  return arr.map(stat => (
    {
      name: stat.stat.name,
      total: stat.effort + stat.baseStat
    }
  ));
};


module.exports = {
  raisedToTheThird,
  addOne,
  addQuestion,
  forLoopTwoToThe,
  forEachTwoToThe,
  mapTwoToThe,
  charCode,
  evenOdd,
  snorlaxAbilities,
  extractAbilities,
  snorlaxStats,
  extractStats
};
