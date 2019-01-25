/***********************************************************
 *
 * Execution      :Default node    cmd>node stopWatch.js
 * Purpose        :Is to calculate the time elapsed betweem the start and stop.
 * 
 *@description 
 * 
 *
 *@file          :stopWatch.js
 *@overview      :stopWatch takes the userinput measure the elapsed time between start and end.    
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
Access.readTime(read);//Invoking readTime function