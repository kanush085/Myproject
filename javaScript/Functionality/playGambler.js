access/***********************************************************
 *
 * Execution      :Default node    cmd>node Gambler.js
 * Purpose        :Print Number of Wins and Percentage of Win and Loss.
 *@description 
 * 
 *
 *@file          :Gambler.js
 *@overview      :Gambler takes the userinputs and keeps track of the number of times he/she wins and the number of bets he/she makes    
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :24/01/2019
 * 
 ***********************************************************/

var access = require('../Utility/utility');
/**
 * For accessing data from utility file.
 */
var readline = require('readline-sync');
access.gambler();//Invoking Gambler function.