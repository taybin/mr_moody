$(document).ready(function(){

    var markMood = function(isHappy) {
        $.ajax({
            type: 'post',
            url: '/mark',
            data: {
                happy: isHappy
            }
        });
    };

    var getMood = function() {
        return $.ajax({
            type: 'get',
            url: '/moods'
        });
    };

    $("#happy-btn").on('click', function(){
        markMood(true);
        getMood();
    });

    $("#sad-btn").on('click', function(){
        markMood(false);
        getMood();
    });

    getMood();
});
