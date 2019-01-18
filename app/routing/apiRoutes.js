// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends data etc.
// ===============================================================================

var friends = require("../data/friends.js");
// ===============================================================================
// ROUTING
// ===============================================================================
// API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
// ---------------------------------------------------------------------------

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  //Next we need to build is a way for the users information that they put in the survey
  //to get put in the same format as my other objects that I can compare them
  //we need to determinewho has the closest answers to the same questions as the user and once we
  //determine who that best match is we want to display the name in the photograph to them

  // ---------------------------------------------------------------------------

  //  API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a survey request... this data is then sent to the server...
  // Then the server saves the data to the friends array)
  //create an object that has name and photo and then we also have a property called friend difference which
  //we're going to use to track the difference between their answers so we answered one on question one and if
  //someone else answered five on question one that they were four points different from each other
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {
    //  Note the code here. Our "server" will respond to requests and let users know if they have a friend match.
    //  req.body is available since we're using the body parsing middleware
    var matchFound = {
      name: "",
      photo: "",
      matchDifference: 1000
    };


    console.log(req.body);

    // we take the result of the user's servey POST and parse it here
    var userData = req.body;
    var userScores = userData.scores;
    console.log(userScores)

    // ceating a variable that will calculate the difference betwwen the user's scores and the 
    // scores of each user in the array
    var totalDifference = 0;

    // looping through all the friends possiblilites in the arra(database)
    for (var i = 0; i <= friends.length; i++) {
      console.log(friends[i]);
      totalDifference = 0;

      // we now need to loop through all the scores of each firend
      for (var j = 0; j <= friends[i].scores[j]; j++); {

        // calculating the difference between the scores and adding them into the totalDifference
        // // Math.abs will get rid of negative integers
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]))

        // if the sum of the different is less than the differences of the current matchFound
        if (totalDifference <= matchFound.matchDifference) {

          // resetting the matchFound to be the new friend
          matchFound.name = friends[i].name;
          matchFound.photo = friends[i].photo;
          matchFound.matchDifference = totalDifference;
        }
      }
    }

    // saving the user's data to the array of friends, this needs be done after
    //the check, else the array or the database will always return that the user is the user's best match.
    friends.push(userData);

    //returns a JSON with the user's match found. This will be used by the HTML in the next page
    res.json(matchFound);
  });

}



