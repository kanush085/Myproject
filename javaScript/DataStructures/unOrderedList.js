/***********************************************************
 *
 * Execution      :Default node    cmd>node unOrderList.js
 * Purpose        :To read list of words from the file and add it to the file and remove it from th file and save it.
 *@description 
 * 
 *
 *@file          :unOrderList.js
 *@overview      :unOrderList Read list of words from the file if it is  found remove it else add it to the file.
 *                 
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :31/01/2019
 * 
 ***********************************************************/
var access = require('../Utility/utilityDataStructures');
var M = require('../Utility/utility');
var read = require('readline-sync');
var fileread = require('fs')
var f = fileread.readFileSync('sample.txt', 'utf8');
var arr = f.trim().toLocaleLowerCase().split(' ');
var L = new access.LinkedList;
var word = read.question("Enter the word to searched :")
word = word.toLocaleLowerCase()
try {
    /**
    * Loop condition to convert the string int integer and store it in array.
    */
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        L.add(arr[i])
    }
    var found = L.search(word)
    if (found == true) {
        L.remove(word)
        var output = L.print()
        M.fileWrite('sample.txt', output);
        console.log(output);
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
