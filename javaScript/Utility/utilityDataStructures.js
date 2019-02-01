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
/**
 * 1.UnOrdered LinkedList & Ordered LinkedList. 
 * 
 * @description:Read the Text from a file, split it into words and arrange it as Linked List.
 *              Take a user input to search a Word in the List. If the Word is not found then add it to the list, 
 *              and if it found then remove the word from the List. In the end save the list into a file.
 *
 * @purpose:    To read list of words from the file and add it to the file and remove it from th file and save it.
 * 
 * @param:      Read from file the list of Words and take user input to search a Text.
 */
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
        var temp = this.head;
        var prev = null;
        while (temp != null) {
            /**
             * Loop over till temp is equal to null.
             */
            if (temp.data === data) {
                /**
                 * Condition to check the passed data is equal to current data.
                 */
                if (prev == null) {
                    this.head = temp.next;
                }
                else {
                    prev.next = temp.next
                    temp.next = null;
                }
                this.size--;
                return temp.data;
            }
            else {
                prev = temp;
                temp = temp.next;
            }
        }
        return -1;
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
/***************************Balanced Parentheses***************************** */
/**
 * 1.Simple Balanced Parentheses.
 * 
 * @description:Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used to order the performance of operations.
 *              Ensure parentheses must appear in a balanced fashion.
 * 
 * @purpose :   To balance paranthesis  in the mathematical expression.
 * 
 * @param:      Write a Stack Class to push open parenthesis “(“ and pop closed parenthesis “)”. 
 *              At the End of the Expression if the Stack is Empty then the Arithmetic Expression is Balanced.
 */
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
        var str = "";
        for (let i = 0; i < this.size; i++) {
            str = str + " " + item[i];

        }
        return str;
    }
}
/*************************Simulate Banking Cash Counter************************* */
/**
 * 1.Simulate Banking Cash Counter
 * 
 * @description:Banking Cash Counter where people come in to deposit Cash and withdraw Cash.
 *              Have an input panel to add people to Queue to either deposit or withdraw money and dequeue
 *              the people. Maintain the Cash Balance.
 * 
 * @purpose:    To create bank cash counter where amount is deposited and withdrawn from the account.
 * 
 * @param:      Queue Class to enqueue and dequeue people to either deposit or withdraw money and maintain the cash balance
 */
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

module.exports = { LinkedList, Stack, Queue }








