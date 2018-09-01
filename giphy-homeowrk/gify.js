
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript" src="../assets/gify.js">
  
    // Adding click event listen listener to all buttons
    $("button").on("click", function() {
      // Grabbing and storing the data-hero property value from the button
      var hero = $(this).attr("data-hero");
      var person = ["", "The Notebook", "Mr. Nobody", "The Lion King"];
      // Constructing a queryURL using the hero name
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        hero + "&api_key=e8AZyV4u7AjV4zSczu8miFSXF0R1k9GO&limit=1";

      // Performing an AJAX request with the queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After data comes back from the request
        .then(function(response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var heroDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var heroImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            heroImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the heroDiv
            heroDiv.append(p);
            heroDiv.append(heroImage);

            // Prependng the heroDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(heroDiv);
          }
        });
    });

    function renderButtons() {

// Deleting the person prior to adding new person
// (this is necessary otherwise you will have repeat buttons)
$("#buttons-view").empty();

// Looping through the array of person
for (var i = 0; i < person.length; i++) {

  // Then dynamicaly generating buttons for each hero in the array
  // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
  var a = $("<button>");
  // Adding a class of hero-btn to our button
  a.addClass("hero-btn");
  // Adding a data-attribute
  a.attr("data-name", person[i]);
  // Providing the initial button text
  a.text(person[i]);
  // Adding the button to the buttons-view div
  $("#buttons-view").append(a);
}
}

// This function handles events where a hero button is clicked
$("#add-hero").on("click", function(event) {
event.preventDefault();
// This line grabs the input from the textbox
var hero = $("#hero-input").val().trim();

// Adding hero from the textbox to our array


// Calling renderButtons which handles the processing of our hero array
renderButtons();
});

// Adding a click event listener to all elements with a class of "hero-btn"
$(document).on("click", ".hero-btn");

// Calling the renderButtons function to display the intial buttons
renderButtons();

  </script>