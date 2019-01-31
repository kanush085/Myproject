/***********************************************************
 *
 * Execution      :Default node    cmd>node stringPermutations.js
 * Purpose        :To find all permutation in the given string.
 *@description 
 * 
 *
 *@file          :stringPermutations.js
 *@overview      :stringPermutations permutation of a String using iterative method and Recursion method.    
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :30/01/2019
 * 
 ***********************************************************/

/*
For accessing data from utility file
*/
var access = require("../Utility/utility");
var readline = require("readline-sync");
/**
 * Asker user to input the string for which permutation has to be found
 */
var string = readline.question("Enter the string :")
/*
 *Invoking stringPermutations function by passing string, from utility.js.
 */
console.log(access.stringPermutations(string));