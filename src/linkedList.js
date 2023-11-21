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

	getHead() {
		return this.head.nextNode;
	}

	getTail() {
		return this.tail;
	}

	atIndex(index) {
		let i = 0;
		let currentNode = this.head.nextNode;
		while (currentNode !== null) {
			if (i === index) {
				return currentNode;
			}
			currentNode = currentNode.nextNode;
			i++;
		}
		return null;
	}

	pop() {
		let i = 0;
		let currentNode = this.head.nextNode;
		while (currentNode !== null) {
			if (currentNode.nextNode === null) {
				currentNode = null;
				this.atIndex(i - 1).nextNode = null;
				this.tail = this.atIndex(i - 1);
				return;
			}
			currentNode = currentNode.nextNode;
			i++;
		}
	}

	contains(value) {
		let currentNode = this.head.nextNode;
		while (currentNode !== null) {
			if (currentNode.value === value) {
				return true;
			}
			currentNode = currentNode.nextNode;
		}
		return false;
	}

	find(value) {
		let i = 0;
		let currentNode = this.head.nextNode;
		while (currentNode !== null) {
			if (currentNode.value === value) {
				return i;
			}
			currentNode = currentNode.nextNode;
			i++;
		}
		return null;
	}

	toString() {
		let string = "";
        let currentNode = this.head.nextNode;
		while (currentNode !== null) {
			string += `( ${currentNode.value} ) -> `
			currentNode = currentNode.nextNode;
		}
        string += "null";
        return string;
	}

    insertAt(value, index) {
        let i = 0;
		let currentNode = this.head.nextNode;
		while (currentNode !== null) {
			if (i === index) {
                const newNode = new Node(value);
                newNode.nextNode = currentNode;
                this.atIndex(i - 1).nextNode = newNode;
                return;
			}
			currentNode = currentNode.nextNode;
			i++;
		}
    }

    removeAt(index) {
        let i = 0;
		let currentNode = this.head.nextNode;
		while (currentNode !== null) {
			if (i === index) {
                this.atIndex(i - 1).nextNode = currentNode.nextNode;
                currentNode = null;
                return;
			}
			currentNode = currentNode.nextNode;
			i++;
		}
    }
}
