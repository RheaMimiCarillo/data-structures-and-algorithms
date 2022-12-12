'use strict';

const Queue = require('./Queue');
const { Knode } = require('./Node.js');

class KaryTree
{
  constructor(root = null)
  {
    this.root = root;
  }

  treeFizzBuzz()
  {
    let fizzBuzzTree = new KaryTree();

    if (this.root !== null)
    {
      let breadthFirstQueue = new Queue();
      breadthFirstQueue.enqueue(this.root);

      while (!breadthFirstQueue.isEmpty)
      {
        let front = breadthFirstQueue.dequeue;

        let parent = null;

        // if number is divisible by 3 and 5
        if ((front.data % 3 === 0) && (front.data % 5 === 0))
        {
          front.data = 'FizzBuzz';
        }
        // if number is divisible by 3
        else if (front.data % 3 === 0)
        {
          front.data ='Fizz';
        }
        // if number divisible by 5
        else if (front.data % 5 === 0)
        {
          front.data = 'Buzz';
        }
        else
        {
          front.data = front.data.toString();
        }

        if (fizzBuzzTree.root === null)
        {
          fizzBuzzTree.root = front;
        }
        else
        {
          parent.children.push(front);
        }

        if (front.children)
        {
          parent = front;
          front.children.forEach(child => breadthFirstQueue.enqueue(child));
        }
      }
    }

    return fizzBuzzTree;
  }

  breadthFirst()
  {
    let results = [];

    if (this.root !== null)
    {
      let breadthFirstQueue = new Queue();
      breadthFirstQueue.enqueue(this.root);

      while (!breadthFirstQueue.isEmpty)
      {
        let front = breadthFirstQueue.dequeue;
        results.push(front.data);

        if (front.children)
        {
          front.children.forEach(child => breadthFirstQueue.enqueue(child));
        }
      }
    }

    return results;
  }
}

module.exports = KaryTree;
