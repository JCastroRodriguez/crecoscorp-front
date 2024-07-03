jQuery(document).ready(function($) {
    'use strict';


    /*Spark Lines*/

    var sparklineLogin = function() {
        if ($('#spark1').length > 0) {
            $("#spark1").sparkline([2, 4, 4, 6, 8, 5, 6, 4, 8, 6, 6, 8], {
                type: 'line',
                width: '100%',
                height: '50',
                resize: true,
                lineColor: '#566FC9',
                fillColor: '#673ab7',
                maxSpotColor: '#566FC9',
                highlightLineColor: 'rgba(0, 0, 0, 0.2)',
                highlightSpotColor: '#566FC9'
            });
        }
        if ($('#spark2').length > 0) {
            $("#spark2").sparkline([0, 2, 8, 6, 8, 5, 6, 4, 8, 6, 6, 9], {
                type: 'bar',
                width: '100%',
                height: '50',
                barWidth: '5',
                resize: true,
                barSpacing: '5',
                barColor: '#3cb878',
                highlightSpotColor: '#3cb878'
            });
        }
        if ($('#spark3').length > 0) {
            $("#spark3").sparkline([20, 8, 4], {
                type: 'pie',
                width: '50',
                height: '50',
                resize: true,
                sliceColors: ['#566FC9', '#fcb03b', '#ea65a2']
            });
        }

        if ($('#spark4').length > 0) {
            $('#spark4').sparkline([15, 23, 55, 35, 54, 45, 66, 47, 30], {
                type: 'line',
                width: '100%',
                height: '50',
                chartRangeMax: 50,
                resize: true,
                lineColor: 'rgba(234,101,162, 0.6)',
                fillColor: 'rgba(234,101,162, 0.6)',
                highlightLineColor: 'rgba(0,0,0,0)',
                highlightSpotColor: 'rgba(0,0,0,0)',
            });
            $('#spark4').sparkline([0, 13, 10, 14, 15, 10, 18, 20, 30], {
                type: 'line',
                width: '100%',
                height: '50',
                chartRangeMax: 40,
                lineColor: 'rgba(252,176,59, 0.6)',
                fillColor: 'rgba(252,176,59, 0.6)',
                composite: true,
                resize: true,
                highlightLineColor: 'rgba(0,0,0,0)',
                highlightSpotColor: 'rgba(0,0,0,0)',
            });

        }
    }
    var sparkResize;

    $(window).resize(function(e) {
        clearTimeout(sparkResize);
        sparkResize = setTimeout(sparklineLogin, 200);
    });
    sparklineLogin();


    $('[data-toggle="counter"]').each(function(a, b) {
        var c = $(this),
            d = "",
            e = "",
            f = 0,
            g = 0,
            h = 0,
            i = 2.5;
        c.data("prefix") && (d = c.data("prefix")), c.data("suffix") && (e = c.data("suffix")), c.data("start") && (f = c.data("start")), c.data("end") && (g = c.data("end")), c.data("decimals") && (h = c.data("decimals")), c.data("duration") && (i = c.data("duration"));
        var j = new CountUp(c.get(0), f, g, h, i, { suffix: e, prefix: d });
        j.start()
    });


    /*Pie Charts*/
    if ($('#pie_chart_1').length > 0) {
        $('#pie_chart_1').easyPieChart({
            barColor: '#3f51b5',
            lineWidth: 2,
            animate: 3000,
            size: 100,
            lineCap: 'square',
            scaleColor: false,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }
    if ($('#pie_chart_2').length > 0) {
        $('#pie_chart_2').easyPieChart({
            barColor: '#e91e63',
            lineWidth: 2,
            animate: 3000,
            size: 100,
            lineCap: 'square',
            scaleColor: false,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }
    if ($('#pie_chart_3').length > 0) {
        $('#pie_chart_3').easyPieChart({
            animate: 3000,
            barColor: '#03a9f4',
            lineWidth: 2,
            size: 100,
            scaleColor: false,
            lineCap: 'square',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }
    if ($('#pie_chart_4').length > 0) {
        $('#pie_chart_4').easyPieChart({
            barColor: '#4caf50',
            lineWidth: 2,
            animate: 3000,
            size: 100,
            lineCap: 'square',
            trackColor: false,
            scaleColor: false,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }

    /*Chat*/
    $("#input_msg_send").keypress(function(e) {
        if ((e.which == 13) && (!$(this).val().length == 0)) {
            $('<li class="self"><div class="self-msg-wrap"><div class="msg block pull-right">' + $(this).val() + '<div class="msg-per-detail mt-5"><span class="msg-time txt-grey">4:30pm</span></div></div></div><div class="clearfix"></div></li>').insertAfter(".chat-content > ul li:last-child");
            $(this).val('');
        } else if (e.which == 13) {
            alert('Please type somthing!');
        }
    });



});
