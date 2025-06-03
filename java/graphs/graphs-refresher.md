# Refresher on Graphs

Graphs are node-based data structures where any node has the ability to be connected directly to any node. Those connections are called 'edges'.

## Edges

The connections between nodes can have different properties.

**Directional** connections show which way a node can traverse to a connection. It can be one-way (represented by a single arrow head) or bi-directional (like a doubly linked list).

**Weight** describes the 'cost' of traversal between nodes.

## Similarities to more familiar data structures

LinkedLists, Stacks, Queues, Heaps, etc. are within the broader family of 'Graphs'. Those data structures have restrictions put in place to that differentiate them from the larger graph umbrella.

## Representing Graphs

Graphs are often represented as a collection of little circles with lines or arrows (in the case of a `Directed Graph`).

## Traversal



Here are the basic traversal methods for graphs. Despite this, there are many ways to traverse graphs to accomplish a desired outcome. This means there may be a lot of room for creativity when working through a solution to a coding challenge involving graphs.

```text
INPUT: a vertex in a graph
TASK: Breadth-first traversal


  instantiate queue
  instantiate iterator

  add vertex to queue

  while queue is !.empty()
    pop vertex
    flag popped vertex as `visited`
    look at check child of popped vertex
      if children !`visited`
        add child to queue

  return the final node (if relevant to problem)

```

### Breadth-First Traversal (BFT)

BFT is often used to do a Breadth-First Search.

Let's start by reviewing what we learned from Trees. For Level-Order Traversal (also a BFT), we started at the root (A) and put each node's left and right into a queue.

At each level, we pop the first node from the queue to read the value, then add it's left and right children to the queue. When the queue is empty, that means we have already added and visited the nodes at that level.

```text
   A
  / \
 B   C
```

## Questions and Answers

### What can we do with graphs that we can't do with trees?

Trees cannot have direct connections (or traversal path) between siblings or cousin nodes.

### Weighted Graphs

**What are weighted graphs (or networks)?**

Weighted graphs has a _weight (a magnitude i.e. )_ attached to each edge.

## Implementing

### Adjacency Matrix

We can represent a Graph with a 2D matrix instead of Nodes.

