$(document).ready(function () {
    // when the page is loaded first, the timer, questions and summary must be hidden.

    $('.timer').hide();
    $('#theQuestions').hide();
    $('.theResults').hide();
    $('#doneGame').hide();


    var number = 20;
    var intervalId;
    var answeredCorrectly= 0;
    var answeredIncorrectly= 0;
    var unansweredQuestions= 0;



    $(".timer").on("click".run);

    function timer() {
        intervalId = setInterval(decrement, 1000);
    }

    timer ();

    function decrement() {
        number--;
        $(".timer").html(" " + number + " " + "seconds");
        if (number === 1) {
            $(".timer").html(" " + number + " " + "second");
        }
        else if (number === 0) {
            stop();
            hide();
            displaySummary();
        }
    }
    decrement();

    function stop() {
        clearInterval(intervalId);
    }


    function displaySummary(){
        $('.theResults').show();
        unansweredQuestions = (5-(answeredCorrectly+wrongCount));
        $('#answeredCorrectly').html("Correct Answers:" + " " + answeredCorrectly); 
        $('#answeredIncorrectly').html("Wrong Answers:" + " " + answeredIncorrectly); 
        $('#unansweredQuestions').html("Unanswered:" + " " + unansweredQuestions); 
    }


    //buttons
    $('#startGame').on('click', function () {
        $('#startGame').hide();
        $("#theQuestions").show();
        $(".timer").show();
        $("#doneGame").show();

    });


    $("#doneGame").on('click', function () {
        $('#doneGame').hide();
        $(".theResults").show();
        $("#theQuestions").hide();
        $(".timer").hide();
    });


    $('input[type=radio]').on ('change', function(){
        answeredCorrectly = $('input[value=correct]:checked').length;
        answeredIncorrectly = $('input[value=incorrect]:checked').length;
        unansweredQuestions = (5-(answeredCorrectly+answeredIncorrectly));
        });



});

