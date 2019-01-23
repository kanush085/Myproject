//to accept user input
const readline = require('readline-sync');


module.exports = {
    /***** String replace *****/
    /*
     * 1. username wit minmum 3 characters and not a number 
     * with userinput
     * 
     
     * @descriptipn: Declaring the function and passing the userinput as argument.
     * 
     * 
     * @purpose: display the username with given inputs
     *
     */
    stringReplace(username) {
        if (username.length > 3) {


            var input = "Hello <<username>> , how are you?";
            var output = input.replace(/<<username>>/g, username);
            console.log(output + " : Replace string using Regex ")
        }
        else {
            console.log("enter minmum 3 char or more");

        }

    },

}