/***********************************************************
 *
 * Execution      :Default node    cmd>node toFindnumber.js
 * Purpose        :To find the number using Binary Search method.
 *@description 
 * 
 *
 *@file          :toFindnumber.js
 *@overview      :toFindnumber takes the user input commands of the number to find by using Binary Serach method.    
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :28/01/2019
 * 
 ***********************************************************/
var Access = require('../Utility/utility');
/**
 * For accessing data from utility file.
 */
var read = require('readline-sync');
var N = process.argv[2]
/**
 * Taking user input commands.
 */
var result = Access.toFindnumber(0, N - 1, read);
console.log("Your number is :" + result);//Invoking toFindnumber function.
