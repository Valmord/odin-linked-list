import LinkedList from "./LinkedList";

const list = new LinkedList();
list.append(5);
list.append(7);
list.prepend(1);
list.prepend(9);
console.dir(list);
console.log(list.size);
console.log("head:", list.head);
console.log("tail:", list.tail);
console.log("at:", list.at(2));
console.log("pop:", list.pop());
console.log("contains 5:", list.contains(5));
console.log("contains -1:", list.contains(-1));
console.log("find index of 5:", list.find(5));
console.log("find index of -1:", list.find(-1));
console.log(list.toString());
list.print();
