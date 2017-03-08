console.log ("our html and js files are linked correctly");

//SETUP VARIABLES
//============================

var authKey = "dc6zaTOxFJmzC";
 

// Search Parameters
var queryTerm = ""; //q
var numResults = 0; //limit
var gifRatings = ""; //ratings

$("button").on("click", function() {
	var food = $(this).attr("data-food");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {

		var results = response.data;

		for (var i=0; i<results.length; i++) {
			var gifDiv = $("<div class='item'>");

			var gifRatings = results[i].rating;

			var p =$("<p>").text("Rating: " + gifRatings);

			var foodImg = $("<img>");
			foodImg.attr("src", results[i].images.fixed_height.url);
			gifDiv.prepend(foodImg);
			gifDiv.prepend(p);

			$("#gifs-appear-here").prepend(gifDiv);
		}
		console.log(response);
	



	//Still and Animate states
var state = $(this).attr("src");
var still = $(this).attr("src", results[i].images.fixed_height_still.url);
var animate = $(this).attr("src", results[i].images.fixed_height.url);

if (state === "still") {
	$(this).attr('button', animate);
	$(this).attr("data-state", "animate")
}else{
	$(this).attr('button', still);
	$(this).attr("data-state", "still")
}	
	});
	});


