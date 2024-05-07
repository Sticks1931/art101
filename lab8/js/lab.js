// Lab 8 - Anon Functions & Callbacks
// Author: Sean Yabut
// Date: 5/6/24

// Array of random numbers
    let array = [5, 3, 1, -2];

// Function adds 5 to parameter
    function add(x) {
    return x + 5;
    }

// Anon functions subtracts 3 from parameter
    array.map(function(x) {
        let result = x - 3;
        return result;
    }) 

// Function Outputs in Console:
    console.log("Here's the array: " + "[" + array + "]");
    console.log("Here's the array when 5 has been added to each number via the callback function: " + "[" + array.map(add) + "]");
    console.log("Here's the array when 3 has been subtracted from each number via the anonymous function: " + "[" +
    array.map(function(x) {
        result = x - 3;
        return result;
    }) + "]"); 
    ;

// Function Outputs Displyed on Page:
 // Your map results data
 var mapResults = ""
   
    

 // Use jQuery to select the element by its ID and set the HTML content
 $("#output").html(mapResults);