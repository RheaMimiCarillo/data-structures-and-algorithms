'use strict';

const insertionSort = require('../insertion-sort');

describe('Testing insertion sort', () =>
{
  it('Should return an array of sorted integers in ascending order', () =>
  {
    let testArr = [ 8, 4, 23, 42, 16, 15 ];
    let results = insertionSort(testArr);
    console.log('results: ', results);
    expect(results).toEqual([ 4, 8, 15, 16, 23, 42 ]);
  });
});
