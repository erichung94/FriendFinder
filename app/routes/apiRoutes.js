var path = require('path');

var friendsData = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function (req,res){
        res.json(friendsData);
    })
};

app.post("/api/friends", function(req, res){
    var friendScores = req.body.scores;
    for (i=0;i<friendsData.length;i++){
        var difference = 0;

        for (j=0;j<friendScores.length;j++){
            difference += Math.abs(friendsData[i].scores[j] - friendScores[j]);    
        }

        if (difference < lowestDifference){
        lowestDifference = difference;
        }
    }
    friendsData.push(req.body);
    
});