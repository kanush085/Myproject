/***********************************************************
 *
 * Execution      :Default node    cmd>node leapYear.js
 * Purpose        :To find the leap yaer
 * 
 *@description 
 * 
 *
 *@file          :leapYear.js
 *@overview      :leapYear takes the userinput and print weather it is leap year or not..    
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
var year = read.question("Enter the year format YYYY:");
/**
 * Taking the user input.
 */
Access.leapYear(year);//Invoking the leapyear function.