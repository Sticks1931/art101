/*
 Lab 16: JSON & APIs
 Author: Sean Yabut
 Date: 6/8/24
*/

// Using the core $.ajax() method
$.ajax( comicObj = {
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json",
    // The data to send (will be converted to a query string)
    data: {},
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        
        console.log(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})

const comicObj = {
    month: data.month,
    num: data.num,
    link: data.link,
    year: data.year,
    news: data.news,
    safe_title: data.safe_title,
    transcript: data.transcript,
    alt: data.alt,
    img: data.img,
    title: data.title,
    day: data.day
}