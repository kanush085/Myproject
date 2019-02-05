/***********************************************************
 *
 * Execution      :Default node    cmd>node hashingFunction.js
 * Purpose        :To find the prime number in given range. 
 *@description 
 * 
 *
 *@file          :hashingFunction.js
 *@overview      :Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 
                  Store the prime numbers in a 2D Array, the first dimension represents the range 0-100, 100-200, 
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :04/02/2019
 * 
 ***********************************************************/
var util = require('../Utility/utilityDataStructures');
function primes() {
    try{
    var primes = [];
    var start = 0;
    var end = 100;
    for (let i = 0; i < 10; i++) {
        primes[i] = util.isPrime(start, end)
        console.log(start + " " + end + ":" + "[" + primes[i] + "]");
        start = start + 100;
        end = end + 100;
    }
}
catch (err) {
    console.log(err.message);
}
}
primes();