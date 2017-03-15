# GifTastic


## Live Link 
 - https://chefjoannacodes.github.io/GifTastic/

## This program generates different Gifs by clicking on the preset buttons. Each button corresponds to a different food item. When a new button is pressed, the new Gifs (10) are appended to the top of the page. The dynamic part of this program is that the user can type a topic into the search bar and Gifs will appear for that particular topic. The Gifs also pause and play when you click on them. 

## Requirements
#### Using GIPHY API, JQuery, Javascript, and HTML make a dynamic web page that populates with gifs of your choice. 

1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
We chose animals for our theme, but you can make a list to your own liking.
2. Your app should take the topics in this array and create buttons in your HTML.
Try using a loop that appends a button for each string in the array.
When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
3. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
4. Under every gif, display its rating (PG, G, so on).
This data is provided by the GIPHY API.
Only once you get images displaying with button presses should you move on to the next step.
5. Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.
6. Rejoice! You just made something really cool.

## Technologies Used
#### 
- GIPHY API
- JQuery
- HTML
- CSS
- Javascript

## Code Explaination
- First, I created an AJAX call to receive the JSON object. I created a variable named "food" to store the unique topic of food. I then created a for loop to go through the object and retrieve the attributes of each individual topic, or button that was cliked. The variable "foodImg" stored the image source and retrieved the 'still' url. I used 'prepend' so the gifs would display top to bottom with the most GIF to be displayed on top. 

The for loop below goes through the object and retrieves the requested attributes for the "food" variable.

```
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
```



