/***********************************************************
 *
 * Execution      :Default node    cmd>node orderList.js
 * Purpose        :To read list of integers from the file and add it to the file and remove it from th file and save it.
 *@description 
 * 
 *
 *@file          :orderList.js
 *@overview      :orderList Read from file and sort the integer and adds in position if the integer is not found
 *                if the integer is found remove from the file.
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :01/02/2019
 * 
 ***********************************************************/
var access = require('../Utility/utilityDataStructures');
var M = require('../Utility/utility');
var read = require('readline-sync');
var arr1 = M.fileRead();
var arr = [];
console.log("before sort: " + arr1);
/**
 * Loop condition to convert the string int integer and store it in array.
 */
for (let i = 0; i < arr1.length; i++) {
    arr[i] = parseInt(arr1[i]);
}
M.mergeSort(arr)
console.log("After sort: " + arr);

var L = new access.LinkedList;
var number = read.question("Enter the number to searched :");
try {
    /**
     * Loop to add all the integer into the list.
     */
    for (let i = 0; i < arr.length; i++) {
        L.add(arr[i])
    }
    var found = L.search(number)
    if (found == true) {
        L.remove(number)
        var output = L.print()
        M.fileWrite('sample1.txt', output)
        console.log(output);
    }
    else {
        console.log(arr);
        var pos = L.addPos(arr, number)
        console.log("position :" + pos);
        L.insertAt(number, pos)
        var out = L.print();
        M.fileWrite('sample1.txt', out)
        console.log(out);
    }
} catch (error) {
    console.log(error.message);

}