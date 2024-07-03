jQuery(document).ready(function($) {
    'use strict';
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

    /*Bar Char*/
    if ($('#morris_bar_chart').length > 0)
    // Bar Chart
        Morris.Bar({
        element: 'morris_bar_chart',
        data: [{
            item: 'Item 1',
            value: 436
        }, {
            item: 'Item 2',
            value: 137,

        }, {
            item: 'Item 3',
            value: 845
        }, {
            item: 'Item 4',
            value: 380
        }, {
            item: 'Item 5',
            value: 655
        }, {
            item: 'Item 6',
            value: 1571
        }],
        xkey: 'item',
        ykeys: ['value'],
        labels: ['Value'],
        barRatio: 0.4,
        xLabelAngle: 35,
        pointSize: 1,
        pointStrokeColors: ['#4caf50'],
        behaveLikeLine: true,
        gridLineColor: '#eee',
        gridTextColor: '#2f2c2c',
        hideHover: 'auto',
        barColors: ['#4caf50'],
        resize: true,
        gridTextFamily: "Lato"
    });


    // Donut Chart
    if ($('#morris_donut_chart').length > 0) {
        Morris.Donut({
            element: 'morris_donut_chart',
            data: [{
                label: "Download Sales",
                value: 12
            }, {
                label: "In-Store Sales",
                value: 30
            }, {
                label: "Mail-Order Sales",
                value: 20
            }],
            colors: ['#fcb03b', '#4caf50', '#566FC9'],
            resize: true,
            labelColor: '#2f2c2c',
        });
        $("div svg text").attr("style", "font-family: Lato").attr("font-weight", "400");
    }

    /*Line Chart*/

    if ($('#morris_line_chart').length > 0)
        Morris.Area({
            element: 'morris_line_chart',
            data: [{
                period: '2010',
                sales: 50,
                downloads: 80,
                visitors: 20
            }, {
                period: '2011',
                sales: 130,
                downloads: 100,
                visitors: 80
            }, {
                period: '2012',
                sales: 80,
                downloads: 60,
                visitors: 70
            }, {
                period: '2013',
                sales: 70,
                downloads: 200,
                visitors: 140
            }, {
                period: '2014',
                sales: 180,
                downloads: 150,
                visitors: 140
            }, {
                period: '2015',
                sales: 105,
                downloads: 100,
                visitors: 80
            }, {
                period: '2016',
                sales: 250,
                downloads: 150,
                visitors: 200
            }],
            xkey: 'period',
            ykeys: ['sales', 'downloads', 'visitors'],
            labels: ['Sales', 'Downloads', 'Visitors'],
            pointSize: 2,
            fillOpacity: 0,
            lineWidth: 2,
            pointStrokeColors: ['#ec407a', '#4caf50', '#566FC9'],
            behaveLikeLine: true,
            gridLineColor: '#eee',
            hideHover: 'auto',
            lineColors: ['#ec407a', '#4caf50', '#566FC9'],
            resize: true,
            gridTextColor: '#2f2c2c',
            gridTextFamily: "Lato"

        });
});
