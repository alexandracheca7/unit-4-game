$( document ).ready(function () {
    console.log("ready!");
});
   
    var randomNumber = Math.floor(Math.random() * 120 + 19)
    console.log(randomNumber);

    $("#numberToMatch").append('div id="numtoMatch"></div>');
    console.log(numtoMatch);

    // setting up random # to jewel
    var one = Math.floor(Math.random() * 1) + 12;
    var two = Math.floor(Math.random() * 1) + 12
    var three = Math.floor(Math.random() * 1) + 12;
    var four = Math.floor(Math.random() * 1) + 12;

    var keepingScore = 0;
    var wins = 0;
    var losses = 0;


    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#keepingScore").html(losses);

    // now i gotta reset the game

    function reseting() {

        randomNumber = Math.floor(Math.random() * 120) + 19;
        one = Math.floor(Math.random() * 1) + 12;
        two = Math.floor(Math.random() * 1) + 12
        three = Math.floor(Math.random() * 1) + 12;
        four = Math.floor(Math.random() * 1) + 12;
        numberExtractedFromJewel = 0;
        $("#numberExtractedFromJewel").html(numberExtractedFromJewel);
    }
    //now I gotta add the wins to the wins & losses to the losses
    function winning() {
        alert("You win!");
        wins++;
        $('#keepingScore').html(Wins);
        reset();
    }

    function loosing() {
        alert("You lost");
        losses++;
        $('#keepingScore').html(Losses);
        reset();
    }
    //buttoms for jewels

    $('#one').on('click', function () {
        numberExtractedFromJewel += numOne;
        console.log("New numberExtractedFromJewel= " + numberExtractedFromJewel);
        $('#numberExtractedFromJewel').html(numberExtractedFromJewel);

        if (numberExtractedFromJewel === randomNumber) {
            winning();
        } else if (numberExtractedFromJewel > randomNumber) {
            loser();
        }
    })



