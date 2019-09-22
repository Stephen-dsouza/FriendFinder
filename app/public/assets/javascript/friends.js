$(document).ready(function () {
    $("#basic-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },

            photo: {
                required: true
            },
            q1: {
                required: true
            },
            q2: {
                required: true
            },
            q3: {
                required: true
            },
            q4: {
                required: true
            },
            q5: {
                required: true
            },
            q6: {
                required: true
            },
            q7: {
                required: true
            },
            q8: {
                required: true
            },
            q9: {
                required: true
            },
            q10: {
                required: true
            }

        },
        messages: {
            name: {
                minlength: "Name should be at least 3 characters"
            },
            photo: {
                required: "Please enter the link to your photo"

            },

            q1: {
                required: "Please make a choice"
            },
            q2: {
                required: "Please make a choice"
            },
            q3: {
                required: "Please make a choice"
            },
            q4: {
                required: "Please make a choice"
            },
            q5: {
                required: "Please make a choice"
            },
            q6: {
                required: "Please make a choice"
            },
            q7: {
                required: "Please make a choice"
            },
            q8: {
                required: "Please make a choice"
            },
            q9: {
                required: "Please make a choice"
            },
            q10: {
                required: "Please make a choice"
            }
        },
        submitHandler: function (form) {
            event.preventDefault();
            console.log(form);
            submitAnswers();
            
        }


    });


    function submitAnswers() {

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
        $.ajax("/api/survey", {
                type: "POST",
                data: answers
            })
            //We get the reponse of the answers send and display to modal
            .then(
                function (response) {
                    $("#bestName").text(response.name);
                    $("#bestImg").attr("src", response.photo)
                    $('.modal').modal("toggle");

                }
            );

    }

});