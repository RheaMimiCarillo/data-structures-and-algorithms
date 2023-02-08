'use strict';

const {
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
} = require('../src/map');

/* ------------------------------------------------------------------------------------------------
TESTS

Run your tests from the console: npm test map

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () =>
{
  test('It should return a new array of numbers raised to the thrid power', () =>
  {
    expect(raisedToTheThird([ 2, 4, 5, -7, 0 ])).toStrictEqual([ 8, 64, 125, -343, 0 ]);
  });
});

describe('Testing challenge 2', () =>
{
  test('It should add one to all the numbers in the array', () =>
  {
    expect(addOne([ 2, 3, 5, 11 ])).toStrictEqual([ 3, 4, 6, 12 ]);
  });
});

describe('Testing challenge 3', () =>
{
  test('It should add a question mark to the end of each string', () =>
  {
    expect(addQuestion([ 'hello', '301', 'students' ])).toStrictEqual([ 'hello?', '301?', 'students?' ]);
  });
});

describe('Testing challenge 4', () =>
{
  test('It should return two raised to the power of the integer', () =>
  {
    expect(forLoopTwoToThe([ 0, 4, 5 ])).toStrictEqual([ 1, 16, 32 ]);
    expect(forLoopTwoToThe([ 0, 4, 5 ]).length).toStrictEqual(3);
  });

  test('It should return decimals if the integer is negative', () =>
  {
    expect(forLoopTwoToThe([ -1, -2, -3 ])).toStrictEqual([ 0.5, 0.25, 0.125 ]);
  });
});

describe('Testing challenge 5', () =>
{
  test('It should return two raised to the power of the integer', () =>
  {
    expect(forEachTwoToThe([ 0, 4, 5 ])).toStrictEqual([ 1, 16, 32 ]);
    expect(forEachTwoToThe([ 0, 4, 5 ]).length).toStrictEqual(3);
  });

  test('It should return decimals if the integer is negative', () =>
  {
    expect(forEachTwoToThe([ -1, -2, -3 ])).toStrictEqual([ 0.5, 0.25, 0.125 ]);
  });
});

describe('Testing challenge 6', () =>
{
  test('It should return two raised to the power of the integer', () =>
  {
    expect(mapTwoToThe([ 0, 4, 5 ])).toStrictEqual([ 1, 16, 32 ]);
    expect(mapTwoToThe([ 0, 4, 5 ]).length).toStrictEqual(3);
  });

  test('It should return decimals if the integer is negative', () =>
  {
    expect(mapTwoToThe([ -1, -2, -3 ])).toStrictEqual([ 0.5, 0.25, 0.125 ]);
  });
});

describe('Testing challenge 7', () =>
{
  test('It should return an array containing the character code for each letter', () =>
  {
    expect(charCode([ 'C', 'o', 'd', 'e', '3', '0', '1' ])).toStrictEqual([ 67, 111, 100, 101, 51, 48, 49 ]);
    expect(charCode([ 'C', 'o', 'd', 'e', '3', '0', '1' ]).length).toStrictEqual(7);
  });
});

describe('Testing challenge 8', () =>
{
  test('It should return an array containing the keys from an object', () =>
  {
    expect(evenOdd([ 5, 8, 2, 6, 9, 13, 542, 541 ])).toStrictEqual([ 'odd', 'even', 'even', 'even', 'odd', 'odd', 'even', 'odd' ]);
    expect(evenOdd([ 5, 8, 2, 6, 9, 13, 542, 541 ]).length).toStrictEqual(8);
  });

  test('It should work with all odd numbers', () =>
  {
    expect(evenOdd([ 1, 3, 5, 7, 9 ])).toStrictEqual([ 'odd', 'odd', 'odd', 'odd', 'odd' ]);
    expect(evenOdd([ 1, 3, 5, 7, 9 ]).length).toStrictEqual(5);
  });

  test('It should work with all even numbers', () =>
  {
    expect(evenOdd([ 2, 4, 6, 8, 10 ])).toStrictEqual([ 'even', 'even', 'even', 'even', 'even' ]);
    expect(evenOdd([ 2, 4, 6, 8, 10 ]).length).toStrictEqual(5);
  });

  test('It should return the string "N/A" if a non-number is included in the array', () =>
  {
    expect(evenOdd([ 5, 8, 2, 'hi' ])).toStrictEqual([ 'odd', 'even', 'even', 'N/A' ]);
    expect(evenOdd([ 5, 8, 2, 'hi' ]).length).toStrictEqual(4);
  });
});

describe('Testing challenge 9', () =>
{
  test('It should return an array containing only the ability names', () =>
  {
    expect(extractAbilities(snorlaxAbilities.abilities)).toStrictEqual([ 'gluttony', 'cute charm', 'immunity' ]);
    expect(extractAbilities(snorlaxAbilities.abilities).length).toStrictEqual(3);
  });
});

describe('Testing challenge 10', () =>
{
  test('It should return an array containing objects with name and total values', () =>
  {
    expect(extractStats(snorlaxStats.stats)).toStrictEqual([
      { name: 'speed', total: 35, },
      { name: 'special-defense', total: 112, },
      { name: 'special-attack', total: 74, },
    ]);
    expect(extractStats(snorlaxStats.stats).length).toStrictEqual(3);
  });
});
