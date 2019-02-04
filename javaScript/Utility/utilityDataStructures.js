/***********************************************************
 *
 * Execution     :Default node      cmd>node filename.js
 * Purpose       :To deploy all the business logic.
 * 
 *@description 
 * 
 *
 *@file          :utilityDataStructures.js
 *@overview      :All the business logic are coded here.
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :31/01/2019
 * 
 ***********************************************************/
var utility = require('../Utility/utility')
class Node {
    /**
     * 
     * Node has to variable data,next.Data will point to current data 
     * and next will point to the next node. 
     */
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
/****************UnOrdered LinkedList & Ordered LinkedList. ******************* */
class LinkedList {
    /**
     * LinkedList has two varibles head,size 
     * head will always point to first node and size will be zero if no node object is created.
     */
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(data) {
        var node = new Node(data)
        /**
         * add method by accepting the data it will create new node object.
         */
        var current;
        if (this.head == null) {
            this.head = node;
            /**
             * Condition is used to check weather the head is pointing to null.
             */
        }
        else {
            current = this.head
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    isEmpty() {
        /**
         * Condition to check the size is zero or not.
         */
        if (this.size == 0)
            return true
        else
            return false;
    }
    remove(data) {
        var temp = this.head
        var t = null
        while (temp != null) {
            if (temp.data == data) {
                if (t == null) {
                    this.head = temp.next
                }
                else {
                    t.next = temp.next
                }
                this.size--
                return temp.data
            }
            t = temp
            temp = temp.next
        }
        return -1
    }
    search(data) {
        var temp = this.head;
        while (temp) {
            /**
             * Condition to check weather given data is present in the list.
             */
            if (temp.data === data) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }
    print() {
        var temp = this.head;
        var str = "";
        while (temp) {
            /**
             * Loop till temp is equal to null.
             */
            str += temp.data + " ";
            temp = temp.next;
        }
        return str;
    }
    indexOf(data) {
        var count = 0;
        var temp = this.head;
        while (temp != null) {
            if (temp.data === data)
                return count;
            count++;
            temp = temp.next;

        }
        return -1;
    }
    addPos(arr, num) {
        console.log(num + "  in addpos")
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[0] >= num)
                return 0
            else if (arr[i] < num && arr[i + 1] > num) {
                return i + 1
            }
        }
        return arr.length
    }
    /**
     * 
     *insert element at the position index of the list 
     * 
     */
    insertAt(element, index) {
        if (index > 0 && index > this.size)
            return false;
        else {
            /**
             *  creates a new node 
             */
            var node = new Node(element);
            var curr, prev;
            curr = this.head;
            /**
             * add the element to the first index 
             */
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;
                /**
                 *  iterate over the list to find the position to insert 
                 */
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                /**
                 * 
                 * adding an element 
                 */
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
}
/*******************************************Stack*************************************************/

/***************************Balanced Parentheses***************************** */
class Stack {
    constructor() {
        this.item = [];
        this.capacity;
        this.top = -1;
        this.size = 0;
    }
    size() {
        return this.size;
    }
    isEmpty() {
        /**
         * Condition to check the size is zero.
         */
        if (this.size == 0)
            return true;
        else
            return false;
    }
    push(data) {
        /**
         * Condition to  check the top is less then 1 if it is stack overflow.
         */
        if (this.top == this.capacity - 1) {
            console.log("Stack overflow");
            return;
        }
        this.size++;
        this.item[++this.top] = data;
    }
    pop() {
        /**
        * Condition to  check the top is less then 1 if it is stack is empty.
        */
        if (this.top == this.capacity - 1)
            console.log("Stack is empty");
        this.size--;
        return this.item.pop();
    }
    peek() {
        if (this.top == -1)
            console.log("Stack is empty");
        else
            return this.item[top];
    }
    print() {
        var st = ""
        var temp = this.top
        while (temp) {
            //console.log(temp.data)
            st = st + " " + temp.data
            temp = temp.next
        }
        return st;
    }
}
class StackLinkedList {

    constructor() {
        this.size = 0
        this.head = null;
    }
    size() {

        return this.size
    }
    isEmpty() {
        /**
         * Condition to check the size is zero.
         */
        return top == null;
    }
    push(data) {
        var n = new Node(data)
        if (this.head == null) {
            this.head = n
            this.size++
        }
        else {
            var temp = this.head
            while (temp.next) {
                temp = temp.next
            }
            temp.next = n
            this.size++
        }
    }
    pop() {
        if (this.head == null) {
            console.log("Stack underflow");
            return null;
        }
        var curr = this.head;
        var pre = this.head;
        if (curr.next == null) {
            this.head = null;
            return curr.data;
        }
        while (curr.next) {
            pre = curr;
            curr = curr.next;
        }
        var data = curr.data
        pre.next = null;
        this.size--;
        return data;
    }
    peek() {
        // check for empty stack 
        if (!isEmpty()) {
            return high.data;
        }
        else {
            console.log("Stack empty");
            return -1;
        }
    }
    print() {
        var st = ""
        var temp = this.head
        while (temp) {
            //console.log(temp.data)
            st = st + " " + temp.data
            temp = temp.next
        }
        return st;
    }
}
/*********************************************Queue**************************************************** */
class LinledListQueue {
    constructor() {
        this.tail = null;
        this.head = null;
    }
    /**
     * To add an element into the rear of the queue.
     * @param {any} item
     */
    enQueue(item) {
        /**
         * Create a node by passing the item
         */
        let node = new Node(item);
        /**
         * If there are no head and tail, point the data to head and tail
         */
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            /**
             * We just move the tail pointer
             */
            this.tail.next = node;
            this.tail = node;
        }
    }
    /**
     * To remove an item from the queue.
     */
    deQueue() {
        if (!this.head) {
            return "No item";
        } else {
            let itemToPop = this.head;
            this.head = this.head.next;
            return itemToPop;
        }
    }
    /**
     *return true if the queue is empty.
     */
    isEmpty() {
        return this.size() < 1;
    }
    /**
     * Returns the size of the queue
     */
    size() {
        let current = this.head;
        let counter = 0;
        while (current) {
            counter++;
            current = current.next;
        }
        return counter;
    }
    printList() {
        var st = ""
        var temp = this.head
        while (temp) {
            //console.log(temp.data)
            st = st + " " + temp.data
            temp = temp.next
        }
        return st;
    }
}
/*************************Simulate Banking Cash Counter************************* */

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(data) {
        /**
         * 
         * adding element to the queue
         * 
         */
        this.items.push(data)
    }
    deEqueue() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }
    isEmpty() {
        /**
         * 
         *return true if the queue is empty. 
         * 
         */
        return this.items.length == 0;
    }
    printList() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

/******************************************deQueue********************************************** */
class deQueue {
    constructor() {
        this.items = []
    }
    addFront(data) {
        /**
         * Adds the data to first element.
         */
        this.items.unshift(data)
    }
    addRear(data) {
        /**
         * Adds the data to last element.
         */
        this.items.push(data)
    }
    removeFront() {
        if (this.isEmpty())
            return "underFlow"
        /**
         * Removes the first element.
         */
        return this.items.shift()
    }
    removeRear() {
        /**
         * Removes the top element.
         */
        return this.items.pop()
    }
    isEmpty() {
        /**
         * 
         *return true if the queue is empty. 
         * 
         */
        return this.items.length == 0;
    }
}
module.exports = {
    LinkedList, Stack, Queue, deQueue, StackLinkedList, LinledListQueue,
    /************************binaryTree************************* */
    binaryTree(num) {
        var fact = 1;
        for (let i = 1; i <= num; i++) {
            fact = fact * i;
        }
        return fact;
    },
    /*****************************isPrime***************************** */
    isPrime(i, j) {
        var flag = 0;
        k = 0;
        var prime = [];

        for (var index1 = i; index1 <= j; index1++) {
            for (var index2 = 2; index2 < index1; index2++) {
                if (index1 % index2 == 0) {
                    flag = 0;
                    break;
                }
                else {
                    flag = 1;
                }
            }
            if (flag == 1) {
                prime[k++] = index1;
            }
        }
        return prime;
    },
    /****************************dArray***************************** */
    dArray() {
        var arr = [];
        var arr2 = [];
        var array = [["0-100 "], ["100-200 "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
        for (let i = 2; i < 1000; i++) {
            if (utility.isPrime(i)) {
                arr.push(i);

            }
        }
        var range = 100, k = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (utility.isAnagram(arr[i], arr[j])) {
                    if (arr[i] <= range) {
                        if (arr[j] <= range) {
                            array[k].push(arr[i]);

                            arr2.push(arr[i])
                            arr2.push(arr[j])
                            array[k].push(arr[j]);
                        }
                    } else {
                        range = range + 100;
                        k++;
                        if (arr[j] <= range) {
                            array[k].push(arr[i]);
                            array[k].push(arr[j]);
                        }
                    }
                }
            }
        }
        console.log("The Number which are prime and anagram ");
        var req=require('util')
        for (let i = 0; i < array.length; i++) {

            for (let j = 0; j < array[i].length; j++) {
                req.print(array[i][j]);
                if (j == 0) {
                    req.print(" => ");
                } else {
                    if (j != array[i].length - 1)
                        req.print(",")
                }
            }
            console.log();
        }
        return arr2
    },

}
