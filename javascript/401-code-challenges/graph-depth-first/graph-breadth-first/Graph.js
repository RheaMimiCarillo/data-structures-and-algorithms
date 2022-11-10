'use strict';

const Stack = require('./stack-and-queue/stack');
const Queue = require('./stack-and-queue/queue');

class Vertex
{
  constructor(value)
  {
    this.value = value;
  }
}

class Edge
{
  constructor(vertex, weight = 1)
  {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph
{
  constructor()
  {
    this.adjacencies = new Map();
  }

  /* adjacency list visualization:

      using JS Map() object
      {
        a: [b, c],
        b: [c],
        c: []
      }

  */

  /**
   * @param {any} data
   * @return {Vertex} the added Vertex
   * accepts data, create Vertex, add new Vertex to graph
   */
  addVertex(data)
  {
    let newVertex = new Vertex(data);
    // note to self: look up how this `.set()` method works
    this.adjacencies.set(newVertex, []);
    return newVertex;
  }

  /**
   * @param {Vertex} startVertex
   * @param {Vertex} endVertex
   * @param {int} weight
   * @return {none}
   * add a new `edge` between two Vertexs that are already in the graph
   * if specified, assign weight to edge
   */
  addEdge(startVertex, endVertex, weight = null)
  {
    //TODO: add weight to edge, if specified
    if (this.adjacencies.has(startVertex) && this.adjacencies.has(endVertex))
    {
      let edges = this.adjacencies.get(startVertex);
      edges.push(new Edge(endVertex));
    }
    else
    {
      throw new Error('Invalid input Vertex');
    }
  }

  /**
   * @param {Vertex} vertex
   * @return {} collection of edges (and weights) connected to the given Vertex
   */
  getNeighbors(vertex)
  {
    //
    const edges = new Map();


    return edges;
  }

  /**
   * @param {none}
   * @return {Map} collection of Vertexs
   * return a collection of all Vertexs in the graph
   * if none, return empty collection
   */
  getVertexs()
  {
    //
    const allVertexs = new Map();

    return allVertexs;
  }

  /**
   * @param {none}
   * @return {int} count of Vertexs in graph
   * return a count of the total number of Vertexs in the graph
   * return `0` if there are none
   */
  size()
  {
    //
    let total = 0;

    return total;
  }

  /**
   * @param
   * @return
   *
   */
  breadthFirst(root)
  {
    // adjacency list is stored in a hashmap
    // therefore, the breadthFirst search is a of search all neighbors of `a`
    // then all neighbors of `b`
    // then `c`, etc

    /* Steps:
      1. Pick a root vertex
      2. Enqueue() the root into a Queue
      3. while loop: while the queue has vertices (is not empty)
      4. dequeue the front Vertex (which return the properties of the removed Vertex)
      5. add dequeued Vertex to List of `visited Vertexs`
      6. and enqueue each of the dequeued Vertex's neighbors
      7. repeat until empty

      Note: disconnected Vertexs will never be visited

      NOTE: can use a JS Array instead of Queue
      - `shift` and `unshift`

    */
    /* Pseudocode from class:
      ALGORITHM BreadthFirst(vertex)
    DECLARE nodes <-- new List()
    DECLARE breadth <-- new Queue()
    DECLARE visited <-- new Set()

    breadth.Enqueue(vertex)
    visited.Add(vertex)

    while (breadth is not empty)
        DECLARE front <-- breadth.Dequeue()
        nodes.Add(front)

        for each child in front.Children
            if(child is not visited)
                visited.Add(child)
                breadth.Enqueue(child)

    return nodes;
    */
  }
  /**
   * @param {Node} (Starting point of search)
   * @return {any} A collection of nodes in their pre-order depth-first traversal order
   */
  depthFirst(root)
  {
    /*
      depth-first means to visit all children of a given Vertex before moving onwards
    */
    /* Steps
      1. create a Stack
      2. pick a root
      3. enqueue the root to the Stack
      4. while loop: while stack has vertices (not empty)
      5. Pop top off of stack
      6. check if popped thing has been visited
      7. check if all children have been visited
      8. add all visited to Visited Set()
      9. if not visited, add to Stack
      10. continue looping until it's over
      11. return something?

      NOTE: can use a JS Array instead of Stack
      - push and pop
    */
  }
}

module.exports = Graph;
