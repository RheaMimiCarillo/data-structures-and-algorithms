'use strict';

const {
  addOne,
  addExclamation,
  allUpperCase,
  greeting,
  speaker,
  addValues,
  addNumbers,
  createList,
  fizzbuzz
} = require('../src/for-each.js');

/* ------------------------------------------------------------------------------------------------
TESTS

Run your tests from the console: npm test for-each.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () =>
{
  test('It should return an array with 1 added to each value of the original array', () =>
  {
    expect(addOne([ 1, 2, 3, 4, 5 ])).toStrictEqual([ 2, 3, 4, 5, 6 ]);
  });
});

describe('Testing challenge 2', () =>
{
  test('It should return an array with an exclamation point added to each value of the original array', () =>
  {
    expect(addExclamation([ 'hi', 'how', 'are', 'you' ])).toStrictEqual([ 'hi!', 'how!', 'are!', 'you!' ]);
  });
});

describe('Testing challenge 3', () =>
{
  test('It should return an array of uppercase strings', () =>
  {
    expect(allUpperCase([ 'hi', 'how', 'are', 'you' ])).toStrictEqual([ 'HI', 'HOW', 'ARE', 'YOU' ]);
  });
});

describe('Testing challenge 4', () =>
{
  test('It should provide an array of strings, that get uppercased, and a "!" at the end', () =>
  {
    expect(speaker([ 'hello', '301', 'students' ], greeting)).toStrictEqual([ 'HELLO!', '301!', 'STUDENTS!' ]);
  });
});

describe('Testing challenge 5', () =>
{
  test('It should add the number 8 to the array five times', () =>
  {
    expect(addNumbers(8, [], 5, addValues)).toStrictEqual([ 8, 8, 8, 8, 8 ]);
    expect(addNumbers(8, [], 5, addValues).length).toStrictEqual(5);
  });
});

describe('Testing challenge 6', () =>
{
  const inventory = [ { name: 'apples', available: true }, { name: 'pears', available: true }, { name: 'oranges', available: false }, { name: 'bananas', available: true }, { name: 'blueberries', available: false } ];

  test('It should only add the available items to the list', () =>
  {
    expect(createList(inventory)).toStrictEqual([ 'apples', 'pears', 'bananas' ]);
    expect(createList(inventory).length).toStrictEqual(3);
  });
});

describe('Testing challenge 7', () =>
{
  const inputs = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

  test('It should print out messages or numbers', () =>
  {
    expect(fizzbuzz(inputs)).toStrictEqual([ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16 ]);
    expect(fizzbuzz(inputs).length).toStrictEqual(16);
  });
});
