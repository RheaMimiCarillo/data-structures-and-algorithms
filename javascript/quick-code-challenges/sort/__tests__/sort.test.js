'use strict';

const {
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
} = require('../src/sort');

/* ------------------------------------------------------------------------------------------------
TESTS

Run your tests from the console: npm test sort.test.js

------------------------------------------------------------------------------------------------ */


describe('Testing challenge 1', () =>
{
  test('It should return an array of uppercase animal names', () =>
  {
    const arr = [ 'BeAr', 'lIon' ];
    expect(updateAnimal(arr, upper)[ 0 ]).toStrictEqual('BEAR');
    expect(updateAnimal(arr, upper)[ 1 ]).toStrictEqual('LION');
  });
  test('It should return an array of lowercase animal names', () =>
  {
    const arr = [ 'BeAr', 'lIon' ];
    expect(updateAnimal(arr, lower)[ 0 ]).toStrictEqual('bear');
    expect(updateAnimal(arr, lower)[ 1 ]).toStrictEqual('lion');
  });
});

describe('Testing challenge 2', () =>
{
  test('It should return an array of names sorted alphabetically', () =>
  {
    expect(sortNames([ 'able', 'Bob' ])[ 0 ]).toStrictEqual('Bob');
  });
});

describe('Testing challenge 3', () =>
{
  test('It should sort low-to-high the numbers in an array', () =>
  {
    expect(sortNumbers([ 8, 3, 2, 9, 12, 1, 115 ])).toStrictEqual([ 1, 2, 3, 8, 9, 12, 115 ]);
  });
});

describe('Testing challenge 4', () =>
{
  test('It should sort high-to-low the numbers in an array', () =>
  {
    const nums = [ 3, 4, 5, 6, 7 ];
    expect(sortBackwards(nums)).toStrictEqual([ 7, 6, 5, 4, 3 ]);
    expect(sortBackwards([ 3, 2, 1 ])).toStrictEqual([ 3, 2, 1 ]);
    expect(sortBackwards([ 12, 20, 3 ])).toStrictEqual([ 20, 12, 3 ]);
    expect(sortBackwards([])).toStrictEqual([]);
    expect(sortBackwards([ 1 ])).toStrictEqual([ 1 ]);
  });
});

describe('Testing challenge 5', () =>
{
  test('It should sort strings alphabetically', () =>
  {
    expect(alphabetize([ 'alphabet', 'Zebra', 'Alphabet', 'carrot' ])).toStrictEqual([ 'Alphabet', 'Zebra', 'alphabet', 'carrot' ]);
    expect(alphabetize([ 'alphabet', 'Alphabet', 'carrot' ])).toStrictEqual([ 'Alphabet', 'alphabet', 'carrot' ]);
    expect(alphabetize([])).toStrictEqual([]);
  });
});

describe('Testing challenge 6', () =>
{
  test('It should sort items by their price', () =>
  {
    expect(sortByPrice([
      { name: 'Sweatshirt', price: 45 },
      { name: 'Bookmark', price: 2.50 },
      { name: 'Tote bag', price: 15 }
    ])).toStrictEqual([
      { name: 'Bookmark', price: 2.50 },
      { name: 'Tote bag', price: 15 },
      { name: 'Sweatshirt', price: 45 },
    ]);
    expect(sortByPrice([ { price: 12 }, { price: 10 } ])).toStrictEqual([ { price: 10 }, { price: 12 } ]);
    expect(sortByPrice([])).toStrictEqual([]);
  });
});

describe('Testing challenge 7', () =>
{
  test('It should alphabetize without regard to capitalization', () =>
  {
    expect(alphabetizeBetter([ 'Alice', 'apple', 'alert', 'Average' ])).toStrictEqual([ 'alert', 'Alice', 'apple', 'Average' ]);
    const ans = alphabetizeBetter([ 'alphabet', 'Zebra', 'Alphabet', 'carrot' ]);
    expect(ans.slice(0, 2)).toEqual(expect.arrayContaining([ 'Alphabet', 'alphabet' ]));
    expect(ans.slice(2)).toStrictEqual([ 'carrot', 'Zebra' ]);
  });
});

describe('Testing challenge 8', () =>
{
  test('It should sort strings by length', () =>
  {
    const ans = sortByLength([ 'alphabet', 'Zebra', 'Alphabet', 'carrot' ]);
    expect(ans.slice(0, 2)).toStrictEqual([ 'Zebra', 'carrot' ]);
    expect(ans.slice(2, 4)).toEqual(expect.arrayContaining([ 'Alphabet', 'alphabet' ]));
    expect(sortByLength([ 'a', 'bc', '' ])).toStrictEqual([ '', 'a', 'bc' ]);
    expect(sortByLength([ 'a' ])).toStrictEqual([ 'a' ]);
    expect(sortByLength([])).toStrictEqual([]);
  });
});

describe('Testing challenge 9', () =>
{
  test('It should sort numbers by their length', () =>
  {
    expect(sortNumbersByLength([ 10, 2.8, 1, -47.75 ])).toStrictEqual([ 1, 10, 2.8, -47.75 ]);
    expect(sortNumbersByLength([ 100, 2.82, 1, -47.75 ])).toStrictEqual([ 1, 100, 2.82, -47.75 ]);
    expect(sortNumbersByLength([ 1, 2, 3 ])).toEqual(expect.arrayContaining([ 1, 2, 3 ]));
  });
});

describe('Testing challenge 10', () =>
{
  test('It should sort people by their last names', () =>
  {
    expect(sortPeople(people)).toStrictEqual([
      new Person('Casey', 'Codefellow', 38),
      new Person('Stan', 'Seattle', 67),
      new Person('Wes', 'Washington', 25),
    ]);
    expect(sortPeople([ { lastName: 'banana' }, { lastName: 'apple' } ]))
      .toStrictEqual([ { lastName: 'apple' }, { lastName: 'banana' } ]);
  });
});

describe('Testing challenge 11', () =>
{
  test('It should sort people with more strict ordering', () =>
  {
    const family = [
      new Person('Casey', 'Codefellows', 55),
      new Person('Casey', 'Codefellows', 37),
      new Person('Charlie', 'Codefellows', 21),
      new Person('Charles', 'Codefellows', 29),
      new Person('Carol', 'Codefellow', 88),
    ];
    expect(sortPeopleBetter(family)).toStrictEqual([
      new Person('Carol', 'Codefellow', 88),
      new Person('Casey', 'Codefellows', 37),
      new Person('Casey', 'Codefellows', 55),
      new Person('Charles', 'Codefellows', 29),
      new Person('Charlie', 'Codefellows', 21),
    ]);
    expect(sortPeopleBetter([ { firstName: 'andrew', lastName: 'apple' }, { firstName: 'andre', lastName: 'apple' } ]))
      .toStrictEqual([ { firstName: 'andre', lastName: 'apple' }, { firstName: 'andrew', lastName: 'apple' } ]);
  });
});

describe('Testing challenge 12', () =>
{
  test('It should sort meetings by the day on which they happen', () =>
  {
    const sortedMeetings = sortMeetingsByDay(meetings);
    expect(sortedMeetings.slice(0, 2)).toEqual(expect.arrayContaining([ new Meeting('Monday', '0900', '0945'), new Meeting('Monday', '0900', '1000') ]));
    expect(sortedMeetings[ 2 ]).toStrictEqual(new Meeting('Tuesday', '1145', '1315'));
    expect(sortedMeetings.slice(3, 5)).toEqual(expect.arrayContaining([ new Meeting('Wednesday', '0930', '1000'), new Meeting('Wednesday', '1300', '1500') ]));
    expect(sortedMeetings[ 5 ]).toStrictEqual(new Meeting('Friday', '1200', '1345'));
  });
});

describe('Testing challenge 13', () =>
{
  test('It should sort meetings by when they happen', () =>
  {
    expect(sortSchedule(meetings)).toStrictEqual([
      new Meeting('Monday', '0900', '0945'),
      new Meeting('Monday', '0900', '1000'),
      new Meeting('Tuesday', '1145', '1315'),
      new Meeting('Wednesday', '0930', '1000'),
      new Meeting('Wednesday', '1300', '1500'),
      new Meeting('Friday', '1200', '1345'),
    ]);
  });
});
