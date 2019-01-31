/***********************************************************
 *
 * Execution      :Default node    cmd>node vendingMachine.js
 * Purpose        :Find the Fewest Notes to be returned for Vending Machine.
 *@description 
 * 
 *
 *@file          :vendingMachine.js
 *@overview      :vendingMachine takes the user input amount and finds the fewest notes to returned as change.    
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
var arr = [2000, 500, 200, 100, 50, 10, 5, 2, 1]
/**
 * Declaring the array elements.
 */
var amount = read.question("Enter the amount :");
access.vendingMachine(arr, amount);//Invoking the vendingMachine function.