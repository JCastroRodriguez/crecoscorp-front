/*Dashboard widgets and charts*/

$(document).ready(function() {
    "use strict";


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
            if ($('#spark5').length > 0) {
                $('#spark5').sparkline([5, 6, 2, 9, 4, 7, 5, 8, 5, 4], {
                    type: 'bar',
                    height: '200',
                    width: '100%',
                    barWidth: '10',
                    resize: true,
                    barSpacing: '5',
                    barColor: '#f15b26'
                });
                $('#spark5').sparkline([5, 6, 2, 9, 4, 7, 10, 12, 4, 7, 10], {
                    type: 'line',
                    height: '200',
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
                    height: '50',
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
                    height: '200',
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
                    height: '200',
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


    if ($('#morris_area_chart').length > 0)
    // Area Chart
        Morris.Area({
        element: 'morris_area_chart',
        data: [{
            period: '2010 Q1',
            sales: 2666,
            download: null,
            visitors: 2647
        }, {
            period: '2010 Q2',
            sales: 2778,
            download: 2294,
            visitors: 2441
        }, {
            period: '2011 Q3',
            sales: 4912,
            download: 1969,
            visitors: 2501
        }, {
            period: '2011 Q4',
            sales: 3767,
            download: 3597,
            visitors: 5689
        }, {
            period: '2011 Q1',
            sales: 6810,
            download: 1914,
            visitors: 2293
        }, {
            period: '2012 Q2',
            sales: 5670,
            download: 4293,
            visitors: 1881
        }, {
            period: '2012 Q3',
            sales: 4820,
            download: 3795,
            visitors: 1588
        }, {
            period: '2013 Q4',
            sales: 9073,
            download: 5967,
            visitors: 5175
        }, {
            period: '2015 Q1',
            sales: 8687,
            download: 4460,
            visitors: 2028
        }, {
            period: '2016 Q2',
            sales: 9432,
            download: 7713,
            visitors: 4991
        }],
        xkey: 'period',
        ykeys: ['sales', 'download', 'visitors'],
        labels: ['Sales', 'Download', 'Visitors'],
        pointSize: 0,
        pointStrokeColors: ['#fcb03b', '#9b59b6', '#566FC9'],
        behaveLikeLine: true,
        gridLineColor: '#eee',
        lineWidth: 0,
        resize: true,
        smooth: true,
        hideHover: 'auto',
        lineColors: ['#8bc34a', '#ea65a2', '#566FC9'],
        gridTextColor: '#2f2c2c',
        gridTextFamily: "Lato",
    });


    if ($('#visitors_map').length > 0) {
        $('#visitors_map').vectorMap({
            map: 'world_mill_en',
            backgroundColor: '#fff',
            borderColor: '#fff',
            borderOpacity: 0.25,
            borderWidth: 0,
            color: '#e6e6e6',
            regionStyle: {
                initial: {
                    fill: 'rgba(86,111,201,.4)'
                }
            },

            markerStyle: {
                initial: {
                    r: 3,
                    'fill': '#999',
                    'fill-opacity': 1,
                    'stroke': '#000',
                    'stroke-width': 1,
                    'stroke-opacity': 0.4
                },
            },

            markers: [{
                latLng: [48.858093, 2.294694],
                name: 'France : 350'

            }, {
                latLng: [-33.00, 151.00],
                name: 'Australia : 250'

            }, {
                latLng: [51.045807, -114.059036],
                name: 'Canada : 250'

            }, {
                latLng: [22.210928, 113.552971],
                name: 'China : 250'

            }, {
                latLng: [36.77, -119.41],
                name: 'USA : 250'

            }, {
                latLng: [55.37, -3.41],
                name: 'UK   : 250'

            }, {
                latLng: [55.702888, 37.530582],
                name: 'Russia : 33'

            }],

            hoverOpacity: null,
            normalizeFunction: 'linear',
            zoomOnScroll: false,
            scaleColors: ['#000000', '#000000'],
            selectedColor: '#000000',
            selectedRegions: [],
            enableZoom: false,
            hoverColor: '#fff',
        });
    }

    if ($('#chart_3').length > 0) {
        var ctx3 = document.getElementById("chart_3").getContext("2d");
        var data3 = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: "rgba(233, 30, 99, 0.8)",
                borderColor: "rgba(233, 30, 99, 0.8)",
                pointBackgroundColor: "rgba(233, 30, 99, 0.8)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(233, 30, 99, 1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            }, {
                label: "My Second dataset",
                backgroundColor: "rgba(86,111,201,0.8)",
                borderColor: "rgba(86,111,201,0.8)",
                pointBackgroundColor: "rgba(86,111,201,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(86,111,201,1)",
                data: [28, 48, 40, 19, 96, 27, 100]
            }]
        };
        var radarChart = new Chart(ctx3, {
            type: "radar",
            data: data3,
            options: {
                scale: {
                    ticks: {
                        beginAtZero: true,
                        fontFamily: "Lato",

                    },
                    gridLines: {
                        color: "#eee",
                    },
                    pointLabels: {
                        fontFamily: "Lato",
                        fontColor: "#2f2c2c"
                    },
                },

                animation: {
                    duration: 3000
                },
                responsive: true,
                legend: {
                    labels: {
                        fontFamily: "Lato",
                        fontColor: "#2f2c2c"
                    }
                },
                tooltips: {
                    backgroundColor: 'rgba(47,44,44,.9)',
                    cornerRadius: 0,
                    footerFontFamily: "'Lato'"
                }
            }
        });
    }
});
