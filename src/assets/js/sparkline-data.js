jQuery(document).ready(function($) {
    'use strict';

    /*Spark Lines*/

    var sparklineLogin = function() {
        if ($('#spark1').length > 0) {
            $("#spark1").sparkline([2, 4, 4, 6, 8, 5, 6, 4, 8, 6, 6, 8], {
                type: 'line',
                width: '100%',
                height: '80',
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
                height: '80',
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
                height: '80',
                resize: true,
                sliceColors: ['#566FC9', '#fcb03b', '#ea65a2']
            });
        }

        if ($('#spark4').length > 0) {
            $('#spark4').sparkline([15, 23, 55, 35, 54, 45, 66, 47, 30], {
                type: 'line',
                width: '100%',
                height: '80',
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
                height: '80',
                chartRangeMax: 40,
                lineColor: 'rgba(252,176,59, 0.6)',
                fillColor: 'rgba(252,176,59, 0.6)',
                composite: true,
                resize: true,
                highlightLineColor: 'rgba(0,0,0,0)',
                highlightSpotColor: 'rgba(0,0,0,0)',
            });
            if ($('#spark5').length > 0) {
                $('#spark5').sparkline([5, 6, 2, 9, 4, 7, 5, 8, 5, 4], {
                    type: 'bar',
                    height: '90',
                    width: '100%',
                    barWidth: '10',
                    resize: true,
                    barSpacing: '5',
                    barColor: '#f15b26'
                });
                $('#spark5').sparkline([5, 6, 2, 9, 4, 7, 10, 12, 4, 7, 10], {
                    type: 'line',
                    height: '90',
                    width: '100%',
                    lineColor: '#f15b26',
                    fillColor: 'transparent',
                    composite: true,
                    highlightLineColor: 'rgba(0,0,0,.1)',
                    highlightSpotColor: 'rgba(0,0,0,.2)'
                });
            }

            if ($('#spark6').length > 0) {
                $("#spark6").sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40, 45, 56, 17, 10, 45, 56, 37, 40, 45, 56, 17, 60], {
                    type: 'line',
                    width: '100%',
                    height: '80',
                    lineColor: '#fcb03b',
                    fillColor: 'transparent',
                    spotColor: '#fff',
                    minSpotColor: undefined,
                    maxSpotColor: undefined,
                    resize: true,
                    highlightSpotColor: undefined,
                    highlightLineColor: undefined
                });
            }
            if ($('#spark7').length > 0) {
                $("#spark7").sparkline([5, 6, 2, 8, 9, 4, 7, 10, 5, 4, 2], {
                    type: 'bar',
                    height: '90',
                    width: '100%',
                    barWidth: 10,
                    barSpacing: 5,
                    barColor: '#fcb03b',
                    resize: true,
                });
            }
            if ($('#spark8').length > 0) {
                $("#spark8").sparkline([20, 10, 4], {
                    type: 'pie',
                    width: '200',
                    height: '90',
                    resize: true,
                    sliceColors: ['#fcb03b', '#ea65a2', '#f15b26']
                });
            }
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

});
