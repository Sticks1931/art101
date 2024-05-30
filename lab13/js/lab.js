/*  
    Lab 12: Conditionals
    Author: Sean Yabut
    Date: 5/23/24
 */  

//Fizzbuzz Function

function fizzBuzzBoom(maxNum) {
    for (i = 0; i <= maxNum; i ++) {
        let output = "";
        if ((i % 3 == 0) || (i % 5 == 0) || (i % 7 == 0)) {
            if (i % 3 == 0) {
                output += ("Fizz");
            }
            if (i % 5 == 0) {
                output += ("Buzz");
            }
            if (i % 7 == 0) {
                output +=("Boom");
            }
            console.log(output);
            $("#output").append("<p>" + output + "</p>");
        } else {
            console.log(i);
            $("#output").append("<p>" + i + "</p>");
        }
    }
}

$("button").click(function(){
    fizzBuzzBoom(200);
});