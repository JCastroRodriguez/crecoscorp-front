"use strict";

$(document).ready(function() {
	// ION Range Slider
    $("#slider_1").ionRangeSlider({
        hide_min_max: true,
        keyboard: true,
        min: 0,
        max: 1000,
        from: 100,
        to: 700,
        type: 'double',
        step: 1,
        prefix: "$",
        grid: true
    });

    $("#slider_2").ionRangeSlider({
        type: "double",
        min: 0,
        max: 2000,
        step: 300,
        grid: true,
        grid_snap: true
    });

    $("#slider_3").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 20,
        to: 50,
        grid:true,
        from_fixed: true
    });
    $("#slider_4").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 30,
        to: 70,
        max_interval: 50
    });

});
