/***********************************************************
 *
 * Execution      :Default node    cmd>node binarySearchint.js
 * Purpose        :Sorting the integers.
 *@description 
 * 
 *
 *@file          :binarySearchint.js
 *@overview      :binarySearchint takes the user input reads in integers prints them in  order using binary search sort method.    
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :29/01/2019
 * 
 ***********************************************************/
var access = require('../Utility/utility');
/**
 * For accessing data from utility file.
 */
var read = require('readline-sync');

var arr = [];
/**
 * Ask the user size of the array and store the elements.
 * 
 */
var size = read.question("Enter the size of the array :");
for (let i = 0; i < size; i++) {
    arr[i] = read.question("Enter the array elements :");
}
var find = read.question("Enter element to be  searched :");
var res=Access.binarySearchStrg(arr,find);//Invoking binarySearchstrg function.
//console.log(res);
var result = access.binarySearchInt(arr, find);//Invoking the binarSearch function.
console.log(result);

