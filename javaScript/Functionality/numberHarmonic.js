access/***********************************************************
 *
 * Execution      :Default node    cmd>node Harmonic.js
 * Purpose        :To print harmonic number value.
 * 
 *@description 
 * 
 *
 *@file          :Harmonic.js
 *@overview      :Harmonic takes the userinput and prints the Nth harmonic value.    
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :24/01/2019
 * 
 ***********************************************************/
var access = require('../Utility/utility');
/**
 * For accessing data from utility file.
 */
var read = require('readline-sync');
var number = read.question("Enter the number:");
/**
 * Taking the user input.
 */
access.harmonic(number);//Invoking the harmonic function.