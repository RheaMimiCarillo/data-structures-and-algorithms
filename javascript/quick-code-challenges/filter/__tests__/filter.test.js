'use strict';

const {
  addTwo,
  typeNum,
  containsAnd,
  oddValues,
  notInFirstArray,
  snorlaxData,
  getBaseStatGreaterThan,
  getStatName,
  characters,
  getCharactersWithoutChildren,
  evenOddNumericValues
} = require('../src/filter');

/* ------------------------------------------------------------------------------------------------
TESTS

Run your tests from the console: npm test filter.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should add two to every value', () => {
    expect(addTwo([1, 2, 4])).toStrictEqual([3, 4, 6]);
  });
});

describe('Testing challenge 2', () => {
  test('It should return an array containing only numbers', () => {
    expect(typeNum([1, 'bob', 3])).toStrictEqual([1, 3]);
    expect(typeNum([1, 'bob', 3]).length).toStrictEqual(2);
    expect(typeNum(['banana', 'apples', 'cherry'])).toStrictEqual([]);
    expect(typeNum([2, 3, 5])).toStrictEqual([2, 3, 5]);
  });
});

describe('Testing challenge 3', () => {
  test('It should return an array of strings containing the word and', () => {
    expect(containsAnd(['panda', 'ran', 'and'])).toStrictEqual(['panda', 'and']);
    expect(containsAnd(['banana','bob','xyz'])).toStrictEqual([]);
    expect(containsAnd([])).toStrictEqual([]);
    expect(containsAnd(['and', 'sand'])).toStrictEqual(['and', 'sand']);
  });
});

describe('Testing challenge 4', () => {
  test('It should return an array containing only odd integers', () => {
    expect(oddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([1, 3, 5, 7, 9]);
    expect(oddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toStrictEqual(5);
    expect(oddValues([2,3,4,179])).toStrictEqual([3,179]);
    expect(oddValues([2,4,6,8])).toStrictEqual([]);
  });
});

describe('Testing challenge 5', () => {
  const firstNums = [1, 2, 3];
  const secondNums = [1, 2, 3, 4];

  const firstStrings = ['Demi', 'Gregor', 'Hound'];
  const secondStrings = ['Gary', 'Charlotte', 'Demi', 'Gregor', 'Hound'];

  test('It should return an array that includes any elements not in the first array', () => {
    expect(notInFirstArray(firstNums, secondNums)).toStrictEqual([4]);
    expect(notInFirstArray(firstNums, secondNums).length).toStrictEqual(1);
  });

  test('It should also work with an array of strings', () => {
    expect(notInFirstArray(firstStrings, secondStrings)).toStrictEqual(['Gary', 'Charlotte']);
    expect(notInFirstArray(firstStrings, secondStrings).length).toStrictEqual(2);
  });

  test('It should work with empty arrays', () => {
    expect(notInFirstArray([], [])).toStrictEqual([]);
    expect(notInFirstArray([], [1,2,3,4,5])).toStrictEqual([1,2,3,4,5]);
    expect(notInFirstArray([1,2,3,4,5], [])).toStrictEqual([]);
  });
});

describe('Testing challenge 6', () => {
  test('It should return an array containing the stats that are greater than the input', () => {
    expect(getBaseStatGreaterThan(snorlaxData.stats, 75)).toStrictEqual([ { stat: { url: 'https://pokeapi.co/api/v2/stat/5/', name: 'special-defense' }, effort: 2, baseStat: 110 } ]);
    expect(getBaseStatGreaterThan(snorlaxData.stats, 75).length).toStrictEqual(1);
    expect(getBaseStatGreaterThan(snorlaxData.stats, 110)).toStrictEqual([]);
  });
  test('It should work for non-Snorlax data', () => {
    expect(getBaseStatGreaterThan([{baseStat: 10}, {baseStat: -85}, {baseStat: 0}, {baseStat: -50}], -60)).toStrictEqual([{baseStat: 10}, {baseStat: 0}, {baseStat: -50}]);
  });
});

describe('Testing challenge 7', () => {
  test('It should return the name of the stats that exceed that maximum', () => {
    expect(getStatName(snorlaxData.stats, 50)).toStrictEqual([ 'special-defense', 'special-attack' ]);
    expect(getStatName(snorlaxData.stats, 50).length).toStrictEqual(2);
  });

  test('It should return the name of the stats that exceed that maximum', () => {
    expect(getStatName(snorlaxData.stats, 120)).toStrictEqual([]);
    expect(getStatName(snorlaxData.stats, 120).length).toStrictEqual(0);
  });

  test('It should work for non-snorlax data', () => {
    expect(getStatName([
      {baseStat: 10, stat: {name: 'one'}},
      {baseStat: -85, stat: {name: 'two'}},
      {baseStat: 0, stat: {name: 'three'}},
      {baseStat: -50, stat: {name: 'four'}}
    ], -60)).toStrictEqual(['one', 'three', 'four']);
  });
});

describe('Testing challenge 8', () => {
  test('It should return an array containing characters who do not have children', () => {
    expect(getCharactersWithoutChildren(characters)).toStrictEqual([ { name: 'Sansa', spouse: 'Tyrion', house: 'Stark' }, { name: 'Jon', spouse: null, house: 'Snow' } ]);
    expect(getCharactersWithoutChildren(characters).length).toStrictEqual(2);
  });
});

describe('Testing challenge 9', () => {
  test('It should remove non-integers and return "even" or "odd', () => {
    expect(evenOddNumericValues(['Gregor', 2, 4, 1])).toStrictEqual(['even', 'even', 'odd']);
    expect(evenOddNumericValues(['Gregor', 2, 4, 1]).length).toStrictEqual(3);
    expect(evenOddNumericValues(['a', 'b', 'c'])).toStrictEqual([]);
  });
  test('It should not accept strings that look like numbers', () => {
    expect(evenOddNumericValues(['1', 2, 3, '4', 5,'6'])).toStrictEqual(['even', 'odd', 'odd']);
  });
});
