$(document).ready(function(){

    var markMood = function(isHappy) {
        $.ajax({
            type: 'post',
            url: '/mark',
            data: {
                happy: isHappy,
                date: new Date().toDateString()
            }
        });
    };

    $("#happy-btn").on('click', function(){
        console.log("happy");
        markMood(true);
    });

    $("#sad-btn").on('click', function(){
        console.log("sad");
        markMood(false);
    });

});
