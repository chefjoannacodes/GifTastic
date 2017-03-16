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


    //Topics Array
    var topics = ["Pizza", "Tart", "Apple", "Pie", "Shrimp", "Butter", "Funnel Cake", "Croquembouche", "Tarte Tatin"];
    //making buttons for our topics
    var buttonDiv = document.getElementById("buttons-appear-here");
    renderButtons();

    function renderButtons() {
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button>");
            a.addClass("gif");
            a.attr("data-food", topics[i]);
            a.text(topics[i])
            $("#buttons-appear-here").append(a);


        };
    }

    $("#run-search").on("click", function(event) {
        event.preventDefault();
        //this line grabs the input from the text box
        var search = $("#search-term").val().trim();
        //adding topic from the textbox to our array
        topics.push(search);

        //calling renderButtons which handles the processing of our movie array
        renderButtons();


    });


    $(document).on('click', 'button', function(e) {
        console.log(this);
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
                foodImg.attr("src", results[i].images.fixed_height_still.url);
                foodImg.attr("data-animate", results[i].images.fixed_height.url);
                foodImg.attr("data-still", results[i].images.fixed_height_still.url);


                gifDiv.prepend(foodImg);
                gifDiv.prepend(p);

                $("#gifs-appear-here").prepend(gifDiv);


                $(".food-image").on("click", function() {

                    console.log("when clicked", this);
                    var state = $(this).attr("data-state");


                    var still = $(this).attr("data-still");
                    var animate = $(this).attr("data-animate");




                    if (state === "still") {
                        $(this).attr('src', animate);
                        $(this).attr("data-state", "animate")

                    } else {

                        $(this).attr('src', still);
                        $(this).attr("data-state", "still");
                    }
                });


            };


        }); // closes callback
    }); // closes ajax call

}); //document ready close
