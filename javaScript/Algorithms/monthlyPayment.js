/***********************************************************
 *
 * Execution      :Default node    cmd>node monthlyPayment.js
 * Purpose        :Calculates the monthly payments using formula how much the pay off principal amount should 
 *                 be paid monthly.
 *@description 
 * 
 *
 *@file          :monthlyPayment.js
 *@overview      :monthlyPayment takes the user input command  Principal,rate,Years to calculate the monthly payment using formula.    
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
Access.monthlyPayment();//Invoking monthlyPayment function.