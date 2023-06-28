class LinkedList {
    constructor() {
        this.head = null;
        this.size = -1;
    }

    prepend(data) {
        let node = new Node(data, this.head)
        this.head = node;
        this.size++;
    }

    append(data) {
        if (this.head == null) {
            return this.prepend(value)
        }
        else {
            let current = this.head;
            while (current.nextNode != null) {
                current = current.nextNode;
            }
            current.nextNode = new Node(data, null)
        }
        this.size++
    }

    toString() {
        let output = '';
        let current = this.head;
        while (current) {
            output += `${current.value} -> `
            current = current.nextNode;
        }
        output = `${output} null`
        console.log(output);
    }

    listSize() {
        let total = this.size;
        return console.log(total)
    }

    listHead() {
        let current = this.head;
        return console.log(current.value);
    }
    listTail() {
        let current = this.head
        if (current.nextNode == null) return console.log(current);
        else {
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            return console.log(current.value);
        }
    }
    findAtIndex(index) {
        let current = this.head;
        if (index < 0 || index > this.size) return console.log("Invalid: Index Not found")
        if (index == 0) return console.log(current.value);
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        }
        return console.log(current.value);
    }

    pop() {
        if (this.head == null) return null
        if (this.head.nextNode == null) return this.head = null;
        let current = this.head;
        while (current.nextNode.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = null;
        this.size--;
    }

    contains(data) {
        let current = this.head;
        while (current !== null) {
            if (current.value === data) {
                return console.log(true);
            }
            current = current.nextNode;
        }
        return console.log(false);
    }

    find(value) {
        let current = this.head;
        let index = 0;
        while (current != null) {
            if (current.value === value) {
                return console.log(index)
            }
            current = current.nextNode;
            index++;
        }
        return console.log("Not found")
    }

    insertAt(value, index) {
        let current = this.head
        let prev = null;
        if (index < 0 || index > this.size) return console.log("Invalid Index Number");
        if (index === 0) return this.head = new Node(value, this.head)
        for (let i = 0; i < index; i++) {
            prev = current;
            current = current.nextNode;
        }
        prev.nextNode = new Node(value, current);
        this.size++
    }

    removeAt(index) {
        if (index < 0 || index > this.size) return console.log("Invalid Index Number")
        if (index === 0) this.head = this.head.nextNode
        else {
            let current = this.head;
            let prev = null;
            for (let i = 0; i < index; i++) {
                prev = current;
                current = current.nextNode;
            }
            prev.nextNode = current.nextNode;
            this.size--;
        }
    }
}

class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

let list = new LinkedList;
list.prepend(500)
list.prepend(400)
list.prepend(300)
list.append(600)
list.append(700)
list.listHead()
list.listTail()
list.findAtIndex(4)
list.pop()
list.contains(500)
list.find(500)
list.insertAt(800, 2)
list.removeAt(3)
list.toString()
list.listSize()