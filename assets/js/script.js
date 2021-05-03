$(document).ready(function(){

    // declaring variables for all time slots of the calendar
    // 0900
    var slot1 = localStorage.getItem("09:00");
    $("#nine").text(slot1);

    // 1000
    var slot2 = localStorage.getItem("10:00");
    $("#ten").text(slot2);

    // 1100
    var slot3 = localStorage.getItem("11:00");
    $("#eleven").text(slot3);

    // 1200
    var slot4 = localStorage.getItem("12:00");
    $("#twelve").text(slot4);

    // 1300
    var slot5 = localStorage.getItem("13:00");
    $("#thirteen").text(slot5);

    // 1400
    var slot6 = localStorage.getItem("14:00");
    $("#fourteen").text(slot6);

    // 1500
    var slot7 = localStorage.getItem("15:00");
    $("#fifteen").text(slot7);

    // 1600
    var slot8 = localStorage.getItem("16:00");
    $("#sixteen").text(slot8);
    
    // 1700
    var slot9 = localStorage.getItem("17:00");
    $("#seventeen").text(slot9);


    $(".storeEl").on("click", function() {
        
        var time = $(this).siblings(".time").text();
        var activity = $(this).siblings(".activity").val(); // This gets the VALUE of the description in jQuery
        
        localStorage.setItem(time, activity);
        $("this").siblings(".activity").textContent(localStorage.value);

    });
    // Displays the current date and time at top of calendar
    $("#today").text(moment().format("llll"));

});