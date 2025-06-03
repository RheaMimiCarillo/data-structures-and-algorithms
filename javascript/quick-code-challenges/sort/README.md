# Sort

Code Challenges utilizing the [JavaScript sort() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

## Tests

Run your tests from the console: `npm test sort.test.js`.

### `.sort()` Notes

`.sort()` works by comparing the numeric values of character codes.

`.sort()`'s default behavior works by:

1. taking an array as an argument
2. converting each element into a `String`
3. comparing the UTF-16 values of each `Stringified` element
4. and finally, returning (a reference to) the input array

The default behavior seems inconvenient, so we let's pass a callback function into .sort() where we can define our own sorting criterion:

``` JavaScript
  sort((a,b =>
  {
    // the callback expression
  }));

  or:

  sort(comparisonFunction);

  or:

  sort(function comparisonFunction(a,b)
  {
    // expression
  });
```

To define which order elements settle at:

`compareFunction(a, b);`

`< 0` (a is less than b)

- a is 'sorted' to be before b

`> 0` (a is greater than b)

- a is 'sorted' to be after b

`=== 0` (a is the same as b)

- a and b stay in the same order

***[MDN example below:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)***

``` JavaScript
  function compareFn(a, b)
  {
    if (a is less than b by some ordering criterion)
    {
      return -1;
    }
    if (a is greater than b by the ordering criterion)
    {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
```

In other words, a effective comparator will have good symmetry which reliably and consistently returns `-1`, `0`, or `1`.

### Comparing Object Literals

Arrays of object literals can be `.sort()`'d by by reading the values of their properties.
