/***********************************************************
 *
 * Execution      :Default node    cmd>node searchWord.js
 * Purpose        :To search a  word from the file where it contains list of words using binary search method.
 *@description 
 * 
 *
 *@file          :searchWord.js
 *@overview      :searchWord takes the user input to search list of word from the file using binary search method.    
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :29/01/2019
 * 
 ***********************************************************/
var access = require('../Utility/utility');
/**
 * For accessing data from utility file.
 */
var read = require('readline-sync');
access.searchWord();//Invoking searchWord function.