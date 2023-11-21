import Node from "./node";

export default class LinkedList {
	constructor() {
		this.head = new Node();
	}

	append(value) {
		const newNode = new Node(value);
		if (this.head.nextNode === null) {
			this.head.nextNode = newNode;
			this.tail = newNode;
		} else {
			this.tail.nextNode = newNode;
            this.tail = newNode;
		}
	}

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.head.nextNode;
        this.head.nextNode = newNode;
    }

	toString() {
		return `( ${this.head.nextNode.value} ) => ( ${this.head.nextNode.nextNode.value} ) => ( ${this.tail.value} )`;
	}
}
