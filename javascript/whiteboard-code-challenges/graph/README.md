# Graph Implementation

## Challenge

*Implement your own directed Graph. The graph should be represented as an adjacency list.*

## API

Graph class methods:

**`add node:`**

- Arguments: value
- Returns: The added node
- Add a node to the graph

**`add edge:`**

- Arguments: 2 nodes to be connected by the edge, weight (optional)
- Returns: nothing
- Adds a new edge between two nodes in the graph
- If specified, assign a weight to the edge
- Both nodes should already be in the Graph

**`get nodes:`**

- Arguments: none
- Returns all of the nodes in the graph as a collection (set, list, or similar)
- Empty collection returned if there are no nodes

**`get neighbors:`**

- Arguments: node
- Returns a collection of edges connected to the given node
- Include the weight of the connection in the returned collection
- Empty collection returned if there are no nodes

**`size:`**

- Arguments: none
- Returns the total number of nodes in the graph
0 if there are none

## Testing

My test suite will cover these cases:

1. Node can be successfully added to the graph
2. An edge can be successfully added to the graph
3. A collection of all nodes can be properly retrieved from the graph
4. All appropriate neighbors can be retrieved from the graph
5. Neighbors are returned with the weight between nodes included
6. The proper size is returned, representing the number of nodes in the graph
7. A graph with only one node and edge can be properly returned

## Approach & Efficiency

I'm going to approach this challenge utilizing the 'Single-responsibility principle'. Any methods I write will be clean, reusable, and elegant.

## Resources

1. [Virtual Whiteboard](https://projects.invisionapp.com/freehand/document/sEveKiS2A)
