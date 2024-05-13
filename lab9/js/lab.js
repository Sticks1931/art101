// Lab 9: Libraries & jQuery
// Author: Sean Yabut
// Date: 5/6/24

// Buttons:
    // Challenge Button
    $("#challenge").append("<button id='button-challenge'>Make Special</button>");

    // Problems Button
    $("#problems").append("<button id='button-problems'>Make Special</button>");

    // Results Button
    $("#results").append("<button id='button-results'>Make Special</button>");

    // Event Listeners
    $("#button-challenge").click(function(){
        $("#challenge").toggleClass("special");
    });

    $("#button-problems").click(function(){
        $("#problems").toggleClass("special");
    });

    $("#button-results").click(function(){
        $("#results").toggleClass("special");
    });