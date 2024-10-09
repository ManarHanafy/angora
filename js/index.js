/// <reference types="../@types/jquery" />
$('.openNav').on('click',function(){
    $('#leftMenu').animate({width:'250px'},100),
    $('#home-content').animate({'padding-left':'250px'},500)
})

$('.closebtn').on('click',function(){
    $('#leftMenu').animate({width:'0%'},100)
    $('#home-content').animate({'padding-left':'16px'},500)
})

$('.titel').on('click',function(e){
    $(e.target).next().slideToggle(1000)
    $('.text').not($(e.target).next()).slideUp(1000);
});

$(document).ready(function() {
    let initialDays = 100;
    let initialHours = 10;
    let initialMinutes = 54;
    let initialSeconds = 59;

    let days = initialDays;
    let hours = initialHours;
    let minutes = initialMinutes;
    let seconds = initialSeconds;

    let countdownFunction = setInterval(function() {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        if (hours < 0) {
            hours = 23;
            days--;
        }
        if (days < 0) {
            days = initialDays;
            hours = initialHours;
            minutes = initialMinutes;
            seconds = initialSeconds;
        }
        $('.days').text(days + " D");
        $('.hours').text(hours + " h");
        $('.minutes').text(minutes + " m");
        $('.seconds').text(seconds + " s");

    }, 1000);
});

$('form textarea').on('input',function(e){
    let chars=100
    var currentLength = $(this).val().length;
    var remainingChars = chars - currentLength;
    $('#chars').text(remainingChars);
    if (remainingChars < 0) {
        $('#chars').text('your available character finished')
    }
})