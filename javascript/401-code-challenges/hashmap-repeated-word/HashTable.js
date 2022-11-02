'use strict';

const LinkedList = require('./LinkedList');

class HashTable
{
  constructor(size)
  {
    this.size = size;
    this.table = new Array(size);

    /* visualization of hash table's array (size(3)):
    const thisTable = [
      bucket 0: { HEAD -> { key1: value2 } ->  { key2: value2 } -> null },
      bucket 1: { HEAD -> { key3: value3 } ->  { key4: value4 } -> null },
      bucket 2: { HEAD -> { key5: value5 } ->  { key6: value6 } -> null }
    ];
    */
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
    // NOTES:
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
    // NOTES:
    // .hash() the provided key to get the index of the bucket to .set() to
    // if the bucket is null, make it into a LinkedList()
    // and then make a new Node to add to the end of the LinkedList()

    // get the index of the bucket to add to
    let indexOfBucket = this.hash(key);

    let item = { [ key ]: value };

    if (this.table[ indexOfBucket ])
    {
      // check if the current bucket's LinkedList doesn't already has this exact key:value pair somewhere in it
      if (!this.table[ indexOfBucket ].values().includes(item))
      {
        // add the new item to the end of the LinkedList/bucket
        this.table[ indexOfBucket ].add(item);
      }
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
    // NOTES:
    // using `get` we know the name of the key we want to 'get'
    // hash the provided key (and use modulus to find the array-index/bucket containing that key)
    // then traverse the in that bucket/linked-list for any string that matches the 'key'
    // what to do if there are multiple things to store with same key?
    // and then with retrieval? should I return an array of results for duplicate keys?

    let indexOfBucket = this.hash(key);
    let results = [];

    // if the bucket isn't null, then it's a LinkedList
    if (this.table[ indexOfBucket ])
    {
      // wasn't sure how to get .find working without changing the LinkedList's methods
      //result = this.table[ indexOfBucket ].find(key);

      // get an array of the values in the bucket
      let pairs = this.table[ indexOfBucket ].values();

      // for each key:value pair in the bucket
      pairs.forEach(pair =>
      {
        // if the pair's key is the same as the key we're looking for
        //console.log('pair: ', pair);
        if (Object.keys(pair)[ 0 ] === key)
        {
          results.push(pair);
        }
      });
      //console.log('bucket found, result is: ', result);
      return results;
    }
    return null;
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

      /* order of events:
        1. `this.table[ indexOfBucket ]` is LinkedList
          - bucket 2: { HEAD -> { key5: value5 } ->  { key6: value6 } -> null }

        2. `...this.table[ indexOfBucket ].values()` is an array of values from the LinkedList
          - [{ key5: value5 }, { key6: value6 }]

        3. `with Object.assign()`, we declare a target to put values into (an empty object, in this case{}), and copy all of the key:value pairs from the array we made from the LinkedList into an the target object
          - {
              { key5: value5 },
              { key6: value6 }
            }

        4. then we use `Object.keys` to get an array of only `keys` (the values are stripped out)
            - [key5, key6]

        5.  then we use the `Array.includes()` method to see if the the array of keys has the key we're searching for
            - `true` or `false`
        6. assign the Boolean from .includes(key) to `isFound`

        it's a one-liner that does a whole lot and feels like of hack-y
      */
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
    // NOTES
    // traverse the entire hashtable and return an array of all `keys` in the table
    // for buckets in this table
    // if bucket !null
    // return bucket.values()
    // by the end of it, we'll have an array with arrays of keys

    // traverse this.table[]
    // if the current bucket isn't null, get all keys and try to push keys into an array

    // remove all duplicate entries from the array of keys
    // return the array

    let keysArr = [];

    this.table.forEach(bucket =>
    {
      // if the linkedlist in the bucket has at least one node with a value
      if (bucket.head.value)
      {
        // get all of the keys in the bucket
        let currentBucketKeys = Object.keys(Object.assign({}, ...bucket.values()));
        // console.log('unique values in current bucket: ', currentBucketKeys);

        keysArr.push(...currentBucketKeys);
      }
    });

    // Set() returns an array with only unique values
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    return [ ... new Set(keysArr) ];
  }
  /**
   * Returns the first instance of a repeated word from a book
   * @param (String) book
   * @return {string}
   * What are all of the keys in the hash table?
   */
  repeatedWord(book)
  {
    /* Strategy:
      - accept a book
      - split book into an array of words (without spaces)
      - start array traversal loop
        - at each iteration, look at current word -> strip most punctuation with regex -> make it lowercase
      - while looping, call .has() to see if the HashTable already has the current word, if it does, then return that word
        - otherwise, add the current word to the HashTable

    */

    /* Stretch Goals:

       - Modify your function to return a count of each of the words in the provided string
         Strategy: similar to above, except instead of looking for .has() matches, create and increment a count for each word that enters the hashmap, then return the count

       - Modify your function to return a list of the words most frequently used in the provided string
         Strategy:
    */

    // split book into an array of words
    const bookWords = book.split(' ');

    // default return value
    let repeatedWord = 'No repeated words found';

    // loop through array of words
    for (let i = 0; i < bookWords.length; i++)
    {
      let currentWord = bookWords[ i ];

      // TODO: .replace() most non-alphabet characters from currentWord with regex (except apostrophes in the middle of a word)
      // TODO: make currentWord lowercase (for easier comparisons)

      // if the hashtable already has the word (as a key)
      if (this.has(currentWord))
      {
        repeatedWord = currentWord;
        // break out of loop
        break;
      }
      else
      {
        // if not a repeated word, .set() currentWord to hashtable
        this.set(currentWord, i);
      }
    }
    return repeatedWord;
  }

  /**
   *
   * @param {BinaryTree} leftTree
   * @param {BinaryTree} rightTree
   * @return {Array} set of values in both trees
   */
  treeIntersection(leftTree, rightTree)
  {
    /* Strategy:
      - declare a `results` array to store duplicate values
      - traverse both trees to get arrays of values from each (preOrder is fine)
      - traverse left array to store values into hashtable
      - traverse right array and at each iteration, check 1. if the hashtable already .has() the value and 2. if the value is already in the `results` array (because I don't want repeats there, either) -> then add those values into the `results` array
      - by the end of the algorithm, we should have a set of all values found in both trees, without repeats
    */
    const results = [];


    return results;
  }
}

module.exports = HashTable;
