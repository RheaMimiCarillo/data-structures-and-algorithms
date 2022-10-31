'use strict';

const HashTable = require('../HashTable');

describe('Testing the Hash Table class', () =>
{

  // .skip literally just skips this test when running a test
  test('Setting a key/value to your hashtable results in the value being in the data structure', () =>
  {
    let testHashTable = new HashTable(1024);

    let testData = [ 'Cat', 'Felix' ];

    testHashTable.set(testData[ 0 ], testData[ 1 ]);

    expect(testHashTable.has('Cat')).toEqual(true);
  });
  test('Retrieving based on a key returns the value stored', () =>
  {
    let testHashTable = new HashTable(1024);

    let testData = [ 'Cat', 'Felix' ];

    // expected get result:  { Cat: 'Felix' }
    let expectedResult = { [ testData[ 0 ] ]: testData[ 1 ] };
    // console.log('expected get result: ', expectedResult);

    testHashTable.set(testData[ 0 ], testData[ 1 ]);

    let result = testHashTable.get('Cat');
    //console.log('get results: ', result);

    expect(result[ 0 ]).toEqual(expectedResult);
  });
  test('Successfully returns null for a key that does not exist in the hashtable', () =>
  {
    let testHashTable = new HashTable(1024);

    let testData = [ 'Cat', 'Felix' ];

    // { Cat: 'Felix' }
    testHashTable.set(testData[ 0 ], testData[ 1 ]);

    let result = testHashTable.has('Cat');
    // console.log('has("Cat") results: ', result);

    expect(result).toEqual(true);
  });
  test('Successfully returns a list of all unique keys that exist in the hashtable', () =>
  {
    let testHashTable = new HashTable(1024);

    const testCat1 = { 'Cat': 'Felix' };

    const testCat2 = { 'Cat': 'Dot' };

    const testLizard = { 'Bearded Dragon': 'Sock' };

    // { Cat: 'Felix' }
    testHashTable.set(Object.keys(testCat1)[ 0 ], testCat1[ Object.keys(testCat1)[ 0 ] ]);

    // { Cat: 'Dot' }
    testHashTable.set(Object.keys(testCat2)[ 0 ], testCat2[ Object.keys(testCat2)[ 0 ] ]);

    // {Bearded Dragon: 'Sock'}
    testHashTable.set(Object.keys(testLizard)[ 0 ], testLizard[ Object.keys(testLizard)[ 0 ] ]);

    // console.log('testLizard: ', Object.keys(testLizard)[ 0 ], testLizard[ Object.keys(testLizard)[ 0 ] ]);

    // [ 'Bearded Dragon', 'Cat']
    let results = testHashTable.keys();
    // console.log('.keys() results: ', results);

    expect(results).toEqual([ 'Bearded Dragon', 'Cat' ]);
  });
  test('Successfully handle a collision within the hashtable', () =>
  {
    let testHashTable = new HashTable(1024);

    const testCat1 = { 'Cat': 'Felix' };

    const testCat2 = { 'Cat': 'Dot' };

    // { Cat: 'Felix' }
    testHashTable.set(Object.keys(testCat1)[ 0 ], testCat1[ Object.keys(testCat1)[ 0 ] ]);

    // { Cat: 'Dot' }
    testHashTable.set(Object.keys(testCat2)[ 0 ], testCat2[ Object.keys(testCat2)[ 0 ] ]);

    // console.log('testCat1 and value: ', Object.keys(testCat1)[ 0 ], testCat1[ Object.keys(testCat1)[ 0 ] ]);

    // [ { Cat: 'Felix' }, { Cat: 'Dot' } ]
    let result = testHashTable.get('Cat');
    //console.log('has("Cat") results: ', result);

    // { Cat: 'Dot' } === { 'Cat': 'Dot' }
    expect(result[ 1 ]).toBeTruthy();
  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () =>
  {
    let testHashTable = new HashTable(1024);

    const testCat1 = { 'Cat': 'Felix' };

    const testCat2 = { 'Cat': 'Dot' };

    // { Cat: 'Felix' }
    testHashTable.set(Object.keys(testCat1)[ 0 ], testCat1[ Object.keys(testCat1)[ 0 ] ]);

    // { Cat: 'Dot' }
    testHashTable.set(Object.keys(testCat2)[ 0 ], testCat2[ Object.keys(testCat2)[ 0 ] ]);

    // console.log('testCat1 and value: ', Object.keys(testCat1)[ 0 ], testCat1[ Object.keys(testCat1)[ 0 ] ]);

    // [ { Cat: 'Felix' }, { Cat: 'Dot' } ]
    let result = testHashTable.get('Cat');
    //console.log('has("Cat") results: ', result);

    // { Cat: 'Dot' } === { 'Cat': 'Dot' }
    expect(result[ 1 ]).toEqual(testCat2);
  });
  test('Successfully hash a key to an in-range value', () =>
  {
    const size = 1024;
    let testHashTable = new HashTable(size);

    const testKey = testHashTable.hash('Before there was time, before there was anything, there was nothing, and before there was nothing... there were monsters.');

    expect(testKey).toBeGreaterThanOrEqual(0);
    expect(testKey).toBeLessThan(size);
  });
});
