$(document).ready(function() {


    console.log("our html and js files are linked correctly");

    

            //SETUP VARIABLES
            //============================

            var authKey = "dc6zaTOxFJmzC";


            // Search Parameters
            var queryTerm = ""; //q
            var numResults = 0; //limit
            var gifRatings = ""; //ratings
            var stillArr = [];
            var animateArr = [];

            


    //console.log("our buttons index", newButtons);


$(function() {

//Topics Array
            var topics = ["Pizza", "Tart", "Apple", "Pie", "Shrimp", "Butter", "Funnel Cake", "Croquembouche", "Tarte Tatin"];


            //making buttons for our topics
             var buttonDiv = document.getElementById("buttons-appear-here");
             
             for (var i = 0; i <topics.length; i++) {
                var newButtonDiv = document.createElement("BUTTON");
                newButtonDiv.innerHTML = topics[i];
                buttonDiv.appendChild(newButtonDiv);
             };
            
var food = topics.toString();
  console.log("to the string!", food);

var splitFood = food.split();
console.log("indiv food", splitFood);
// for (i=0; i< splitFood.length; i++)
// {
//     var food = document.write(i + splitFood);
//     console.log("our food", food);

// }
            
        });




$("BUTTON").on("click", function() {
    var food = $(this).attr("data-food");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var gifRatings = results[i].rating;

            var p = $("<p>").text("Rating: " + gifRatings);

            var foodImg = $("<img>");
            foodImg.attr("class", "food-image"); //first we're creating a class and then naming it
            foodImg.attr("index", i);
            foodImg.attr("src", results[i].images.fixed_height_still.url);
            gifDiv.prepend(foodImg);
            gifDiv.prepend(p);

            $("#gifs-appear-here").prepend(gifDiv);

            // stillArr.push(results[i].images.fixed_height_still.url);
            // animateArr.push(results[i].images.fixed_height.url);


            // $(".food-image").on("click", function() {
            //              var foodImg = $("<img>");
            //                 foodImg.attr("class", "food-image"); //first we're creating a class and then naming it
            //                 foodImg.attr("index", i);
            //                 foodImg.attr("src", results[i].images.fixed_height.url);
            //                 gifDiv.prepend(foodImg);
            //                 gifDiv.prepend(p);
            //             // foodImg.attr("src", results[i].images.fixed_height.url);   
            //                 console.log($(this).attr("data-state")); 
            //             });
            //             }

            //To pause and play the gifs
            // $(document).on("click", ".food-image", function() {

            //     //$(".gif").on("click", function() {
            //     console.log($(this).attr("index")); //this shows an index for our image in the console. we can use this image to go betwen still and animate when clicked.
            //     var state = $(this).attr("data-state");
            //     var still = $(this).attr("data-still");
            //     var animate = $(this).attr("data-animate");


            //     //     var src = $(this).attr("src");
            //     //     var animateUrl = $(this).attr("src", src.replace((results[i].images.fixed_height.url), ".food-image"));

            //     //     gifDiv.prepend(animateUrl);


            //     // $("#gifs-appear-here").prepend(gifDiv);

            //     if (state === "still") {
            //         $(this).attr("index", [i]);
            //         $(this).attr('src', animateArr[i]);
            //         $(this).attr("data-state", "animate")
            //             // 'src': animateArr[i],
            //             // "data-state": "animate",
            //             // });
            //     } else {
            //         $(this).attr("index", [i]);
            //         $(this).attr('src', stillArr[i]);
            //         $(this).attr("data-state", "still");
            //     }
            // });   (play and pause if statement end)


        };



        // console.log("response", response);

        // console.log("still Array", stillArr);
        // console.log("animate Array", animateArr);



        //Still and Animate states
        // var state = $(this).attr("src");
        // var still = $(this).attr("src", results[i].images.fixed_height_still.url);
        // var animate = $(this).attr("src", results[i].images.fixed_height.url);


        // if (state === "still") {
        //  $(this).attr('button', animate);
        //  $(this).attr("data-state", "animate")
        // }else{
        //  $(this).attr('button', still);
        //  $(this).attr("data-state", "still")
        // }    

    });
});




//METHODS

//on.("click") function associated with the Search button
// $("#run-search").on("click", function(event) {
//     //this takes advantage of the HTML submit property
//     //this allows us to use enter instead of clicking
//     event.preventDefault();

//     //empties the region where the gifs are displayed
//     $("#gifs-appear-here").empty();

//     //grabs the text the user typed into search and stores it in variable
//     searchTerm = $("#search-term").val().trim();
//     var searchQueryUrl = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=10";


//     //This button clears the gif div
//     $("#clear-all").on("click", function() {
//         $("#gifs-appear-here").empty();
//     });
// });
});
$("#run-search").on("click", function() {
var search = $("#search-term").val().trim();
console.log("our search var", search)
var searchQueryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&limit=10";

console.log("our search query url", searchQueryURL);

$.ajax({
    url: searchQueryURL,
    method: "GET"
}).done(function(response) {

    var results = response.data;

    for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div class='item'>");

        var gifRatings = results[i].rating;

        var p = $("<p>").text("Rating: " + gifRatings);

        var newImg = $("<img>");
        newImg.attr("class", "new-image"); //first we're creating a class and then naming it
        newImg.attr("index", i);
        newImg.attr("src", results[i].images.fixed_height.url);
        gifDiv.prepend(newImg);
        gifDiv.prepend(p);

        $("#gifs-appear-here").prepend(gifDiv);
        // stillArr.push(results[i].images.fixed_height_still.url);
        // animateArr.push(results[i].images.fixed_height.url);

    };
});
});
 //document ready close
