/***********************************************************
 *
 * Execution      :Default node    cmd>node bubbleSort.js
 * Purpose        :Sorting the integers.
 *@description 
 * 
 *
 *@file          :bubbleSort.js
 *@overview      :bubbleSort takes the array size user input and sort the integers using bubble sort method.    
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :27/01/2019
 * 
 ***********************************************************/
var access = require('../Utility/utility');
/**
 * For accessing data from utility file.
 */
var read = require('readline-sync');
var size=read.question("Enter the size of the array : ")
access.bubbleSort(size);//Invoking bubbleSort function.