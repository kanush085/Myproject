/***********************************************************
 *
 * Execution      :Default node    cmd>node Anagram.js
 * Purpose        :function to check whether two strings are anagram of each other.
 *@description 
 * 
 *
 *@file          :Anagram.js
 *@overview      :Anagram takes 2 string   userinput to check that given string is anagram or nots.    
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
var str = read.question("Enter the string 1 :");
var str1 = read.question("Enter the string 2 :");
/**
 * Accepting the user inputs.
 */
var result=access.isAnagram(str, str1);//Invoking the isAnagram function.
console.log(result);
