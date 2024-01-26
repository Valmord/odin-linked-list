import Node from "./Node";

export default class LinkedList {
  head = null;
  tail = null;
  size = 0;

  set head(node) {
    this.head = node;
    return node;
  }

  set tail(node) {
    this.tail = node;
    return node;
  }

  append(value) {
    const node = new Node(value);
    if (this.head === null) this.head = node;
    if (this.tail !== null) this.tail.next = node;
    this.tail = node;
    this.size += 1;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.size === 0) [this.head, this.tail] = [node, node];
    else [node.next, this.head] = [this.head, node];
    this.size += 1;
  }

  print(node = this.head) {
    const nodeArray = [];
    while (node !== null) {
      nodeArray.push(node.data);
      node = node.next;
    }
    console.log(nodeArray);
  }
}
