/***********************************************************
 *
 * Execution     :Default node      cmd>node filename.js
 * Purpose       :To deploy all the business logic.
 * 
 *@description 
 * 
 *
 *@file          :utility.js
 *@overview      :All the business logic are coded here.
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :24/01/2019
 * 
 ***********************************************************/
const readline = require('readline-sync');
module.exports = {


    /**
     * 
     * 
     * @purpose  :To accept array elements from user.
     * 
     */
    inputArray() {
        var arr = [];
        /**
         * Ask the user size of the array and store the elements.
         * 
         */
        var size = readline.question("Enter the size of the array :");
        for (let i = 0; i < size; i++) {
            arr[i] = readline.question("Enter the array elements :");
        }
        return arr;
    },
    /***** String replace *****/
    /*
     * 1. username wit minmum 3 characters and not a number 
     * with userinput
     * 
     
     *@description: Declaring the function and passing the userinput as argument.
     * 
     * 
     * @purpose: display the username with given inputs
     *
     * @function: It takes the userinput and print it with some sentence.
     */
    stringReplace(username)//takes the user inputs 
    {
        try {


            var fr = /[a-zA-Z]/
            /**
             * 
             * condition to check username should have min 3 characters.
             * 
             */
            if (username.length > 3 && isNaN(username) && fr.test(username)) {


                var input = "Hello <<username>> , how are you?";
                var output = input.replace(/<<username>>/g, username);
                console.log(output + " : Replace string using Regex ")
            }
            else {
                console.log("enter minmum 3 char and alphabetics only");

            }
        }
        catch (err) {
            console.log(err.message);

        }

    },
    /***********flip[coin************/
    /***
     * 1.user input to flip the coin number of times.
     * 
     *@description:Declaring the function and passing the user input as argument.
     * 
     *@purpose:Display the percentage of coins fliped heads and tails.
     * 
     * @function:coinflip takes the no of times to flip coin and print the percentage of head and tail
     */
    flipCoin(flip) {
        try {


            var head = 0, tail = 0;
            /**
             * 
             * loop over till the user input and increment count.
             * 
             */
            for (let i = 0; i <= flip; i++);
            {
                /**
                 * 
                 * condition to check math.random is>0.5 if it is then increment the head.
                 * 
                 */
                if (Math.random() > 0.5) {
                    head++;
                }
                /**
                 * 
                 * else to increment the tail.
                 * 
                 */
                else {
                    tail++;
                }
                var res = head * 100 / flip;
                console.log("Percentage of head :" + res + "%");
                var res1 = 100 - res;
                console.log("Percentage of tail :" + res1 + "%");


            }
        }
        catch (err) {
            console.log(err.message);

        }


    },
    /*************leapYear****************/
    /**
     * 1.user input to find leap year.
     * 
     * @description:Declaring the function and passing the user input as argument.
     * 
     * @purpose:Print weather the year is leap year or not.
     * 
     * @function:Checks length of the given number, if length equals to 4, then it prints 
     * given number is Leap year or not.
     */
    leapYear(year) {
        try {
            /**
             * 
             *  condition to check weather year is 4 digit & is number 
             * 
             */
            if (year.length = 4 && !isNaN(year) && year > 0) {
                /**
                 * 
                 * condition to check the year is leap year or not.
                 * 
                 */
                if (year % 4 == 0 || year % 400 == 0 || year % 100 == 0) {

                    console.log(year + " Is a leap year");

                }
                else {
                    console.log(year + " Is not leap year");

                }
            }
            else {
                console.log("please enter vaild 4 digit number");

            }
        }
        catch (err) {
            console.log(err.message);

        }
    },


    /******************powerOf2*********************/
    /**
     * 1.Command line inputs to find the power
     * 
     * @description: This program takes a command-line argument N and prints a table of the powers of 2 that are less than or equal to 2^N.
     * 
     * @purpose:To print the power table of 2.
     * 
     * @function:function checks the given number is less then 31, if less then 31, then it prints
          the value of two's power i.e., 2^N value.
     */
    power() {
        try {
            var pow = process.argv[2]
            /**
             * 
             * condition to check pow 0 <= N < 31 since 2^31. 
             * 
             */
            if (pow >= 0 && pow <= 31 && !isNaN(pow)) {
                if (pow == 0) {
                    console.log(1);

                }
                /**
                 * 
                 * codition to loop over till userinput.
                 */
                for (let i = 1; i <= pow; i++) {

                    console.log(Math.pow(2, i));
                }

            }
            else {
                console.log("Enter the power less than 2^31");

            }
        }
        catch (err) {
            console.log(err.message);
        }
    },


    /****************Harmonic****************/
    /**
     * 1. To find the harmonic number.
     * 
     * @description:Prints the Nth harmonic number.
     * 
     * @purpose: Print the Nth Harmonic Value.
     * 
     * @function:function Harmonic takes user input and sum it number of times that user given.
     */
    harmonic(number) {
        try {


            var sum = 0;
            /**
             * 
             * condition to check number is not equal to zero.
             * 
             */
            if (number != 0) {
                /**
                 * 
                 * loop over till user inputs and increment it.
                 * 
                 */
                for (let i = 1; i <= number; i++) {
                    sum += (1 / i);
                }
                console.log("Harmonic value " + number + " = " + sum);

            }
            else {
                console.log("Please enter the number");

            }
        }
        catch (err) {
            console.log(err.message);

        }
    },
    /***************primeFactors*****************/
    /*1.Number to find the prime factors
     * 
     *@description:Computes the prime factorization of N using brute force.
     *
     *@purpose:Print the prime factors of number N.
     * 
     *@function:Function harmonicNumber takes user input and adds it to 1/number of times of user input.
     */
    primeFactors(num) {
        try {
            /**
             * 
             * loop over till userinputs is equal to num.
             * 
             */
            for (let i = 2; i * i < num; i++) {
                /**
                 * 
                 * condition to check given input modulus is zero.
                 * 
                 *  */
                while (num % i == 0) {
                    console.log(i);
                    num = num / i;

                }
            }
            /**
             * 
             * To check the num is greater than 2.
             */
            if (num > 2) {
                console.log(num);

            }
        }
        catch (err) {
            console.log(err.message);

        }
    },

    /*******************Distance*********************/

    /**
     * 1.To find the distance from origin.
     * 
     * @description:To calculate the distance from the point(x,y)
     * 
     * @purpose:To print the distance from origin.
     * 
     * @function:Function factorization accepts user input, loops over it till the input,
    *            if the number is divisible by each number, print the number.
     */
    Distance() {
        try {
            var a = process.argv[2];
            var b = process.argv[3];
            /**
             * Taking user input command line arguments.
             */

            if (!isNaN(a) && !isNaN(b)) {
                var distance = Math.sqrt(a * a + b * b);
                console.log("Distance form Origin is : " + distance);
            }
            else {
                console.log("enter the number only");

            }

        } catch (err) {
            console.log(err.message);

        }
    },

    /***************Gambler*************** */
    /**
     * 1.To find the number bets he/she makes
     * 
     * @description: Evaluate a gambler who start with stake and place bets until he/she goes broke.
     *  Keeps track of the number of times he/she wins and the number of bets he/she makes. 
     * 
     * @purpose:To find out the win and loss percentage. 
     * 
     * @function:Function gambler takes the stake ,if math.random >0.5 increment the stake
     * else increment the loss and decrement the stake ,and keep the count number times bets,
     * and prints the number of percentage of win and loss. 
     * 
     */
    gambler() {
        try {
            var win = 0;
            var loss = 0;
            var times = 0;
            /**
             * 
             * Accept user input for stake  amount and goal amount
             * 
             */
            var stake = readline.question("Enter the intial stake amount:")
            var goal = readline.question("Enter the goal amount to be achieved:")
            if (stake > 0 && stake < goal && !isNaN(stake, goal)) {
                /**
                 * 
                 * loop over till the stake is less the goal and more than 0.
                 * 
                 */
                while (stake > 0 && stake < goal) {
                    /**
                     * 
                     * if random value genrated by math.random function is greater than 0.5
                     * increment win and stake.
                     * 
                     */
                    if (Math.random() > 0.5) {
                        win++;
                        stake++;
                    }
                    else {
                        loss++;
                        stake--;

                    }
                    /**
                     * 
                     * keep count of number of times the loop is exceuted to keep a track of number of times he/she bets
                     * 
                     */
                    times++;

                }
                console.log("Number of bets he/she makes:" + times);
                console.log("Number of wins" + win);
                /**
                 * To find out the win and loss percentage divide win by number of times of bet.
                 * 
                 */
                wp = (win / times) * 100;
                lp = (loss / times) * 100;
                console.log("Win percentage:" + wp);
                console.log("Loss percentage:" + lp);


            }
            else {
                console.log("Stake amnt should be less than goal amnt");

            }

        } catch (error) {
            console.log(error.message);

        }
    },

    /*******************findRootsofEquations*********************/
    /**
     * 1.To find the roots of the quations.
     *  
     * @description: Take a, b and c as input values to find the roots of x.
     * 
     * @purpose:To find real and imaginery parts of the quation. 
     *  
     * @function:To find the roots of the equation a*x*x + b*x + c.
     */

    Qudractic(a, b, c) {
        try {
            var d1 = b * b - (4 * a * c);
            /**
             * Condition for real and equal roots
             */
            if (d1 == 0) {
                var c1 = -b / (2 * a);
                console.log(c1);

            }
            /**
             *  condition for real and different root
             */
            else if (d1 > 0) {
                var root1 = (-b + Math.sqrt(d1)) / (2 * a);
                var root2 = (-b - Math.sqrt(d1)) / (2 * a)

                console.log("First root:" + root1);
                console.log("Second root:" + root2);

            }
            /**
             * If roots are not real
             */
            else if (d1 < 0) {
                var real = -b / (2 * a);
                var impart = Math.sqrt(-d1) / (2 * a);
                console.log("First root: " + real + " i " + impart);
                console.log("Second root: " + real + " -i " + impart);


            }
            else {
                console.log("Something wrong");

            }
        }
        catch (err) {
            console.log(err.message);

        }

    },


    /****************findWindchill***************** */
    /**
     * 1.To find Wind chill using temperature and speed.
     * 
     * @description:Takes the user commands inputs and calculate the windchill using temperature and speed.
     * 
     * @purpose:To compute wind chill using formula.
     * 
     * @function:Given the temperature t (in Fahrenheit) and the wind speed v
            (in miles per hour), compute the wind chill.
     */
    windChill() {
        try {

            var t = process.argv[2];
            var v = process.argv[3];
            /**
             * Validating the temperature should not be  larger than 50 in absolute value or if  wind speed is larger 
             * should be less than 120 or greater than 3 .
             * 
             */
            if (Math.abs(t) < 50 && (v < 120 && v > 3)) {

                var w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
                /**
                 * National Weather Service defines the effective temperature (the wind chill) to be:
                 */
                console.log("Temperature :" + t);
                console.log("Wind speed :" + v)
                console.log("Wind chill :" + w);

            }
            else {
                console.log("Enter proper value");

            }
        } catch (err) {
            console.log(err.message);

        }

    },
    /*****************findTriplets******************* */
    /**
     * 1.find three elements whose sum is equal to zero.
     * 
     * @description:A program with cubic running time. Read in N integers and counts the   
     * number of triples that sum to exactly 0.
     * 
     *@purpose: Prints all triplets in array with 0 sum.
     *
     * @function:Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
     */
    findTriplets(s1) {
        try {
            var find = true;
            var array = [];
            var count = 0;

            for (let i = 0; i < s1; i++) {
                array[i] = readline.question("Enter element :");
                /**
                 * Loop over till array size is equal to userinput and
                 * take the user input elements and push it to array.
                 * 
                 */
            }
            console.log(array);
            /**
             * Looop over till all triplets in arr[] with 0 sum 
             */
            for (let i = 0; i < array.length - 2; i++) {
                for (let j = i + 1; j < array.length - 1; j++) {
                    for (let k = j + 1; k < array.length; k++) {
                        if (Number(array[i]) + Number(array[j]) + Number(array[k]) == 0) {
                            console.log(array[i] + " " + array[j] + " " + array[k]);
                            count++;
                            find = true;
                        }
                    }
                }
            }
            console.log(count);

            // If no triplet with 0 sum found in array 
            if (find == false) {
                console.log("does not exists");

            }

        }
        catch (err) {
            console.log(err.message);

        }


    },
    /*********************stopWatch***********************/
    /**
     * 1.Start the Stopwatch and End the Stopwatch
     * 
     * @description:Measuring the time that elapses between the start and end clicks.
     * 
     * @purpose:Print the elapsed time.
     * 
     *@function: Is to calculate the time elapsed betweem the start and stop.
     *            Press 0 to start. 
     *            Press 1 to stop.    
     */

    stopWatch(read) {
        try {
            /**
             * starttm accepts the user inputs and start watch;
             */
            var starttm = read.question("Press Enter to start :");
            var start = new Date();
            var stoptm = read.question("Press Enter to stop :");
            /**
            * stoptm accepts the user inputs and stop the watch.
            */
            var stop = new Date();
            var tTime = stop - start;
            /**
            * tTime prints the interval time between start and stop.
            */
            tTime /= 1000;
            var seconds = Math.round(tTime);
            console.log(seconds + " sec ");


        }

        catch (error) {
            console.log(error.message);

        }
    },
    /*****************couponNumbers********************/
    /**
     * 1..N Distinct Coupon Number
     * 
     * @description:Given N distinct Coupon Numbers,need to generate random coupon numbers
     * this code simulates this in  random process.
     * 
     * @purpose:To generate the coupon number using math.rondom
     * 
     * @function:Is to generate random number and to process distinct coupons.
    
     */
    Coupon(number) {
        try {
            var num = 0;
            var array = [];
            var rannumber;
            while (num < number) {
                /**
                 * Loop over till where num is equal to userinput to generate the coupon number.
                 */
                rannumber = Math.round(Math.random() * 123456789);
                if (!array.includes(rannumber)) {
                    array.push(rannumber)
                }
                /**
                 * Condition pushs the ranrandom number to the array if the are unique.
                 * 
                 */
                num++;
            }
            console.log("Coupon Numbers :" + array);

        } catch (error) {
            console.log(error.message);

        }
    },
    /******************2DArray*******************/
    /**
     * 1.create 2 dimensional array in memory to read in M rows and N cols 
     * 
     *  @description:Taking the user inputs elements to print 2 Dimensional Array.
     *  
     * @purpose:To dispaly the array elements in 2D array.
     * 
     * @function:M rows, N Cols, and M * N inputs for 2D Array. 
     */

    creatArray(rows, cols, read) {
        try {
            var array = []
            for (let i = 0; i < rows; i++) {
                /**
                 * Loop over till rows is equal to the userinput.
                 */
                array.push([])
                /**
                 * Pushing the array.
                 */
                for (let j = 0; j < cols; j++) {
                    /**
                     * Loop over till cols is equal to the userinput.
                     */
                    var element = read.question("Enter the elements into array:");
                    array[i][j] = element;
                    /**
                     * taking the user input elements and storing into array. 
                     */
                }
            }
            console.log(array);



        } catch (error) {

        }
    },
    /**
     * 1.Permutations of a String.
     *
     * @description:Permutation of a String using iterative method and Recursion method.
     * 
     * @purpose:To find all permutation in the given string.
     *  
     * @function:Using iterative method to find all permutation in the string.
     */
    stringPermutations(string) {
        try {
            var results = [];
            /**
             * if string is a single character add the character to results and return results
             */
            if (string.length === 1) {
                results.push(string);
                return results;
            }
            /**
             * for each char in string define innerPermutations as a char of string
             * set innerPermutations to stringPermutations (without next char).
             */
            for (var i = 0; i < string.length; i++) {
                var firstChar = string[i];
                var charsLeft = string.substring(0, i) + string.substring(i + 1);
                var innerPermutations = this.stringPermutations(charsLeft);
                /**
                 * foreach string in innerPermutations add defined char and innerPermutations char
                 * return results
                 */
                for (var j = 0; j < innerPermutations.length; j++) {
                    results.push(firstChar + innerPermutations[j]);
                }
            }
            return results;
        } catch (error) {
            console.log("error.message");
        }
    },

    /**************************************************************************************** */








    /*****************************************Algorithms********************************************** */


    /******************Anagram******************** */

    /**
     * 1.ake 2 Strings as Input  and Check for Anagrams
     * 
     * 
     * @description:One string is an anagram of another if the second is simply
     *  a rearrangement of the first.
     * 
     * @purpose:To display the string is anagram are not.
     * 
     * @function:function to check whether two strings are  
     *           anagram of each other.
     */
    isAnagram(s, s1) {
        try {
            var format = /[a-zA-Z0-9]/;
            var result;
            /**
             * Condition to check if the input is only charcter.
             */
            if (format.test(s) && format.test(s1)) {
                /**
                 * Condition to check the length of the first word and seconf=d word is same.
                 */
                if (s.length !== s1.length) {
                    result = false;
                }
                /**
                 * Split the string into an array
                 * Sort the array alphabetically.
                 * join the elements of an array into string and store the sorted string in a string.
                 */
                var sort1 = s.toString().split("").sort().join("");
                var sort2 = s1.toString().split("").sort().join("");
                /**
                 * If sort1 and sort2 string is equal store true in result .
                 * 
                 */
                result = sort1 === sort2;
                /**
                 * If condition check the result is true and print ig give word is anagram.
                 */
                if (result == true) {
                    return true;

                }
                else {
                    return false;
                }
            }
            else {
                console.log("Enter only letters or alphabets only");

            }

        }

        catch (error) {
            console.log(error.message);

        }
    },



    /************************primeNumber************************ */
    /**
     * 1.Find the Prime numbers in that range.
     * 
     * @description:Take a range of 0 - 1000 Numbers from the user  to generate prime number. 
     * 
     * @purpose:In given range to find the prime numbers.
     * 
     * @function:To find the prime numbers in the given range using loop condition.
     */

    isPrime(num) {
        try {
            /**
             * Condition to check if the number  is 0 or 1 if it is return false
             * else true.
             */
            if (num == 0 || num == 1)
                return false;
            /**
             * Loop from 2 till the number is divisble by itself and by 1.
             */
            for (let i = 2; i < num; i++) {
                if (num % i == 0)

                    return false;
            }
            return true;

        } catch (error) {
            console.log(error.message);

        }
    },
    primeNum() {
        try {
            console.log("Prime number in the range 0 to 1000");
            /**
             * Loop from 0 to 1000 and check if it is prime number. 
             */
            for (let i = 0; i <= 1000; i++) {
                if (this.isPrime(i)) {
                    console.log(i);

                }
            }

        } catch (error) {
            console.log(error.message);

        }
    },

    /*************************isPrimePalindromeAnagram**************************** */
    /**
     * 1. To find the prime numbers that are Anagram and Palindrome.
     * 
     * @description:Find the prime numbers and then check for anagram and also palindrome if its then
     *              print the elements.
     * @purpose: To find prime numbers that are Anagram and Palindrome.
     * 
     * @function:To check the palindrome and anagram in prime numbers.
     */
    isNumberPalindrome(num1) {
        try {
            var str = "";
            num1 = num1 + "";
            for (let i = 0; i < num1.length; i++) {
                str = num1.charAt(i) + str;
            }
            if (str == num1) {
                return true;
            }
            return false;
        } catch (error) {

        }
    },

    isAnagramPalindrome() {
        try {
            console.log("Prime numbers in the range 0 to 1000 which are anagram");
            var arr = [];
            /**
             * If the number is Prime push it to array.
             */
            for (let i = 0; i < 1000; i++) {
                if (this.isPrime(i)) {
                    arr.push(i);
                }
            }
            /**
             * Loop continuously from 1st element and second element.
             * Invoke isAnagram and isPalindrome and pass 2 elemets 
             * Print all the elements which are prime anagram,palindrome. 
             * 
             */

            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (this.isAnagram(arr[i], arr[j])) {
                        console.log(arr[i] + "--" + arr[j] + " Is anagram");
                        if (this.isNumberPalindrome(arr[i])) {
                            console.log(arr[i] + " Is palindrome");
                        }
                        if (this.isNumberPalindrome(arr[j])) {
                            console.log(arr[j] + " Is palindrome");
                        }
                    }
                }
            }


        } catch (error) {
            console.log(error.message);

        }
    },

    /*********************bubbleSort********************** */
    /**
     * 1.Sorting the integers using bubble sorted method.
     * 
     * @description:Reads in integers prints them in sorted order using Bubble Sort.
     * 
     * @purpose:Sorting the integers.
     * 
     * @function:Sort the integers using bubble sort method. 
     *  
     */
    bubbleSort(n) {
        try {
            var arr = [];
            for (let i = 0; i < n; i++) {
                arr[i] = readline.question("Enter the element :");
                /**
                 * 
                 * Loop over till array size is equal to userinput and
                 * take the user input elements and push it to array.
                 * 
                 *
                 */
            }
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    /**
                     * Loop over till array length and compare the values .
                     */
                    if (Number(arr[i]) > Number(arr[j])) {
                        /**
                         *  swap temp and arr[i]
                         */
                        var temp = arr[i];
                        arr[i] = arr[j]
                        arr[j] = temp
                    }
                }
            }
            console.log(arr);

        } catch (error) {

        }
    },

    /*********************bubbleSortstr********************** */
    /**
     * 1.Sorting the String using bubble sorted method.
     * 
     * @description:Reads in String prints them in sorted order using Bubble Sort.
     * 
     * @purpose:Sorting the String.
     * 
     * @function:Sort the String using bubble sort method. 
     *  
     */

    bubbleSortstr(num) {
        try {
            var arr = [];
            for (let i = 0; i < num; i++) {
                arr[i] = readline.question("Enter the element :");
                /**
                 * 
                 * Loop over till array size is equal to userinput and
                 * take the user input elements and push it to array.
                 * 
                 *
                 */
            }
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    /**
                     * Loop over till array length and compare the values .
                     */
                    if ((arr[i]) > (arr[j])) {
                        /**
                         *  swap temp and arr[i]
                         */
                        var temp = arr[i];
                        arr[i] = arr[j]
                        arr[j] = temp
                    }
                }
            }
            console.log(arr);

        } catch (error) {
            console.log(error.message);

        }
    },

    /***********************insertionSort**************************/
    /**
     * 1.Sorting the string. 
     * 
     * @description: In strings from standard input and prints them in sorted order.
     *                    Uses insertion sort.
     * 
     * @purpose: To sort the string in standard form.
     * 
     * @function:Takes the user inputs string and sort the string using insertion sort method. 
     */
    insertionSort() {
        try {
            var unsortedList = this.inputArray();
            var length = unsortedList.length;
            for (var i = 1; i < length; i++) {
                var temp = unsortedList[i];
                /**
                 *  Copy of the current element. 
                 *   Check through the sorted part and compare with the number in tmp. If large, shift the number
                 * 
                 */
                for (var j = i - 1; j >= 0 && (unsortedList[j] > temp); j--) {
                    /**
                     * Shift the number.
                     * 
                     *  */
                    unsortedList[j + 1] = unsortedList[j];
                }
                /**
                 * 
                 * Insert the copied number at the correct position
                 *  in sorted part.
                 *  */
                unsortedList[j + 1] = temp;
            }
            console.log("Sorted List:" + unsortedList);

        } catch (error) {

        }
    },


    /***********************toFindnumber****************************** */
    /**
     * 1.To find the number.
     * 
     * @description:takes a command-line argument N, asks you to think of a number between 0 and N-1,
     *  where N = 2^n, and always guesses the answer with n questions.
     * 
     * @purpose: To find the number using Binary Search method.
     * 
     * @function:Use Binary Search to find the number
     *           Print the intermediary number and the final answer.
     */
    toFindnumber(low, high, read) {
        try {

            var mid = low + Math.floor((high - low) / 2);
            /**
             * Finds the mid value and math.floor round of the value if the answer is in decimal.
             */
            var k;
            if (low < high) {
                if (low == high - 1) {
                    k = read.question("Is the number " + low + "If Yes press --> Yes " + "  " + "If No press No");
                    if (k == 'Yes')
                        return low;
                    if (k == 'No')
                        return high;
                }

                k = read.question("Is the number in the range " + mid + "--" + high + "If Yes Press -->Yes " + " " + "If No Press--> No")

                if (k == 'Yes')
                    mid = this.toFindnumber(mid, high, read)
                if (k == 'No')
                    mid = this.toFindnumber(low, mid - 1, read);
            }
            return mid;

        } catch (error) {
            console.log(error.message);


        }
    },
    /************************temperatureConversion***************************/
    /**
     * 1.TemperatureConversion.
     * 
     * @description:Taking the user inputs in temperature and converting  to fahrenheit and Celsius.
     * 
     * @purpose:Conversion of temperature to fahrenheit and Celsius.
     * 
     * 
     * @function:temperature in fahrenheit as input outputs the temperature in Celsius 
     * or viceversa using the formula.
     */
    temperatureConversion(read) {
        try {
            var ch = 0;
            var Celsius = 0;
            var fahrenheit = 0;
            ch = read.question(" Press 1 Celsius to Fahrenheit: \n Press 2  Fahrenheit to Celsius: \n Enter your choice :")
            /**
             * Taking user input choice to convert temperature to fahrenheit and Celsius.
             */
            if (ch == 1) {

                Celsius = read.question("Enter temperature to convert fahrenheit :");
                fahrenheit = (Celsius * 9 / 5) + 32;
                console.log("Temperature in fahrenheit :" + fahrenheit);

            }
            else if (ch == 2) {
                fahrenheit = read.question("Enter temperature to convert fahrenheit :");
                Celsius = (fahrenheit - 32) * 5 / 9;
                console.log(" Temperature in Celsius :" + Celsius + "degree");

            }

        } catch (error) {
            console.log(error.message);


        }
    },

    /*************************monthlyPayment*************************** */
    /**
     * 1.Calculates the monthly payments
     * 
     * @description:command-line arguments P, Y, and R and calculates the monthly payments you would have 
     * to make over Y years to pay off a P principal loan amount at R per cent interest compounded monthly.
     * 
     * @purpose:Calculates the monthly payments using formula how much the pay off principal amount should 
     * be paid monthly.
     * 
     * @function:Uses the formula to calculate the monthly payments .
     */
    monthlyPayment() {
        try {
            var Principal = process.argv[2];
            var Years = process.argv[3];
            var Rate = process.argv[4];
            var payment = 0;
            var r = Rate / (12 * 100);
            var n = 12 * Years;

            payment = (Principal * r) / (1 - Math.pow((1 + r), -n));
            /**
             * Calculating the monthly payment using formula.
             * 
             */

            console.log(payment);



        } catch (error) {
            console.log(error.message);


        }
    },
    /*************************DayofWeek*************************** */
    /**
     * 1.To find the Day of week.
     * 
     * @description:Take three command-line arguments: m (month), d (day), and y (year). 
     * For m use 1 for January, 2 for February, and so forth. For output print 0 for Sunday, 
     * 1 for Monday, 2 for Tuesday, and so forth.
     * 
     * @purpose: To find the day of week using by formula and 
     * taking command line arguments inputs.
     * 
     * @function:That takes a date as input and prints the day of the week that date falls on.
     */
    DayofWeek(date, month, year) {
        try {
            if (!isNaN(date, month, year) && (0 < date && date < 32) && (0 < month && month < 13) && (999 < year && year < 10000)) {
                var y0 = year - Math.trunc((14 - month) / 12);
                var x = y0 + Math.trunc(y0 / 4) - Math.trunc(y0 / 100) + Math.trunc(y0 / 400);
                var m0 = month + 12 * Math.trunc((14 - month) / 12) - 2;
                var d0 = (date + x + Math.trunc(31 * m0 / 12)) % 7;
                /**
                 * Switch case takes the calculated value by using formula and finds out the day of week.
                 * 
                 */
                switch (d0) {
                    case 0: return "Sunday";
                    case 1: return "Monday";
                    case 2: return "Tuesday";
                    case 3: return "Wednesday";
                    case 4: return "Thursday";
                    case 5: return "Friday";
                    case 6: return "Saturday";
                }
            }
            else {
                return "Please enter the valid date month year";

            }


        } catch (error) {
            console.log(error.message);

        }
    },

    /**********************sqrtNumber*********************** */
    /**
     * 1.To find the sqrt of non negative number.
     * 
     * @description:Compute the square root of a nonnegative number num given in
     *  the input using Newton's method.
     * 
     * @purpose:Finding the perfect square of non negative number.
     * 
     * @function:Using Newton's method calculating the perfect square number.
     */
    sqrtNumber(num) {
        try {
            if (num > 0) {
                var temp = num;
                var epsilon = 1e-15;
                /**
                 * Loop over till where Math.abs of num and temp is greater then epilson.
                 */
                while (Math.abs(temp - num / temp) > epsilon * temp) {
                    temp = (num / temp + temp) / 2;
                }

                console.log(" Square root of a  number :" + temp);
            }
            else {
                console.log("Enter the number only positive ")
            }
        } catch (error) {
            console.log(error.message);


        }
    },

    /**********************binarySearchint************************ */
    /**
      * 1.Sorting the integers using binary search  method.
      * 
      * @description:Reads in integers prints them in  order using binary search sort method.
      * 
      * @purpose:Sorting the integers.
      * 
      * @function:Sort the integers using binary search  mehod. 
      *  
      */

    binarySearchint(arr3, search) {
        try {
            arr3.sort();
            var start = 0;
            var stop = arr3.length - 1;
            /**
             * Iterate while start not meets stop
             */
            while (start <= stop) {
                /**
                 * Find the middle index
                 */
                var mid = start + Math.floor((stop - start) / 2);
                /**
                 * If element is present at mid, return True
                 */
                if (Number(arr3[mid] === search)) return true;
              /**
               * Else look in left or right half accordingly
               */ else if (Number(arr3[mid]) < search) start = mid + 1;
                else stop = mid - 1;
            }
            return false;
        } catch (error) {
            console.log(error.message);

        }
    },
    /*****************************binarySearchstrg**************************** */
    /**
    * 1.Sorting the String using binary search method.
    * 
    * @description:Reads in String prints them in sorted order using binary search.
    * 
    * @purpose:Sorting the String.
    * 
    * @function:Sort the String using binary search method. 
    *  
    */

    binarySearchstrg(arr2, search) {
        try {
            arr2.sort();
            console.log(arr2);

            var first = 0;
            var last = arr2.length - 1;
            /**
            * Iterate while start not meets stop
            */
            while (first <= last) {
                var mid = first + Math.floor((last - first) / 2);
                /**
                 * If element is present at mid, return True
                 */
                if ((arr2[mid]) === search)
                    /**
                   * Else look in left or right half accordingly
                   */
                    return true;
                else if ((arr2[mid]) < search)
                    first = mid + 1;
                else
                    last = mid - 1;
            }
            return false;



        } catch (error) {
            console.log(error.message);

        }
    },
    /*************************toBinary************************** */
    /**
     *1. Representation of decimal number in binary (base 2). 
     * 
     * @description:It is based on decomposing the number into a sum of powers of 2.
     * 
     * @purpose:Representation of decimal number in binary (base 2) and padding the value to the string.
     * 
     * @function:That outputs the binary (base 2) representation of the decimal number typed as the input.
     */
    toBinary(num) {
        try {
            var temp = num;
            var str = "";
            while (num > .9) {
                /**
                 * Loop when the num value is greater than one.
                 */
                var res = Math.floor(num % 2);
                str = res + str;
                num = num / 2;
            }
            console.log("Binary value of given integer :" + str);


        } catch (error) {
            console.log(error.message);


        }
    },
    /**************************searchWord**************************/
    /**
     * 1.Read in a list of words from File.
     * 
     * @description:Read in a list of words from File. Then prompt the user to enter a word to search the list.
     *              The program reports if the search word is found in the list.
     * 
     * @purpose: To search a  word from the file where it contains list of words using binary search method.
     * 
     * @function: Use Arrays to sort the word list and then do the binary search
     *            Print the result if the word is found or not.  
    */
    searchWord() {
        try {
            var arr = [];
            var find = readline.question("Enter the word to searched :");
            const fs = require('fs')
            /**
             * Reads the list of words from the file if the word is not found then it will throw error message. 
             * 
             */
            fs.readFile('sample.txt', (err, data) => {
                if (err) throw err;

                arr = data.toLocaleString().split(",");
                console.log(this.binarySearchstrg(arr, find));
            })

        } catch (error) {
            console.log(error.message);

        }
    },
    /***************************vendingMachine******************************** */
    /**
     * 1.Find the Fewest Notes to be returned for Vending Machine.
     * 
     * @description:There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be returned by Vending Machine.
     *              To calculate the minimum number of Notes as well as the Notes to be returned by the Vending Machine as a Change.
     * 
     * @purpose:Find the Fewest Notes to be returned for Vending Machine.
     * 
     * @function:Use Recursion and check for largest value of the Note to return change to get 
     *           to minimum number of Notes.
     */

    vendingMachine(arr1, amnt) {
        try {
            var note = 0;
            for (let i = 0; i < arr1.length; i++) {
                /**
                 * Loop over till the amount should be greater than 1.
                 */
                if (amnt / arr1[i] >= 1) {
                    var count = Math.floor(amnt / arr1[i])
                    note = note + count;
                    console.log(arr1[i] + " Notes are " + count);
                    amnt = amnt % arr1[i];

                }
            }
            console.log("Total number of notes are :" + note);
        } catch (error) {
            console.log(error.message);

        }
    },
    /*************************mergeSort*************************** */
    /**
     * 1.Sorting the string using mergeSort method.
     * 
     * @description:Reads in string prints them in  order using mergeSort  sort method.
     * 
     * @purpose:Sorting the string.
     * 
     * @function:Sort the string using mergeSort  sort method.   
     *  
     */
    mergeSort(res) {
        try {
            var n = res.length;
            /**
             * 
             * if size is less than 2 return that.
             */
            if (n < 2) {
                return;
            }
            /**
             * cal mid value 
             */
            var mid = Math.floor(n / 2);
            var left = [mid];
            var right = [n - mid];
            /**
             * store  elements in left array which are present before the mid 
             * 
             *  */
            for (let i = 0; i < mid; i++) {
                left[i] = res[i];
            }
            /**
             * 
             * store  elements in left array which are present before the mid
             * 
             * */
            for (let j = mid; j < n; j++) {
                right[j - mid] = res[j];
            }
            /**
             * call mergesort for left half
             * 
             */
            this.mergeSort(left);
            /**
             * call mergesort for right half 
             * 
             */
            this.mergeSort(right);
            this.merge(left, right, res);
        }
        catch (err) {
            console.log(err.message);

        }

    },
    merge(arr, brr, crr) {
        try {
            var i = 0; var j = 0;
            var k = 0;
            /**
             * 
             *  merge elements into crr[]
             * 
             */
            while (i < arr.length && j < brr.length) {
                if (arr[i] <= brr[j]) {
                    crr[k] = arr[i]
                    i++;
                }
                else {
                    crr[k] = brr[j];
                    j++;
                }
                k++;
            }
            /**
             * 
             * if arr[] is greater than brr[], push all arr[] into crr[]
             */
            while (i < arr.length) {
                crr[k] = arr[i];
                i++;
                k++;
            }
            /**
             * 
             * if arr[] is lesser than brr[], push all brr[] into crr[]
             */
            while (j < brr.length) {
                crr[k] = brr[j];
                j++;
                k++;
            }
            return crr;
        }
        catch (err) {
            console.log(err.message);

        }
    },


}





