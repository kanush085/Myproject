/***********************************************************
 *
 * Execution      :Default node    cmd>node primeAnagram1.js
 * Purpose        :Prime Numbers that are Anagram in the Range of 0 - 1000 . 
 *@description 
 * 
 *
 *@file          :primeAnagram1.js
 *@overview      :Prime Numbers that are Anagram in the Range of 0 - 1000
                  store in a 2D Array the numbers that are Anagram and numbers that are not Anagram.
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :04/02/2019
 * 
 ***********************************************************/
var access = require('../Utility/utilityDataStructures');
var M = require('../Utility/utility')
var T=require('util')
var readline = require('readline-sync');
try
{
var array = [["0-100 "], ["100-200  "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
var i = 0; var j = 1; var range = 100;
var arr = []
var arr1 = []
var arr2 = []
/**
 * Loop to find the prime number till 1000.
 */
for (let prime = 2; prime <= 1000; prime++) {
    if (M.isPrime(prime)) {

        if (prime <= range) {
            var a = "" + prime
            var b = a.split("")
            b.sort()
            var v = ""
            for (let i = 0; i < b.length; i++) {
                v = v + b[i]
            }
            /**
             * Condition to check array includes the number if not push it array.
             */
            if (!arr.includes(v)) {
                arr.push(v)
                array[i][j] = prime;
                j++;
            }
        }
        else {
            var a1 = "" + prime
            var b1 = a1.split("")
            b1.sort()
            var v1 = ""
            for (let i = 0; i < b1.length; i++) {
                v1 = v1 + b[i]
            }
             /**
             * Condition to check array includes the number if not push it array.
             */
            if (!arr1.includes(v1)) {
                arr1.push(v1)
                j = 1;
                range = range + 100;
                i++;
                array[i][j] = prime;
            }
        }
    }
}
var arr=access.dArray();
console.log("The prime numbers that are not Anagram presents in the given range ");
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        T.print(array[i][j] + " ");
    }
    //utility.mark1(array)
    console.log();
}
}
catch(err)
{
    console.log(err.message);
    
}