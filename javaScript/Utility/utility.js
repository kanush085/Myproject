//to accept user input
const readline = require('readline-sync');


module.exports= {

    stringReplace(username) 
{
    var input ="Hello <<username>> , how are you?";
    var output = input.replace(/<<username>>/g,username); 
    console.log(output+" : Replace string using Regex ")

    
},

}