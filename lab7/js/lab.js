// Lab 7 - Functions
// Author: Sean Yabut
// Date: 5/2/24

// Function:
function nameSort() {
    let userName = window.prompt("Please enter your user name: ");
    console.log("userName = ", userName);

    // Splits string into an array, sorts it, then joins the sorted array back into a string
    let sortedName = userName.split('').sort().join('');
    return sortedName;
}

// Output: 
document.writeln("Here's your new name: " + nameSort(), "</br>");