# TOP-LinkedList-exercise

### This is a part of The Odin Project Curriculum.
#### In this exercise, I've given to Implement LinkedList with 12 functions.

 ## Methods

| Method      | Description                                       |
|-------------|---------------------------------------------------|
| Append      | Append a new node at the end of the linked list.  |
| Prepend     | Add a new node at the beginning of the linked list. |
| Size        | Returns the number of nodes in the linked list.    |
| Head        | Returns the head node of the linked list.          |
| Tail        | Returns the tail node of the linked list.          |
| atIndex     | Returns the value of the node at a specific index. |
| Pop         | Deletes the last node from the linked list.        |
| Contains    | Returns a boolean indicating node presence.       |
| Find        | Returns the node if a specific value is found.    |
| toString    | Returns a string representation of the linked list (e.g., "10 -> 11 -> 12 -> null"). |
| InsertAt    | Inserts a new node at a specific location.        |
| RemoveAt    | Removes a node at a specific location.            |

## Usage

```javascript
// Example usage of the Linked List class

const linkedList = new LinkedList();

// Add nodes to the linked list
linkedList.append(10);
linkedList.append(11);
linkedList.append(12);

console.log(linkedList.toString()); // Output: "10 -> 11 -> 12 -> null"

console.log(linkedList.size()); // Output: 3

console.log(linkedList.atIndex(1)); // Output: 11

// ... and so on
