/***********************************************************
 *
 * Execution      :Default node    cmd>node stringReplace.js
 * Purpose        :Replace String Template "Hello <<UserName>>, How are you?"with proper username
 * 
 *@description 
 * 
 *
 *@file          :stringReplace.js
 *@overview      :stringReplace takes the userinput and print it with some sentence.    
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@purpose       :stringReplace
 *@since         :24/01/2019
 * 
 ***********************************************************/
var access = require('../Utility/utility');
/**
 * For accessing data from utility file.
 */
var read = require('readline-sync');
var name = read.question("Enter your name: ");
/**
 * Taking the user input.
 */
access.stringReplace(name);//Invoking the stringReplace function.
