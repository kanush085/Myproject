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
            var distance = Math.sqrt(a * a + b * b);
            console.log("Distance form Origin is : " + distance);
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



}