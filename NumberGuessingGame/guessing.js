
var $ = function (id) 
{
    return document.getElementById(id);
};

var intMax, intMin, intRandom, intGuess, intCount, pastGuesses;


var startProgram = function()
{
    intMin = parseInt($("int_min").value);
    intMax = parseInt($("int_max").value);
    //checking if minimum is valid//
    if((intMin >= 0) && (isNaN(intMin) === false))
    {
        //checking maximum now//
        if(intMax >= (intMin + 2)) 
        {
            alert("You successfully inputted a range! We will now start the game!");
            intRandom = parseInt(Math.floor(Math.random()*(intMax-intMin+1))+intMin);
            intCount = 0; 
            // count of guesses//
            pastGuesses = [];
            //past guesses made//
            intGuess = parseInt(prompt("Please enter your first guess between " + intMin + " and " + intMax + 
                        "! Or type -1 to give up!"));
                        //now checking if the user writing the right guess//
            while(intGuess != intRandom) 
            {
                // if user doesnt want to play we do this//
                if(intGuess === -1)
                {
                    alert("You have chosen to give up :(");
                    break;
                }
                //is the number guessed before//
                else if(pastGuesses.includes(intGuess) === true)
                {
                    intGuess = parseInt(prompt("You already guessed this number/Invalid number! Please enter an integer between " + intMin + " and " + 
                                    intMax + "! Or type -1 to give up!"));
                    continue;
                }
                else
                {
                    if(validateGuess(intGuess) === 0)
                    {
                        intGuess = parseInt(prompt("Your guess was invalid. Please enter an integer between " + intMin + " and " + 
                                    intMax + "! Or type -1 to give up!"));
                        continue;
                    }
                    else
                    {
                        //if the guess is too high we alert that//
                        if(intGuess > intRandom)
                        {
                            intCount++;
                            intGuess = parseInt(prompt("Nice try, but your guess was too HIGH! If you want to give up, type in -1."));
                            continue;
                        }
                        else 
                        {
                            //if the guess is too low be alert that//
                            intCount++;
                            intGuess = parseInt(prompt("Nice try, but your guess was too LOW! If you want to give up, type in -1."));
                            continue;
                        }
                    }
                }
            }
            //when user finds the correct input //
            if(intGuess === intRandom) 
            {
                alert("Congratulations! Your guess of " + intGuess + " is the right number: " + intRandom + "!");
                $("int_min").value = "";
                $("int_max").value = "";
                $("output").value = "Congrats! It took you " + (intCount+1) + " times to guess the number. Your score is " + 
                                    finalScore(intCount) + " points out of a total possible amount of " + 
                                    (intMax-intMin+1) + " points.\nEnter your new min and max, then hit START!";
            }
            // or user giving up//
            else 
            {
                $("output").value = "You gave up :/ The answer was " + intRandom + ".\nEnter your new min and max, then hit START!";
            }
        }
        else 
        {
            $("output").value = "Your minimum is okay, but not your maximum :/ Please enter a maximum that is at least 2 greater than your minimum.";
        }
    }
    else 
    {
        $("output").value = "Please enter a valid range. Your minimum should be 0 or greater, and your maximum should be 2 greater than your minimum.";
    }
};

//extra credit//
function validateGuess(guess) 
//for valid guesses//
{
    if((guess < intMin) || (guess > intMax) || (isNaN(guess) === true))
    {
        pastGuesses.push(guess);
        return 0; 
    }
    else
    {
        pastGuesses.push(guess);
        return 1; 
    }
};
//final score function//
function finalScore(count)
{
    return (intMax-intMin+1) - count;
};
//dom values//
window.onload = function () 
{
    $("start").onclick = startProgram;
    $("int_min").value = "";
    $("int_max").value = "";
    $("guess").value = "";
    $("count").value = "";
    $("output").value = "";
    $("int_min").focus(); 
};