# Linked Lists
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

    def removeAt(self, index):
        if index < 0:
            raise IndexError("Index out of range")
        if index == 0:
            self.head = self.head.next
        else:
            current = self.head
            prev = None
            count = 0
            while current and count < index:
                prev = current
                current = current.next
                count += 1
            if current:
                prev.next = current.next
            else:
                raise IndexError("Index out of range")  

    def insertAt(self, index, data):
        if index < 0:
            raise IndexError("Index out of range")
        new_node = Node(data)
        if index == 0:
            new_node.next = self.head
            self.head = new_node
        else:
            current = self.head
            prev = None
            count = 0
            while current and count < index:
                prev = current
                current = current.next
                count += 1
            if current:
                prev.next = new_node
                new_node.next = current
            else:
                raise IndexError("Index out of range")

    def getAt(self, index):
        if index < 0:
            raise IndexError("Index out of range")
        current = self.head
        count = 0
        while current and count < index:
            current = current.next
            count += 1
        if current:
            return current.data
        else:
            raise IndexError("Index out of range")

    def display(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

# Example usage:
my_list = LinkedList()
my_list.append(1)
my_list.append(2)
my_list.append(3)   
my_list.display()
my_list.removeAt(1)
my_list.display()
my_list.insertAt(1, 4)
my_list.display()
print(my_list.getAt(1))
