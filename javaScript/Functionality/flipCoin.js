access/***********************************************************
 *
 * Execution      :Default node    cmd>node FlipCoin.js
 * Purpose        :To find the percentage of coins fliped heads and tails.
 * 
 *@description 
 * 
 *
 *@file          :FlipCoin.js
 *@overview      :Sum the number of times the count of heads and tails,calculate the percentage..    
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@purpose       :stringReplace
 *@since         :24/01/2019
 * 
 ***********************************************************/

var access=require('../Utility/utility');
var read=require('readline-sync');
var flip=read.question("Enter number of times the coin to flip :");
access.flipCoin(flip);//Invoking the flipcoin function.