'use strict';

// this function accepts 1 parameter: array of integers
// it returns a sorted array
const insertionSort = array =>
{
  // loop as many times as the length of the array
  for (let i = 1; i < array.length; i++)
  {
    // assign `j` as one fewer than `i`
    let j = i - 1;
    // assign `temp` to the value of i
    let temp = array[ i ];

    // while j is greater than 0
    // and the value at array[i]/temp is less than the value of array[j]
    while (j >= 0 && temp < array[ j ])
    {
      // reassign the value at array[i] to be the value of array[j]
      // at this point, there may be duplicate values in the array
      array[ j + 1 ] = array[ j ];
      // decrement j, so we can look if temp is still less than the value of array[j]
      j = j - 1;
    }
    // reassign the previous array[i] to be the value of `temp`
    array[ j + 1 ] = temp;
  }
  return array;
};
module.exports = insertionSort;
