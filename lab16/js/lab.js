/*
 Lab 16: JSON & APIs
 Author: Sean Yabut
 Date: 6/8/24
*/

// Using the core $.ajax() method
$.ajax( comicObj = {
    url: "https://xkcd.com/info.0.json",
    data: {},
    type: "GET",
    dataType : "json",
    success: function(data) {
        const title = data.title;
        const img = data.img;
        const alt = data.alt;

        // Print on page
        $("#title").append(title);
        $("#img").append("<img src='" + img + "' />");
        $("#alt").append(alt);

    },
    error: function (jqXHR, textStatus, errorThrown) { 
        console.log("Error:", textStatus, errorThrown);
    }
})

/*
Data guide:
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
 */