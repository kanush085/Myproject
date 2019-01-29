/***********************************************************
 *
 * Execution      :Default node    cmd>node toBinary.js
 * Purpose        :Representation of decimal number in binary (base 2) and padding the value to the string.
 *@description 
 * 
 *
 *@file          :toBinary.js
 *@overview      :toBinary takes the user input integer and finds representation of decimal number in binary (base 2).    
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
var number = read.question("Enter the number :");
Access.toBinary(number);//Invoking toBinary function.
