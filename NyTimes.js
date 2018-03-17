

    <input type="submit" >REQUEST</input>
    <button class="klear" type="submit">CLEAR RESULTS</button>


    <div id="article-here">
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript">

    $("button").on("click", function() {
        var article = $(this).attr("q=", "submit");
        article.append = $(this).text("api_key=dbe8e8866d4c46f3ba08729395ce3e0b");
        var queryURL = "http://developer.nytimes.com/articlesearch.json?" + article;

        // ajax is the API CALL to HTML GET Method
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
            // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

            console.log(response);

            // Step 2: since the image information is inside of the data key,
            // make a variable named results and set it equal to response.data


            // =============== put step 2 in between these dashes ==================
            var results = response.data;
            // ========================

            for (var i = 0; i < results.length; i++) {

                // Step 3: uncomment the for loop above and the closing curly bracket below.
                // Make a div with jQuery and store it in a variable named animalDiv.
                // Make a paragraph tag with jQuery and store it in a variable named p.
                // Set the inner text of the paragraph to the rating of the image in results[i].
                // Make an image tag with jQuery and store it in a variable named animalImage.
                // Set the image's src to results[i]'s fixed_height.url.
                // Append the p variable to the animalDiv variable.
                // Append the animalImage variable to the animalDiv variable.
                // Prepend the animalDiv variable to the element with an id of gifs-appear-here.

                // ============= put step 3 in between these dashes ======================
                var animalDiv = $("<div>");
                var p = $("<p>");
                p.text(results[i].rating);
                var animalImage = $("<img>");
                animalImage.attr("src", results[i].images.fixed_height.url);

                animalDiv.append(p);
                animalDiv.append(animalImage);

                $("#gifs-appear-here").prepend(animalDiv);
            });
    });
});
</script>