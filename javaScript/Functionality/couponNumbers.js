/***********************************************************
 *
 * Execution      :Default node    cmd>node couponNumber.js
 * Purpose        :To generate the coupon number using math.rondom.
 *@description 
 * 
 *
 *@file          :couponNumber.js
 *@overview      :couponNumber takes the userinput to generate the couponNumber which is unique.    
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
var number = read.question("Enter the number to generate the coupon :");
access.couponNumber(number);//Invoking the Coupon function.