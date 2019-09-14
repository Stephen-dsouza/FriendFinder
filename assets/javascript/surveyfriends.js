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
// we send the 
        $.ajax("/api/survey", {
            type: "POST",
            data: answers
        }).then(
            function () {
                console.log("answers received");
                
            }
        );
    })
    
    //***********************************************************************//
    //HERE we need to get the json response  of the result from server and pass on to the modal
    //not working as of now
    // $.ajax("/api/survey", {
    //     type: "GET",
    // }).then(
    //     function () {
    //         console.log("result:"+result);
    //         $("bestName").text(data.name);
    //             $("#bestImg").attr("src", data.photo)
    //             $('.modal').modal();
    //     }
    // );

    //***********************************************************************//
});