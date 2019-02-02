/***********************************************************
 *
 * Execution      :Default node    cmd>node binaryTree.js
 * Purpose        :To balance paranthesis  in the mathematical expression.
 *@description 
 * 
 *
 *@file          :binaryTree.js
 *@overview      :binaryTree to find the number of different binary search trees that can be created using these nodes.
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :02/02/2019
 * 
 ***********************************************************/
var access = require('../Utility/utilityDataStructures');
var M = require('../Utility/utility');
var read = require('readline-sync');
var number = read.questionFloat("Enter the number :")
var factorial = access.binaryTree(number)
var factorial1 = access.binaryTree(2*(number));
var factorial2 = access.binaryTree(number + 1)
var output = (factorial1) / (factorial2 * factorial)
console.log(output);

