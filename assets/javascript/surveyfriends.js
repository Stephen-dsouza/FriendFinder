$(document).ready(function () {
    $("#submit").on("click", function (event) {
        event.preventDefault();
        // Here we grab the form elements
        var answers = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };
// we send the answer
        $.ajax("/api/survey", {
            type: "POST",
            data: answers
        })
        //We get the reponse of the answers send and display to modal
        .then(
            function (response) {
                $("#bestName").text(response.name);
                $("#bestImg").attr("src",response.photo)
                $('.modal').modal("toggle");
                
            }
        );
    })
    
   
});