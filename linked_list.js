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
  }
  