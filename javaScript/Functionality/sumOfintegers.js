/***********************************************************
 *
 * Execution      :Default node    cmd>node findTriplets.js
 * Purpose        :Prints all triplets in array with 0 sum.
 * 
 *@description 
 * 
 *
 *@file          :findTriplets.js
 *@overview      :findTriplets takes the userinput find three elements whose sum is equal to zero .    
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :25/01/2019
 * 
 ***********************************************************/
var Access=require('../Utility/utility');
/**
 * For accessing data from utility file.
 */
var read=require('readline-sync');
var size=read.question("Enter the array size :")
/**
 * Take the user input for declaring the array size.
 */
Access.findTriplets(size);//Invoking findtriplets function