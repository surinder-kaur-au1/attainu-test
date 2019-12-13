class Node {
    constructor(value, next=null, data=null){
        this.value = value;
        this.next = next;
        this.data = data;
    }
}

    class Linkedlist {
        constructor() {
            this.head = null;
            this.tail = null;
        }

        hasLoop() {
            if(!this.head) {
                return null;
            }
                else {
            let currentNode = this.head;
            while(currentNode.next.value != null) {
                return true;
            }
            return false;
        }
        }
    
    
    }
