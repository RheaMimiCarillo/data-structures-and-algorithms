'use strict';
const HashTable = require('../HashTable');

describe('Testing repeatedWord() method', () =>
{
  test('Should return "No repeated words found" for empty book', () =>
  {
    let testHashTable = new HashTable(1024);

    const noBook = '';

    // 'No repeated words found'
    let result = testHashTable.repeatedWord(noBook);

    expect(result).toEqual('No repeated words found');
  });
  test('Should return "No repeated words found" for book without words', () =>
  {
    let testHashTable = new HashTable(1024);

    const uniqueBook = 'It was a queer, sultry summer';

    // 'No repeated words found'
    let result = testHashTable.repeatedWord(uniqueBook);

    expect(result).toEqual('No repeated words found');
  });
  test('Should return first instance of a repeated word', () =>
  {
    let testHashTable = new HashTable(1024);

    const book = 'Before there was time, before there was anything, there was nothing, and before there was nothing... there were monsters.';

    // 'there'
    let result = testHashTable.repeatedWord(book);

    expect(result).toEqual('there');
  });
});
