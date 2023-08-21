/// /////////////////////////////////////////
/* eslint-disable consistent-return */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/// //////////////////////////////////////////

class LinkedList {
  // APPEND FOR ADDING NODE AT THE END OF THE LINKEDLIST
  append(list, value) {
    // Creating a new list for head
    if (list === undefined || list === null) {
      list = new Node();
      list.value = value;
      return list;
    }

    // Appending new value at the end of the list
    if (list.next == null) {
      list.next = new Node();
      list.next.value = value;
      return list;
    }

    // this step for capturing the updated list.next value and
    // update it to current list.next value

    // 10 -> 11(list.next)) -> (null)[12 to be inserted]
    // =>then return value will be updated 11 which is 11 -> 12
    // 10 -> 11 -> 12

    list.next = this.append(list.next, value);
    return list;
  }

  // PREPEND FOR ADDING NODE AT THE BEGINNING OF THE LINKEDLIST
  prepend(value) {
    // Creating a new head and adding it's value
    const head = new Node();
    head.value = value;

    // if there node to be added then add the list to the head.next (9)->(10,11,12).
    if (list.value != null) {
      head.next = list;
    }

    list = head; // updating the list
    return list;
  }

  // RETURNS THE NO OF NODES IN THE LINKEDLIST
  size(list, noOfNodes = 0) {
    if (list == null) return noOfNodes;
    return this.size(list.next, ++noOfNodes);
  }

  // RETURNS THE HEAD OF THE LINKEDLIST
  head() {
    if (list === null) {
      return list;
    }
    return list.value;
  }

  // RETURNS THE TAIL OF THE LINKEDLIST
  tail(list) {
    if (list === null) {
      return list;
    }
    if (list.next == null) return list.value;
    if (list.next != null) {
      return this.tail(list.next);
    }
  }

  // RETURN THE NODE IN THE REQUESTED INDEX
  atIndex(list, index, i = 0) {
    if (list != null) {
      if (i === index) {
        return list.value;
      }
      return this.atIndex(list.next, index, ++i);
    }
    return `Not found , last index is  ${i}`;
  }

  // POPS THE LAST NODE IN THE LINKEDLIST
  pop(list) {
    if (list === null) {
      console.log("No Nodes to POP");
      return list;
    }
    if (list.next == null) {
      list = null;
      return list;
    }
    if (list.next.next == null) {
      list.next = null;
      return list;
    }
    // same updating the current list.next 9->10->(11->[12])(which needs to be pop)
    // to updated list.next 9->10->(11->null)
    list.next = this.pop(list.next);
    return list;
  }

  // RETURNS TRUE IF THE NODES CONTAINS IN THE LINKEDLIST
  contains(list, value) {
    if (list == null) return false;
    if (list.value === value) {
      return true;
    }
    return this.contains(list.next, value);
  }

  // RETURNS THE NODE WHICH WE WANT TO FIND
  find(list, value) {
    if (list == null) return `${value} not found`;
    if (list.value === value) return list;
    return this.find(list.next, value);
  }

  // REPRESENTS THE NODES IN THE STRING FORMAT 9->10>11->12
  toString(list) {
    if (list == null) return list;
    let result = "";
    if (list != null) {
      result += `(${list.value})->`;
      return result + this.toString(list.next);
    }
  }

  // EXTRA CREDITS

  // INSERT INTO SPECIFIC PLACE WE LIKE IN THE LINKEDLIST
  insertAt(list, place, value) {
    if (list == null) {
      return list;
    }
    if (list.value === place) {
      const node = new Node();
      node.value = value;

      // 13 - > (10,11,12)
      // updating it into 9.next

      node.next = list.next;
      list.next = node;
      return list;
    }
    if (list.next != null && list.next.value === place) {
      // creating a new Node with the value
      const node = new Node();
      node.value = value;

      // 9,10,11,12
      // 13 - > (11,12)
      // updating it into (9,10)->(13,11,12)

      node.next = list.next.next;
      list.next.next = node;
      return list;
    }
    list.next = this.insertAt(list.next, place, value);
    return list;
  }

  // REMOVE THE NODE AT SPECIFIC PLACE IN THE LINKEDLIST
  removeAt(list, value) {
    if (list == null) {
      console.log(value, "not found to be removed");
      return list;
    }
    if (list.value === value) {
      list = list.next;
      return list;
    }
    if (list.next != null && list.next.value === value) {
      list.next = list.next.next;
      return list;
    }
    list.next = this.removeAt(list.next, value);

    return list;
  }
}

class Node {
  constructor() {
    this.value = null;
    this.next = null;
  }
}

let list;

const linkedlist = new LinkedList();

// 1)append takes two argument (list,value) where list is used for recursion
list = linkedlist.append(list, 10);
list = linkedlist.append(list, 11);
list = linkedlist.append(list, 12);

// 2)prepend  takes one argument (value) because of no recursion
list = linkedlist.prepend(9);

// 3)size takes one argument (list) for just recursion
console.log(`${linkedlist.size(list)} No of Nodes`);

// 4)head does need any argument
console.log(`Head of the node is ${linkedlist.head()}`);

// 5)tail takes one argument(list) for recursion
console.log(`Tail of the node is ${linkedlist.tail(list)}`);

// 6)atIndex takes two argument (list,index)
console.log(linkedlist.atIndex(list, 4));

// 7) will pop the last node (takes one argument(list)).
// list = linkedlist.pop(list);

// 8) contains takes two argument(list,value) returns true if it contains
console.log(linkedlist.contains(list, 11)); // true

// 9) find takes two argument(list,value) returns the node if it finds
console.log(linkedlist.find(list, 12));

// 10) toString nicely represents the linkedlist.
console.log(linkedlist.toString(list));

// 11) insertAt takes three argument (list,place,value) place is for new node in that place
list = linkedlist.insertAt(list, 10, 13);

// 12) removeAt takes two argument(list,value)
list = linkedlist.removeAt(list, 13);

console.log(linkedlist.toString(list));

// console.log(list);
