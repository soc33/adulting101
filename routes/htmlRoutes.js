var db = require("../models");
var quizzes = require("./quizButton.js");
// Dependencies
// =============================================================
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.
  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    db.quizScore
      .findAll({ where: { userId: req.user.id } })
      .then(function (dbUserScores) {
        // for loop is ok through quizzes object 
        res.render("index", {
          
      }
      });
});

// home route loads home.html
app.get("/", function (req, res) {
  db.User.findAll({}).then(function () {
    res.render("index", {
      msg: "Welcome!"
    });
  });
});

// Load example page and pass in an example by id
app.get("quiz/:quizId", function (req, res) {
  db.quizQuestion
    .findAll({ where: { quizId: req.params.quizId } })
    .then(function (dbquiz) {
      res.render("quiz", {
        question: dbquiz.question,
        answer1: dbquiz.answerOne,
        answer2: dbquiz.answerTwo,
        answer3: dbquiz.answerThree,
        answer4: dbquiz.answerFour,
        correct: dbquiz.correctAnswer,
        mom: momResponse,
        snarky: snarkyResponse
      });
    });
});

// Load quiz page
app.get("/quiz1/:user", function (req) {
  db.User.update(
    {
      quiz1: req.body.score
    },
    {
      where: { username: req.params.user }
    }
  ).then(function () {
    window.location.href = "/results/:user";
  });
});

// Render 404 page for any unmatched routes
app.get("*", function (req, res) {
  res.render("404");
});
};
