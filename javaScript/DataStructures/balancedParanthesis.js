/***********************************************************
 *
 * Execution      :Default node    cmd>node balancedParanthesis.js
 * Purpose        :To balance paranthesis  in the mathematical expression.
 *@description 
 * 
 *
 *@file          :balancedParanthesis.js
 *@overview      :balancedParanthesis  parentheses are used to order the Mathmatical operations.
 *                Ensure parentheses must appear in a balanced fashion. 
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :01/02/2019
 * 
 ***********************************************************/
var access = require('../Utility/utilityDataStructures');
var M = require('../Utility/utility');
var read = require('readline-sync');
function Stack() {
    var stack = new access.Stack;
    var str = read.question("Enter the mathematical expression to be checked :");
    for (let i = 0; i < str.length; i++) {
        ch = str.charAt(i);
        /**
         * Condition to check paranthesis if it is push it to stack.
         */
        if (ch == '(' || ch == '{' || ch == '[') {
            stack.push(ch);
        }
        else {
            /**
             * Switch case to check different case of paranthesis is balanced or not if it is return true.
             */
            switch (ch) {
                case ')': if (stack.pop() != '(') {
                    return false;
                }
                    break;
                case '}': if (stack.pop() != '{') {
                    return false;
                }
                    break;
                case ']': if (stack.pop() != '[') {
                    return false;
                }
                    break;
            }
        }
    }
    if (stack.size == 0) {
        return true;
    }
    return false;
}
var output = Stack();
console.log(output);
if (output) {
    console.log("Arithmetic Expression is balanced");
}
else {
    console.log("Arithmetic Expression is not balanced");
}
