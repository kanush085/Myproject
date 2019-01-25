/***********************************************************
 *
 * Execution      :Default node    cmd>node windChill.js
 * Purpose        :To find the roots of the equations.
 * 
 *@description 
 * 
 *
 *@file          :windChill.js
 *@overview      :windChill takes the userinput commands and computes the wind chill .    
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
Access.windChill();//Invoking the windChill function.
