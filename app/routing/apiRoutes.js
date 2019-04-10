var friendsData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function (req,res){
        res.json(friendsData);
    });


app.post("/api/friends", function(req, res){
    var friendScores = req.body.scores;
    var lowestDifference = 50;
    for (i=0;i<friendsData.length;i++){
        var difference = 0;

        for (j=0;j<friendScores.length;j++){
            difference += Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(friendScores[j]);    
        }

        if (difference < lowestDifference){
        lowestDifference = difference;
        }
    }
    friendsData.push(req.body);
    
});
};