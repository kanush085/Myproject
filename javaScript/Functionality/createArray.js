/***********************************************************
 *
 * Execution      :Default node    cmd>node creatArray.js
 * Purpose        :To display the array elements in the array.
 *@description 
 * 
 *
 *@file          :creatArray.js
 *@overview      :creatArray takes the userinput and display the elements in array.    
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :25/01/2019
 * 
 ***********************************************************/
var access = require('../Utility/utility');
/**
 * For accessing data from utility file.
 */
var read = require('readline-sync');
var rows = read.question("Enter number of rows : ");
/**
 * Taking the user input to enter number of rows.
 */
var cols = read.question("Enter number of cols :");
/**
 * Taking the user input to enter number of cols.
 */
access.creatArray(rows, cols, read);//Invoking the creatArray function.