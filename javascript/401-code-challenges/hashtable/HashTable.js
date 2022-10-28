'use strict';

const LinkedList = require('./LinkedList');

class HashTable
{
  constructor(size)
  {
    this.size = size;
    this.table = new Array(size);
  }

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

  }

  /**
   * returns the value stored in the bucket associated with the key parameter.
   * @param {String} key
   * @return {any}, or {null} if no results
   */
  get(key)
  {

  }

  /**
   * Returns a Boolean, indication if the kye exists in the table.
   * @param (String) key
   * @return {Boolean}
   * does a key already exist in the hash table
   */
  has(key)
  {

  }

  /**
   * Returns a collection of Keys
   * @return {Array}
   * What are all of the keys in the hash table?
   */
  keys()
  {

  }
}

module.exports = HashTable;
