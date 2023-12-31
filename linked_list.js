class Node {
    constructor(value) {
      this.value = value; // Creates a new Node with a given value.
      this.nextNode = null; // Initializes the nextNode as null (no next node initially).
    }
  }

class LinkedList {
    constructor() {
      this.head = null; // Initializes the head of the linked list as null (empty list).
      this.tail = null; // Initializes the tail of the linked list as null (empty list).
    }
  
    append(value) {
      const newNode = new Node(value); // Create a new node with the given value.
      if (!this.head) {
        this.head = newNode; // If the list is empty, set both head and tail to the new node.
        this.tail = newNode;
      } else {
        this.tail.nextNode = newNode; // If the list is not empty, set the nextNode of the tail to the new node.
        this.tail = newNode; // Update the tail to be the new node.
      }
    }
  
    prepend(value) {
      const newNode = new Node(value); // Create a new node with the given value.
      if (!this.head) {
        this.head = newNode; // If the list is empty, set both head and tail to the new node.
        this.tail = newNode;
      } else {
        newNode.nextNode = this.head; // If the list is not empty, set the nextNode of the new node to the current head.
        this.head = newNode; // Update the head to be the new node.
      }
    }
  
    toArray() {
      const result = [];
      let currentNode = this.head; // Start from the head of the list.
      while (currentNode) {
        result.push(currentNode.value); // Push the value of the current node into the result array.
        currentNode = currentNode.nextNode; // Move to the next node in the list.
      }
      return result; // Return an array containing the values of the nodes in the linked list.
    }

    size() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode.nextNode; // Move to the next node
        }
        return count;
    }
    getHead() {
        return this.head; // Simply return the head property of the linked list.
      }
    getTail() {
        return this.tail; // Simply return the tail property
    }

    getIndex(index) {
      if (index < 0) {
        return null; // Return null for negative indices.
      }
  
      let currentIndex = 0;
      let currentNode = this.head;
  
      while (currentNode) {
        if (currentIndex === index) {
          return currentNode; // Return the node at the specified index.
        }
        currentIndex++;
        currentNode = currentNode.nextNode;
      }
  
      return null; // Return null if the index is out of bounds.
    }

    pop() {
      if (!this.head) {
        return null; // Return null if the list is empty.
      }
  
      if (!this.head.nextNode) {
        // If there's only one element in the list, remove it.
        const removedNode = this.head;
        this.head = null;
        this.tail = null;
        return removedNode;
      }
  
      let currentNode = this.head;
      while (currentNode.nextNode && currentNode.nextNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
  
      // currentNode will be the second-to-last node.
      const removedNode = currentNode.nextNode;
      currentNode.nextNode = null; // Remove the last node.
      this.tail = currentNode; // Update the tail to the new last node.
      return removedNode;
    }

    contains(value) {
      let currentNode = this.head;

      while (currentNode) {
        if(currentNode.value === value){
          return true;// if the value is found in the list return true
        }
        currentNode = currentNode.nextNode;
      }
      return false;
    }
    find(value) {

      let currentNode = this.head;
      let currentIndex = 0;

      while (currentNode) {
        if (currentNode.value === value) {
          return currentIndex;
        }
        currentIndex++;
        currentNode = currentNode.nextNode;
      }
      return null;
    }

    toString() {
      let result = '';
      let currentNode = this.head;
      while (currentNode) {
        result += `(${currentNode.value}) -> `;
        currentNode = currentNode.nextNode;
      }
      return result + 'null';//append null to signify end of list
  }
  insertAt(value, index) {
    if (index < 0) {
      return false;
    }

    const newNode = new Node(value);
    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      if(!this.tail) {
        this.tail = newNode;
      }
      return true;
    }

    let currentNode = this.head;
    let currentIndex = 0;
    while(currentNode) {
      if(currentIndex === index-1) {
        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
        if(!newNode.nextNode) {
          this.tail = newNode;
        }
        return true;
      }
      currentIndex++;
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  removeAt(index) {
    if (index < 0 || !this.head) {
      return null;
    }
    if (index === 0){
      const removedNode = this.head;
      this.head = this.head.nextNode;
      if (!this.head){
        this.tail = null;
      }
      return removedNode;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode.nextNode) {
      if (currentIndex === index - 1) {
        // Remove the node after currentNode and update nextNode references.
        const removedNode = currentNode.nextNode;
        currentNode.nextNode = removedNode.nextNode;
        if (!currentNode.nextNode) {
          this.tail = currentNode; // If the last node is removed, update the tail.
        }
        return removedNode;
      }
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return null; // Return null if the index is out of bounds.
  }
}


// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);

console.log(linkedList.toArray()); // Output: [0, 1, 2]
const removedNode = linkedList.removeAt(1); 
console.log(linkedList.toString()); // Output: (1) -> (4) -> (2) -> (3) -> null