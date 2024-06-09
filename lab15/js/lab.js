/*
 Lab 15: AJAX
 Author: Sean Yabut
 Date: 6/8/24
*/

const URL = "https://icanhazdadjoke.com/";

  $("#activate").click(function(){
    $.ajax({
        url: URL,
        type: "GET",
        dataType : "json",
        success: function(data) {
            const joke = data.joke;
            $("#output").html(joke);
            console.log(data);
        },
        error: function (jqXHR, textStatus, errorThrown) { 
            console.log("Error:", textStatus, errorThrown);
        }
    })
  })
