$(document).ready(function () {
    console.log("ready!");

    var randomNumber = Math.floor(Math.random() * 120) + 19;
    console.log(randomNumber);

    $("#numtoMatch").append(randomNumber);
    console.log(numtoMatch);

    // setting up random # to jewel
    numberExtractedFromJewel = 0;
    var one = Math.floor(Math.random() * 1) + 12;
    var two = Math.floor(Math.random() * 1) + 12;
    var three = Math.floor(Math.random() * 1) + 12;
    var four = Math.floor(Math.random() * 1) + 12;

    var keepingScore = 0;
    var Wins = 0;
    var Losses = 0;


    $("#wins").html(Wins);
    $("#losses").html(Losses);

    //now I gotta add the wins to the wins & losses to the losses
    function winning() {
        alert("You win!");
        Wins++;
        $('#Wins').html(Wins);
        reset();
    }

    function loser() {
        alert("You lost");
        Losses++;
        $('#Losses').html(Losses);
        reset();
    }

    function reset() {

        randomNumber = Math.floor(Math.random() * 120) + 19;
        one = Math.floor(Math.random() * 1) + 12;
        two = Math.floor(Math.random() * 1) + 12
        three = Math.floor(Math.random() * 1) + 12;
        four = Math.floor(Math.random() * 1) + 12;
        numberExtractedFromJewel = 0;
        $("#numberExtractedFromJewel").append(numberExtractedFromJewel);
    }

    //buttons for jewels

    $('#numberOne').on('click', function () {
        numberExtractedFromJewel += one;
        console.log("New numberExtractedFromJewel= " + numberExtractedFromJewel);
        $('.numberExtractedFromJewel').html("<p>" + numberExtractedFromJewel + "</p>");

        if (numberExtractedFromJewel === randomNumber) {
            winning();
        } else if (numberExtractedFromJewel > randomNumber) {
            loser();
        }
    })

    $('#two').on('click', function () {
        numberExtractedFromJewel += two;
        console.log("New numberExtractedFromJewel= " + numberExtractedFromJewel);
        $('.numberExtractedFromJewel').html("<p>" + numberExtractedFromJewel + "</p>");

        if (numberExtractedFromJewel === randomNumber) {
            winning();
        } else if (numberExtractedFromJewel > randomNumber) {
            loser();
        }

    })

    $('#three').on('click', function () {
        numberExtractedFromJewel += three;
        console.log("New numberExtractedFromJewel= " + numberExtractedFromJewel);
        $('.numberExtractedFromJewel').html("<p>" + numberExtractedFromJewel + "</p>");

        if (numberExtractedFromJewel === randomNumber) {
            winning();
        } else if (numberExtractedFromJewel > randomNumber) {
            loser();
        }
    })
    $('#four').on('click', function () {
        numberExtractedFromJewel += four;
        console.log("New numberExtractedFromJewel= " + numberExtractedFromJewel);
        $('.numberExtractedFromJewel').html("<p>" + numberExtractedFromJewel + "</p>");

        if (numberExtractedFromJewel === randomNumber) {
            winning();
        } else if (numberExtractedFromJewel > randomNumber) {
            loser();
        }
    })

});
