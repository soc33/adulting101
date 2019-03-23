var score = 0; //Initial score
var total = 3; //total number of questions
var point = 1; //Points per correct answer
var highest = total * point; //equation for highest score

//Initialize 
function init() {
    //Correct Answers are set below 
    sessionStorage.setItem('a1', 'male');//This basically says that for question 1, the answer is B
    sessionStorage.setItem('a2', 'male');
    sessionStorage.setItem('a3', 'other');
    sessionStorage.setItem('a4', 'other');
    sessionStorage.setItem('a5', 'other');
    sessionStorage.setItem('a6', 'other');
    sessionStorage.setItem('a7', 'female');
    sessionStorage.setItem('a8', 'other');
    sessionStorage.setItem('a9', 'female');


$(document).ready(function () {
    
    // This hides the questions after the first one
    $('.btn btn-primary').hide();

    //This one shows the first question on load
    $('#1').show();

    //This function jumps to the next question when the "submit" button is pressed
    $('#1 #submit').click(function () {
        $('.btn btn-primary').hide();
        return false;
    });

    $('#2 #submit').click(function () {
        $('.btn btn-primary').hide();
        return false;
    });

    $('#3 #submit').click(function () {
        $('.btn btn-primary').hide();
        return false;
    });

    $('#4 #submit').click(function () {
        $('.btn btn-primary').hide();
        return false;
    });

    $('#5 #submit').click(function () {
        $('.btn btn-primary').hide();
        return false;
    });

    $('#6 #submit').click(function () {
        $('.btn btn-primary').hide();
        return false;
    });

    $('#7 #submit').click(function () {
        $('.btn btn-primary').hide();
        return false;
    });

    $('#8 #submit').click(function () {
        $('.btn btn-primary').hide();
        return false;
    });

    $('#9 #submit').click(function () {
        $('.btn btn-primary').hide();
        return false;
    });
});
//Process the answers
function process(q) {
    if (q == "gender1") {
        var submitted = $('input[name=gender1]:checked').val();
        if (submitted == sessionStorage.a1) {
            score++;
        }
    }

    if (q == "gender2") {
        var submitted = $('input[name=gender2]:checked').val();
        if (submitted == sessionStorage.a2) {
            score++;
        }
    }

    if (q == "gender3") {
        var submitted = $('input[name=gender3]:checked').val();
        if (submitted == sessionStorage.a3) {
            score++;
        }
    }
    if (q == "gender4") {
        var submitted = $('input[name=gender4]:checked').val();
        if (submitted == sessionStorage.a4) {
            score++;
        }
    }
    if (q == "gender5") {
        var submitted = $('input[name=gender5]:checked').val();
        if (submitted == sessionStorage.a5) {
            score++;
        }
    }
        if (q == "gender6") {
            var submitted = $('input[name=gender6]:checked').val();
            if (submitted == sessionStorage.a6) {
                score++;
            }
        }
        if (q == "gender7") {
            var submitted = $('input[name=gender7]:checked').val();
            if (submitted == sessionStorage.a7) {
                score++;
            }
        }
        if (q == "gender8") {
            var submitted = $('input[name=gender8]:checked').val();
            if (submitted == sessionStorage.a8) {
                score++;
            }
        }

        if (q == "gender9") {
            var submitted = $('input[name=gender9]:checked').val();
            if (submitted == sessionStorage.a9) {
                score++;
            }
        }

        $('#results').html('<h3>Your score is: ' + score + ' out of 9</h3>');
    }
    return false;
}
    
// submits question to db, redirects to categories html page
function submitQuiz(Quiz) {
    $.post("/api/quiz", Quiz, function() {
      window.location.href = "/";
    });
  }
       
        $("#startOverBtn").show();
        $("#startOverBtn").html("RESTART GAME");

        //function below shows the order of functions we want to be read
        window.addEventListener('load', init, false);