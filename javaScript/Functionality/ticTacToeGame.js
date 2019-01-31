/***********************************************************
 *
 * Execution      :Default node    cmd>node ticTacToeGame.js
 * Purpose        :To play the  game player 1 is computer and player 2 is the user and the user marks the postion of the 
 *                 cell and computer marks the cell if the column  and row are series with x or  0 then player wins the game.  
 *@description 
 * 
 *
 *@file          :ticTacToeGame.js
 *@overview      :ticTacToeGame play a Cross Game or Tic-Tac-Toe Game. Player 1 is the Computer and the Player 2 is the user. 
 *                Player 1 take Random Cell that is the Column and Row.    
 *@author name   :Anush Kumar s k <anushk136@gmail.com>
 *@version       :1.0
 *@since         :31/01/2019
 * 
 ***********************************************************/
var access = require('../utility/utility');
const readline = require('readline-sync');

function ticTacToe() {
    var flag = false;
    var arr = access.intializeGame();
    console.log("Player 1 : Computer, Symbole : O");
    console.log("Player 2 : You, Symbole : x");
    console.log("Winning isn't everything, but wanting to win is...");
    var count = 1;
    while (count <= 9) {
        arr = access.computerPlayer(arr);
        count++;
        while (count > 4) {
            flag = access.check(arr);
            break;
        }
        if (flag) {
            console.log("Computer is the winner. Better luck next time");
            break;
        }
        else if (count == 8) {
            console.log("Draw match.. Try next!");
            break;
        }
        arr = access.userPlayer(arr);
        while (count > 4) {
            flag = access.check(arr);
            break;

        }
        if (flag) {
            console.log("Gosh!.. I knew it. You are the winner");
            break;
        }
        count++;
    }
    console.log("Game end");
}
ticTacToe();