/***********************************************************
 *
 * Execution      :Default node    cmd>node hashingFunction.js
 * Purpose        :To search the number in the file from the user input. 
 *@description 
 * 
 *
 *@file          :hashingFunction.js
 *@overview      :Create a Slot of 10 to store Chain of Numbers that belong to each Slot to efficiently search a number from a given set of number
                  read a set of numbers from a file and take user input to search a number.
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :04/02/2019
 * 
 ***********************************************************/
var access = require('../Utility/utilityDataStructures');
var readline = require('readline-sync');
var take = require('util');
var filestream = require('fs');
var utility = require('../Utility/utility');
function hashing() {
    var fileRead = filestream.readFileSync('hashNumbers.txt', 'utf8');
    var nArray = fileRead.split(' ');
    var arr = []
    console.log(nArray);
    /**
     * Loop the array till its length and add it to array.
     * 
     */
    for (let i = 0; i < nArray.length; i++) {
        var n = Number(nArray[i]);
        var remainder = n % 10;
        if (arr[remainder] === undefined) {
            arr[remainder] = new access.LinkedList;
            arr[remainder].add(n);
        } else {
            arr[remainder].add(n);
        }
    }
    var str = "";
    /**
     * Loop the index till 10 and print it .
     */
    for (let index = 0; index < 10; index++) {
        take.print(index + " slot: ");
        try {
            console.log(arr[index].print());
        } catch (err) {
            console.log("empty index");
        }
    }
    console.log()
    var valid = false;
    /**
     * validating the input.
     */
    do {
        var number = readline.question('Enter the number you want to search \n');
        if (isNaN(number) && number < 0) {
            console.log("Enter positive number only greater than zero");
        } else {
            valid = true;
        }
    } while (!valid);
    remainder = Number(number % 10);
    console.log("Remainder is " + remainder);

    if (arr[remainder] === undefined) {
        arr[remainder] = new access.LinkedList;
    }
    if (arr[remainder].search(Number(number))) {
        console.log("The number is present in the file");
        arr[remainder].remove(number);

    } else {
        console.log("Number is not in the file");
        arr[remainder].add(number);
    }
    var flag;
    for (let index = 0; index < 10; index++) {
        flag = true;
        take.print(index + " result slot: ");
        try {
            console.log(arr[index].print());
            str = str + arr[index].print();
        } catch (err) {
            console.log("Empty index");
        }
    } console.log(str);
    utility.fileWrite('hashNumbers.txt', str);

    console.log("\n\n");
}
hashing();