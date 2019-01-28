/***********************************************************
 *
 * Execution      :Default node    cmd>node DayofWeek.js
 * Purpose        : To find the day of week using by formula and 
 *                  taking command line arguments inputs.
 *@description 
 * 
 *
 *@file          :DayofWeek.js
 *@overview      :DayofWeek takes the  command line arguments inputs from the user and finds out day of the week using formula.    
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :28/01/2019
 * 
 ***********************************************************/
var Access = require('../Utility/utility');
/**
 * For accessing data from utility file.
 */
var read = require('readline-sync');
var date = Number(process.argv[2]);
var month = Number(process.argv[3]);
var year = Number(process.argv[4]);
/**
 * Taking command line arguments inputs from the user.
 */
var result = Access.DayofWeek(date, month, year) //Invoking the DayofWeek function.
console.log(result);

