var $ = function (id) 
{
    return document.getElementById(id);
}

var vowels = function () {
    var stringPhrase = $("phrase").value.toUpperCase(); 
    var stringLength = stringPhrase.length;
    var vowels = 0;

    for(let i = 0; i < stringLength; i++)
    {
        if(alphabetTrue(stringPhrase.charAt(i)) === true &&
           stringPhrase.charAt(i) === "A" ||
           stringPhrase.charAt(i) === "E" ||
           stringPhrase.charAt(i) === "I" ||
           stringPhrase.charAt(i) === "O" ||
           stringPhrase.charAt(i) === "U")
        {
            vowels++;
        }
    }
    $("output").value = "There are " + vowels + " vowels in this phrase.";
};



var consonants = function () {
var stringPhrase = $("phrase").value.toUpperCase(); 
    var stringLength = stringPhrase.length;
    var consonants = 0;

    for(let i = 0; i < stringLength; i++)
    {
        if(alphabetTrue(stringPhrase.charAt(i)) === true &&
           stringPhrase.charAt(i) !== "A" &&
           stringPhrase.charAt(i) !== "E" &&
           stringPhrase.charAt(i) !== "I" &&
           stringPhrase.charAt(i) !== "O" &&
           stringPhrase.charAt(i) !== "U")
        {
            consonants++;
        }
    }
    $("output").value = "There are " + consonants + " consonants in this phrase.";
};

var reverse = function () 
{
    var stringPhrase = $("phrase").value; 
    var stringLength = stringPhrase.length;
    var reversedPhrase = "";
    for(let i = 0; i < stringLength; i++)
    {
        reversedPhrase = stringPhrase.charAt(i) + reversedPhrase;
    }

    $("output").value = "The reversed phrase is: " + reversedPhrase;
};


var clear = function () 
{
	$("phrase").value = "";
    $("output").value = "";
};

window.onload = function () 
{
    //the following five lines of code make sure the values on the DOM are cleared.
    $("phrase").value = "";
    $("output").value = "";
    $("vowels").onclick = vowels; //runs the calculate_click function when clicked
    $("consonants").onclick = consonants; //runs the calculate_click function when clicked
    $("reverse").onclick = reverse; //runs the calculate_click function when clicked
    $("clear").onclick = clear; //runs the calculate_click function when clicked        
};