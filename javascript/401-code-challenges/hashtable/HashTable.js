'use strict';

const LinkedList = require('./LinkedList');

class HashTable
{
  constructor(size)
  {
    this.size = size;
    this.table = new Array(size);
  }

  /* visualization of hash table:

  const thisTable = [
    { bucket 0: { key: value } ->  { key2: value2 } },
    { bucket 1: { key: value } ->  { key2: value2 } },
    { bucket 2: { key: value } ->  { key2: value2 } }
  ];



  */

  /**
   * Return a hash value for the provided key.
   * @param {String} key
   */
  hash(key)
  {
    let charSum = 0;
    for (let char in key)
    {
      // take sum of character codes in `key
      charSum += key.charCodeAt(char);
    }
    // return the charSum, multiplied by a large prime number (599)
    // then dividing by the number of buckets in this table
    // and finally returning the remainder
    // the idea is that the remainder will never be more than the amount of buckets/size in the table

    // returns the index/bucket that this `key` will be placed in
    /* Example:
      the key: 'Cat' will determine which bucket this pair goes in
      Key = "Cat"
      Value = "Josie"

      67 + 97 + 116 = 280

      280 * 599 = 69648

      69648 % 1024 = 16

      Key gets placed in index of 16.

    */
    return (charSum * 599) % this.size;
  }

  /**
   * places a value into our Hash Table by hashing our key, and setting our value into that Bucket of the table.
   * @param {String} key
   * @param {Any} value
   * should not store a duplicate key:value pair if already in table (so check)
   */
  set(key, value)
  {
    // .hash() the provided key to get the index of the bucket to .set() to
    // if the bucket is null, make it into a LinkedList()
    // and then make a new Node to add to the end of the LinkedList()

    // get the index of the bucket to add to
    let indexOfBucket = this.hash(key);

    let item = { [ key ]: value };
    //console.log('key in set: ', key);
    // console.log('value in set: ', value);
    // console.log('item in set: ', item);
    // console.log('set to bucket: ', indexOfBucket);

    // console.log('typeof [key]', typeof(item.key));

    if (this.table[ indexOfBucket ])
    {
      //console.log('found something in bucket (hopefully a LinkedList)');
      this.table[ indexOfBucket ].add(item);
    }
    else
    {
      //console.log('no LinkedList found in bucket | creating new LinkedList');
      this.table[ indexOfBucket ] = new LinkedList();
      this.table[ indexOfBucket ].add(item);
      //console.log(`bucket [${indexOfBucket}]: `, this.table[ indexOfBucket ]);
    }
  }

  /**
   * returns the value stored in the bucket associated with the key parameter.
   * @param {String} key
   * @return {any}, or {null} if no results
   */
  get(key)
  {
    // using `get` we know the name of the key we want to 'get'
    // hash the provided key (and use modulus to find the array-index/bucket containing that key)
    // then traverse the in that bucket/linked-list for any string that matches the 'key'
    // what to do if there are multiple things to store with same key?
    // and then with retrieval? should I return an array of results for duplicate keys?

    let indexOfBucket = this.hash(key);
    let result = null;

    // if the bucket isn't null, then it's a LinkedList
    if (this.table[ indexOfBucket ])
    {
      // wasn't sure how to get .find working without changing the LinkedList's methods
      //result = this.table[ indexOfBucket ].find(key);

      // get an array of the values in the bucket
      let pairs = this.table[ indexOfBucket ].values();

      // for each value pair in the bucket
      pairs.forEach(pair =>
      {
        //console.log('pair: ', pair);
        // if the pair's key is the same as the key we're looking for
        if (Object.keys(pair)[ 0 ] === key)
        {
          result = pair;
        }
      });
      //console.log('bucket found, result is: ', result);
    }
    return result;
  }

  /**
   * Returns a Boolean, indication if the key exists in the table.
   * @param (String) key
   * @return {Boolean}
   * does a key already exist in the hash table
   */
  has(key)
  {
    let indexOfBucket = this.hash(key);
    let isFound = false;

    if (this.table[ indexOfBucket ])
    {
      // resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

      // put all of the keys from this bucket into an array and check if that array .includes() the key we're looking for
      isFound = Object.keys(Object.assign({}, ...this.table[ indexOfBucket ].values())).includes(key);
      //console.log('was it found? ', isFound);
    }
    return isFound;
  }

  /**
   * Returns a collection of Keys
   * @return {Array}
   * What are all of the keys in the hash table?
   */
  keys()
  {
    // traverse the entire hashtable and return an array of all `keys` in the table
    // for buckets in this table
    // if bucket !null
    // return bucket.values()
    // by the end of it, we'll have an array with arrays of keys
  }
}

module.exports = HashTable;
