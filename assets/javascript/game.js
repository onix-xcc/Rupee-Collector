$(document).ready(function () {

    //Establish default variables for start of game and score tracking//

    var randoTargetNum = 0;
    var wins = 0;
    var losses = 0;
    var trackRupeeTotal = 0;

    //Rupee variables//

    var greenRupee = 0;
    var blueRupee = 0;
    var redRupee = 0;
    var purpleRupee = 0;

    //Establish randomizing function for Rupees and target number//

    function beginQuest() {
        randoTargetNum = Math.floor(Math.random() * 120) + 10;
        greenRupee = Math.floor(Math.random() * 12) + 1;
        blueRupee = Math.floor(Math.random() * 12) + 1;
        redRupee = Math.floor(Math.random() * 12) + 1;
        purpleRupee = Math.floor(Math.random() * 12) + 1;

        // JQuery assigns values and puts them on the HTML//
        $("#genRandoNum").text(randoTargetNum);
        $("#one").attr("assignRupeeVal", greenRupee);
        $("#five").attr("assignRupeeVal", blueRupee);
        $("#twenty").attr("assignRupeeVal", redRupee);
        $("#fifty").attr("assignRupeeVal", purpleRupee);
        trackRupeeTotal = 0;
        $("#rupeesCollected").empty();
    }

    //Begin quest//
    beginQuest();

    $(".rupeeImg").on("click", function () {
        var rupeeVal = ($(this).attr("assignRupeeVal"));
        rupeeVal = parseInt(rupeeVal);
        trackRupeeTotal += rupeeVal
        $("#rupeesCollected").text(trackRupeeTotal);

        if (trackRupeeTotal === randoTargetNum) {
            alert("You have fulfilled your quest! Now go claim the Triforce!");
            wins++;
            $("#winCounter").text(wins);
            beginQuest();
        }

        else if (trackRupeeTotal >= randoTargetNum) {
            alert("Hyrule is doomed! Travel back in time and try again!");
            losses++;
            $("#lossCounter").text(losses);
            beginQuest();}

    })
})