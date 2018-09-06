
  
    // Adding click event listen listener to all buttons
    var hero = $(this).attr("data-hero");
    var heros = [];
    $("button").on("click", function() {
        
        var hero = $(this).attr("data-hero");
        
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            hero + "&api_key=e8AZyV4u7AjV4zSczu8miFSXF0R1k9GO&limit=10";
        console.log("hero " + hero);

        
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            
            .then(function(response) {
                console.log(queryURL);
                console.log(response);
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var heroDiv = $("<div>");
                    var p = $("<p>").text("Rating: " + results[i].rating);
                    var heroImage = $("<img>");
                    heroImage.attr("src", results[i].images.fixed_height.url);

                    heroDiv.append(p);
                    heroDiv.append(heroImage);
                    $("#gifs-appear-here").prepend(heroDiv);
                }
            });
    });

    function renderButtons() {


        $("#buttons-view").empty();

        for (var i = 0; i < heros.length; i++) {

            var a = $("<button>");
            a.addClass("hero-btn");
            a.attr("data-hero", heros[i]);
            a.text(heros[i]);
            $("#buttons-view").append(a);
        }
    }

    // This function handles events where a hero button is clicked
    $("#add-hero").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var hero = $("#hero-input").val().trim();
        console.log(this);

        // Adding hero from the textbox to our array
        heros.push(hero);
        console.log("heros ," + heros);
        console.log("hero , " + hero);

        // Calling renderButtons which handles the processing of our hero array
        renderButtons();
    });

    // Adding a click event listener to all elements with a class of "hero-btn"
    // $(document).on("click", ".hero-btn");
    $(".hero-btn").bind("click", function(event) {
        $("<button></button>")
        var hero = $(this).attr("data-hero");
    })


    // Calling the renderButtons function to display the intial buttons
    renderButtons();