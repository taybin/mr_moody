var MrMoody = {
    chart: null,

    displayChart: function(data){
        var categories = [],
        series = [],
        i;

        for( i = 0; i < data.rows.length; i++ ) {
            categories.push(data.rows[i].key);
            series.push(data.rows[i].value);
        }

        MrMoody.chart.xAxis[0].setCategories(categories);
        MrMoody.chart.series[0].setData(series);
        MrMoody.chart.redraw();
    },

    markMood: function(isHappy) {
        return $.ajax({
            type: 'post',
            url: '/mark',
            data: {
                happy: isHappy
            }
        });
    },

    getMood: function() {
        return $.ajax({
            type: 'get',
            url: '/moods',
            success: MrMoody.displayChart
        });
    }
};

$(document).ready(function(){
    MrMoody.chart = new Highcharts.Chart({
        chart: {
            renderTo: "graph"
        },
        series: [{
            data: [],
            showInLegend: false
        }],
        title: {
            text: "Mood over Time"
        }
    });

    $("#happy-btn").on('click', function(){
        MrMoody.markMood(true).done(MrMoody.getMood);
    });

    $("#sad-btn").on('click', function(){
        MrMoody.markMood(false).done(MrMoody.getMood);
    });

    MrMoody.getMood();
});
