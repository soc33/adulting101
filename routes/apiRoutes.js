var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Get all examples
  app.get("/api/quiz", function(req, res) {
    // pulling user scores for each quiz in order to dynamically create the quiz buttons
    db.quizScore
      .findAll({ where: { userId: req.user.id } })
      .then(function(dbUserScores) {
        res.json(dbUserScores);
      });
  });

  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.user
      .create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  });

  app.get("/api/quiz/:id", function(req, res) {
    db.quizQuestion
      .findAll({ where: { quizId: req.params.id } })
      .then(function(dbquizQuestions) {
        res.json(dbquizQuestions);
      });
  });

  // this one may or may not work, needs to be tested! Different from example
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/members");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        username: req.user.username,
        id: req.user.id
      });
    }
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
};
