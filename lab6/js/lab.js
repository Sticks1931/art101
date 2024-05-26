// Lab 6 - Arrays and Objects
// Author: Sean Yabut
// Date: 4/28/24

// Defined Array:
  let myTransport = ["Lexus" , " Bus" , " Walking"];
// Defined Object:

  let myMainRide = {
      make: "Lexus",
      model: "Sedan",
      color: "Black",
      year: 2003,
      age: function() {
        return 2024 - this.year;
    }
  }

// Outputs:
  document.writeln("Kinds of transport I use: " + myTransport, "</br>");

  document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");