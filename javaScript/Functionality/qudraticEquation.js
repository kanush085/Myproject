access/***********************************************************
 *
 * Execution      :Default node    cmd>node Qudractic.js
 * Purpose        :To find the roots of the equations.
 * 
 *@description 
 * 
 *
 *@file          :Qudractic.js
 *@overview      :Qudractic takes the userinput and prints the roots of the equations.    
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :25/01/2019
 * 
 ***********************************************************/
var access=require('../Utility/utility');
/**
 * For accessing data from utility file.
 */
var read=require('readline-sync');
var a=read.question("Enter a value:");
var b=read.question("Enter b value:");
var c=read.question("Enter c value:");
/**
 * Taking the user input.
 */
access.qudractic(a,b,c);//Invoking the Quadratic function.