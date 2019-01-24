/***********************************************************
 *
 * Execution      :Default node    cmd>node primeFactors.js
 * Purpose        :To print primeFactors number.
 * 
 *@description 
 * 
 *
 *@file          :primeFactors.js
 *@overview      :primeFactors takes the userinput and prints the prime factors nubers.    
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :24/01/2019
 * 
 ***********************************************************/

var Access = require('../Utility/utility');
/**
 * For accessing data from utility file.
 */
var read = require('readline-sync');
var number = read.question("Enter the number: ");
/**
 * Taking the user input.
 */
Access.primeFactors(number);//Invoking the primeFactors function.