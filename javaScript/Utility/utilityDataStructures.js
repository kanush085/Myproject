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

/**
 * 1.UnOrdered LinkedList
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
}
module.exports = { LinkedList, Node }








