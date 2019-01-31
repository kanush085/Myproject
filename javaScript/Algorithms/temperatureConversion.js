/***********************************************************
 *
 * Execution      :Default node    cmd>node temperatureConversion.js
 * Purpose        :Conversion of temperature to fahrenheit and Celsius.
 *@description 
 * 
 *
 *@file          :temperatureConversion.js
 *@overview      :temperatureConversion takes the user input choice to convert the temperature to fahrenheit and Celsius.    
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :28/01/2019
 * 
 ***********************************************************/
var access = require('../Utility/utility');
/**
 * For accessing data from utility file.
 */
var read = require('readline-sync');
access.temperatureConversion(read);//Invoking temperatureConversion function method.