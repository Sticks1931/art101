// Lab 12: Conditionals
// Author: Sean Yabut
// Date: 5/23/24

// Take name input then sort based on string length
function sortingHat(str) {
     length = str.length;
     mod = length % 4;

    if (mod == 0) {
        return "Gryffindor";
    }
    else if (mod == 1) {
        return "Ravenclaw";
    }
    else if (mod == 2) {
        return "Syltherin";
    }
    else if (mod == 3) {
        return "Hufflepuff";
    }
 }

// Event Listener
$("#button").click(function() {

    // Sets str to user input
    const name = $("input").val();

    // Sets str to sortingHat's output
    const house = sortingHat(name);

    // Prints the user's assigned house
    $("#output").html('<div class="text"><p>' + "Your assigned house is: " + house + '</p></div>');

})
