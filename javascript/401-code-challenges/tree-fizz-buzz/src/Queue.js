'use strict';

class Node
{
  constructor(data, next = null)
  {
    this.data = data;
    this.next = next;
  }
}

class Queue
{
  constructor(front = null, rear = null)
  {
    this.front = front;
    this.rear = rear;
  }

  /* METHODS */

  // accepts 1 parameter: data
  // this method creates a new node with `data` and adds that node to the `back` of the queue
  enqueue(data)
  {
    // create a new Node with data
    let newRear = new Node(data);

    // check if queue is empty
    if (this.isEmpty())
    {
      // assign `front` and `rear` properties to the newRear node
      this.front = newRear;
      this.rear = newRear;
    }
    else
    {
      // make the current rear node point to the newRear node
      this.rear.next = newRear;
      // reassign the `rear` property to the newRear
      this.rear = newRear;
    }
  }

  // this method removes the node from the `front` of the queue
  // and returns the `data` of the removed node
  dequeue()
  {
    if (!this.isEmpty())
    {
      // make temp value that points to the current `front` node
      let temp = this.front;

      // reassign `front` to the current front's `.next
      this.front = this.front.next;

      // reassign the previous front's (`temp`) `.next` property to `null`
      temp.next = null;

      // return the data of the removed node (temp)
      return temp.data;
    }
    else
    {
      return 'error dequeuing empty Queue';
    }
  }

  // this method looks at the `front` node and returns its `data
  peek()
  {
    if (!this.isEmpty())
    {
      return this.front.data;
    }
    else
    {
      return 'error peeking empty Queue';
    }
  }

  // this method returns `true` when this Queue is empty and `false` when this Queue has at least one node
  isEmpty()
  {
    return this.front ? false : true;
  }

  // →
  toString()
  {
    // if there is no front `Node` to point to
    if (this.isEmpty())
    {
      return 'FRONT → { } → BACK → NULL';
    }
    // if there IS a front `Node` to point to
    else
    {
      // start building string from `front` node
      let output = 'FRONT → { ';

      // fill output with data in `head`
      output += `${ this.front.data } } → `;

      // specify the next node
      let current = this.front.next;

      // whilst `current` isn't null
      while (current !== null)
      {
        // add the brackets, `current` data, and arrow to the  `output` string
        output += `{ ${ current.data } } → `;
        current = current.next;
      }

      // when we get here, current isn't a `Node`, it's `null, so we concatenate `NULL` to the end of `output`
      output += 'BACK → NULL';

      // returns `output`
      return output;
    }
  }
}

module.exports = Queue;
