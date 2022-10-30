'use strict';

const HashTable = require('../HashTable');
const LinkedList = require('../LinkedList');

describe('Testing the Hash Table class', () =>
{

  // .skip literally just skips this test when running a test
  test('Setting a key/value to your hashtable results in the value being in the data structure', () =>
  {
    let testHashTable = new HashTable(1024);

    let testData = [ 'Cat', 'Felix' ];

    // key `Cat` is bucket #808
    let expectedBucket = testHashTable.hash(testData[ 0 ]);

    // console.log('expected Bucket: ', expectedBucket);
    testHashTable.set(testData[ 0 ], testData[ 1 ]);

    //console.log('testHashTable[808]: ', testHashTable[ expectedBucket ]);

    expect(testHashTable.table[ expectedBucket ]).toBeInstanceOf(LinkedList);
  });
  test('Retrieving based on a key returns the value stored', () =>
  {
    let testHashTable = new HashTable(1024);

    let testData = [ 'Cat', 'Felix' ];
    //let expectedBucket = testHashTable.hash('Cat');

    // console.log('expected Bucket: ', expectedBucket);
    testHashTable.set(testData[ 0 ], testData[ 1 ]);

    let result = testHashTable.get('Cat');
    console.log('result: ', result);
  });
  test.skip('Successfully returns null for a key that does not exist in the hashtable', () =>
  {

  });
  test.skip('Successfully returns a list of all unique keys that exist in the hashtable', () =>
  {

  });
  test.skip('Successfully handle a collision within the hashtable', () =>
  {

  });
  test.skip('Successfully retrieve a value from a bucket within the hashtable that has a collision', () =>
  {

  });
  test.skip('Successfully hash a key to an in-range value', () =>
  {

  });
});
