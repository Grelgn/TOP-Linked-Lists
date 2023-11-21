import LinkedList from "./linkedList";

const linkedList = new LinkedList();
linkedList.append("test");
linkedList.append("test2");
linkedList.append("test3");
linkedList.append("test4");
linkedList.prepend("test5");
linkedList.prepend("test6");
console.log(linkedList.size())
console.log(linkedList.toString());
