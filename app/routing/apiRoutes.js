var friends = require('../data/friends.js');
//Get the response from  AJAX post  done on submit button
function apirouting(app) {
    app.get("/api/survey", function (req, res) {
        res.json(answers);
    });

    //This is to send the result back to client after finding the best match
    app.post("/api/survey", function (req, res) {
        //Initialise the best match parameters
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        //get the body from the request and set it against userData
        var userData = req.body;
        //get the scores from userdata
        var userScores = userData.scores;
        // set the matching difference to 0
        var totalDifference = 0;

        //loop through the number of friends in the array a
        for (var i = 0; i < friends.length; i++) {

            console.log(friends[i].name);
            totalDifference = 0;
            //loop through each friends score
            for (var x = 0; x < friends[i].scores[x]; x++) {
                // we need only the positive value of the difference ofr each score calculated 
                totalDifference += Math.abs(parseInt(userScores[x]) - parseInt(friends[i].scores[x]));

                //if the score is less or equal to the friend Difference score then update the new friend martch
                if (totalDifference <= bestMatch.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        friends.push(userData);
        res.json(bestMatch);

    });

};



module.exports = apirouting