$(document).ready(function() {

    $("#clear").click(function() {
        $("#figure").attr("value","");
        $("#min_year").attr("value","");
        $("#max_year").attr("value","");
        $("#figure").val("");
        $("#min_year").val("");
        $("#max_year").val("");
    });

    $("#figure").click(function(){
        $("#figure").attr("value","");
    });

    $("#min_year").click(function(){
        $("#min_year").attr("value","");
    });

    $("#max_year").click(function(){
        $("#max_year").attr("value","");
    });


    $("#submit").click(function() {


        var parameters = {
            'api-key' : "ca106bcebbbb41b98ce221289b6b1f34",
        };


        if( $("#figure").val() == "Enter Keyword" || $("#figure").val() == "" ) {
 
        } else {
            parameters['q'] =  $("#figure").val();
        }

        
        if( $("#min_year").val() == "YYYYMMDD" || $("#min_year").val() == "") {
 
        } else {
            parameters['begin_date'] =  $("#min_year").val();
        }


       if( $("#max_year").val() == "YYYYMMDD" || $("#max_year").val() == "") {

        } else {
            parameters['end_date'] =  $("#max_year").val();
        }


        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        queryURL += '?' + $.param(parameters);

        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(result) {
            console.log(result);

            // DOM modifiers
            print(result);

        });     
    });

    
    function print(result){
    // console.log(docsdisplayed);
    var articles = "";
    for (var i=0; i< 10; i++){
        articles += "<a class='m-1 p-1 text-primary' href=" + result.response.docs[i].web_url + ">" +
                    "<p><b>" + result.response.docs[i].headline.main + "</b> <br>" +
                     result.response.docs[i].snippet + "<br>" +
                    "Publication date: " + result.response.docs[i].pub_date.substring(0,10) + "</p></a><br>" ;      
    }

    $("#results").html(articles);
    }




})