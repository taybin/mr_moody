var displayChart = function(data){
    var categories = [],
        series = [],
        chart,
        i;

    for( i = 0; i < data.rows.length; i++ ) {
        categories.push(data.rows[i].key);
        series.push(data.rows[i].value);
    }

    chart = new Highcharts.Chart({
        chart: {
            renderTo: "graph"
        },
          xAxis: {
              categories: categories
          },
          series: [{
              data: series
          }]
    });
};

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
        url: '/moods',
        success: displayChart
    });
};

$(document).ready(function(){
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
