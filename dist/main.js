(()=>{"use strict";class e{constructor(e){this.value=e||null,this.nextNode=null}}const t=new class{constructor(){this.head=new e}append(t){const n=new e(t);null===this.head.nextNode?(this.head.nextNode=n,this.tail=n):(this.tail.nextNode=n,this.tail=n)}prepend(t){const n=new e(t);n.nextNode=this.head.nextNode,this.head.nextNode=n}size(){let e=0,t=this.head.nextNode;for(;null!==t;)e++,t=t.nextNode;return e}getHead(){return this.head.nextNode}getTail(){return this.tail}toString(){return`( ${this.head.nextNode.value} ) => ( ${this.head.nextNode.nextNode.value} ) => ( ${this.tail.value} )`}};t.append("test"),t.append("test2"),t.append("test3"),t.append("test4"),t.prepend("test5"),t.prepend("test6"),console.log(t.size()),console.log(t.getHead()),console.log(t.getTail()),console.log(t.toString())})();