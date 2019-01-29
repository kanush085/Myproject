/***********************************************************
 *
 * Execution      :Default node    cmd>node isPrime.js
 * Purpose        :Sorting the string.
 *@description 
 * 
 *
 *@file          :bubbleSort.js
 *@overview      :bubbleSort takes the array size user input and sort the string using bubble sort method.    
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :29/01/2019
 * 
 ***********************************************************/
var Access = require('../Utility/utility');
/**
 * For accessing data from utility file.
 */
var read = require('readline-sync');
var size=read.question("Enter the size of the array : ")
Access.bubbleSort(size);//Invoking bubbleSortstr function.