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

	size() {
		let size = 0;
		let currentNode = this.head.nextNode;
		while (currentNode !== null) {
			size++;
			currentNode = currentNode.nextNode;
		}
		return size;
	}

	toString() {
		return `( ${this.head.nextNode.value} ) => ( ${this.head.nextNode.nextNode.value} ) => ( ${this.tail.value} )`;
	}
}
