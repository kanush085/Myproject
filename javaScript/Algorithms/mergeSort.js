/***********************************************************
 *
 * Execution      :Default node    cmd>node mergeSort.js
 * Purpose        :Sorting the integers.
 *@description 
 * 
 *
 *@file          :mergeSort.js
 *@overview      :mergeSort takes the user input  reads in Strings prints them in  order using merge sort method.    
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
var num = read.questionInt("enter the size of array : ")
var arr = [];
while (num != arr.length) {
    var number = read.question("enter the array elements : ")
    arr.push(number)
}
var l = 0;
var h = arr.length;
    access.mergeSort(arr)
    console.log("Merge sorted result ", arr);
