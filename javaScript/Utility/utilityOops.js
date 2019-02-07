/************************************* Object Oriented Programs ***************************/
module.exports = {
    /****************** JSON Inventory Data Management of Rice, Pulses and Wheats *********************
     * 
     *  1. Inventory Data Management of Rice, Pulses and Wheats
     *----------------------------------------------------------
     * @Purpose   : To creat a file having Inventory Details for Rice, Pulses and Wheats
     *             with properties such as name, weight, price per kg.
     *
     * @Use Library : Java JSON Library
     *
     * @description: Declaring the function and passing the userinput as argument.
     *
     * @function: diplayname takes the userinput and print it with some sentence.
     *
     * @param : object --> objects such as Rice, Wheats and Pulse which are at inventory
     */
    inventoryData(object) {
        var rice = object.Rice
        var pulses = object.Pulses;
        var wheat = object.Wheat;
        var totalvaluerice = 0;
        var totalvaluewheat = 0;
        var totalvaluepulses = 0;
        var i = 0;
        var j = 0;
        var k = 0;
        /**
         * Loop the rice array object to find  the price.
         */
        for (let key in rice) {
            var num = rice[key].Weight * rice[key].Price
            console.log(" cost of " + rice[key].Ricename + " is " + num + " Rs ");
            i++;
            totalvaluerice = totalvaluerice + num
        }
        console.log(" Total value of rice :" + totalvaluerice + "\n");
        /**
         * Loop the pulses array object to find  the price.
         */
        for (let key in pulses) {
            var num = pulses[key].Weight * pulses[key].Price;
            console.log(" cost of " + pulses[key].Pulsesname + " is " + num + " Rs ");
            j++;
            totalvaluepulses = totalvaluepulses + num;
        }
        console.log(" Total value of pulses :" + totalvaluepulses + "\n");
        /**
         * Loop the wheat array object to find the price.
         */
        for (let key in wheat) {
            var number = wheat[key].Weight * wheat[key].Price;
            console.log(" cost of " + wheat[key].Wheatname + " is " + number + " Rs ");
            k++;
            totalvaluewheat = totalvaluewheat + number;
        }
        console.log(" Total value of rice :" + totalvaluewheat);
    },

  /************************* Regular Expression Demonstration ***************************
   *  2. Regular Expression Demonstration
   *-------------------------------------
   * @Purpose   : To creat a file having Inventory Details for Rice, Pulses and Wheats
   *             with properties such as name, weight, price per kg.
   *
   * @Use Library : Java JSON Library
   *
   * @description: Declaring the function and passing the userinput as argument.
   *
   * @function: diplayname takes the userinput and print it with some sentence.
   *
   * @param   : object --> objects such as Rice, Wheats and Pulse which are at inventory
   */
    regularExpression(name, fullname, number, date) {
        var filestream = require('fs');
        try {
            var data = filestream.readFileSync("regex.txt", 'utf8');
            data = data.replace(/<<name>>/g, name)
            data = data.replace(/ <<full name>>/g, fullname)
            data = data.replace(/91-xxxxxxxxxx/g, number)
            data = data.replace(/<<xx-xx-xxxx>>/g, date)
            console.log();
            console.log(data);
        } catch (err) {
            console.log(err.message);

        }
    }
}