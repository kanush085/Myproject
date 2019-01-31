/***********************************************************
 *
 * Execution      :Default node    cmd>node unOrderList.js
 * Purpose        :To find all permutation in the given string.
 *@description 
 * 
 *
 *@file          :unOrderList.js
 *@overview      :unOrderList permutation of a String using iterative method and Recursion method.    
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :30/01/2019
 * 
 ***********************************************************/
var access = require('../Utility/utilityDataStructures');
var M = require('../Utility/utility');
var read = require('readline-sync');
var arr = M.fileRead();
var L = new access.LinkedList;
var word = read.question("Enter the word to searched :")
try {
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        L.add(arr[i])
    }
    var found = L.search(word)
    if (found == true) {
        L.remove(word)
        var output = L.print()
        M.fileWrite('sample.txt', output);
    }
    else {
        L.add(word)
        var out = L.print();
        M.fileWrite('sample.txt', out);
        console.log(out);
    }
}
catch (error) {
    console.log(error.message);
}
