$(document).ready(function () {

    var searchTerm = "";
    var numRecords;
    var startYear;
    var endYear;


    function displayArticleResults() {
        searchTerm = $("#search-term").val().trim();
        numRecords = $("#records-number").val().trim();
        startYear = $("#start-year").val().trim();
        endYear = $("#end-year").val().trim();

        var apiKey = "Muj2bhvOG73MyxeaXfSqFWxWc1BIgUYR"
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + apiKey;
        if (parseInt(startYear)) {
            queryURL += "&begin_date=" + startYear + "0101";
        }

        if (parseInt(endYear)) {
            queryURL += "&end_date=" + endYear + "1231";
        }

        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .then(function(response) {
            var articles = response.response.docs;
            console.log(articles);
        })
    }

    $("#search-term").on("click", displayArticleResults);
})