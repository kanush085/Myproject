/***********************************************************
 *
 * Execution      :Default node    cmd>node sqrtNumber.js
 * Purpose        :Finding the perfect square of non negative number.
 *@description 
 * 
 *
 *@file          :sqrtNumber.js
 *@overview      :sqrtNumber takes the user input to find the perfect non negative perfect square number..    
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
var Number = read.question("Enter the number :");
access.sqrtNumber(Number);//Invoking sqrtNumber function.