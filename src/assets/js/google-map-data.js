jQuery(document).ready(function($) {

    'use strict';

    /*Google map Latitude and longitude*/
    var lat = -37.817849;
    var long = 144.958231;

    var centerLong = long;

    var myLatlng = new google.maps.LatLng(lat, long);
    var centerPosition = new google.maps.LatLng(lat, centerLong);


    /*Maps Style 1 optios*/
    var googlemap1options = {
        zoom: 14,
        center: centerPosition,
        center: myLatlng,
        scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
    }


    var map1 = new google.maps.Map(document.getElementById("googlemap1"), googlemap1options);

    var marker1 = new google.maps.Marker({
        position: myLatlng,
        title: "Hello World!"
    });

    marker1.setMap(map1);



    /*Maps Style 2 optios*/
    var googlemap2options = {
        zoom: 14,
        center: centerPosition,
        styles: [{
            featureType: 'all',
            stylers: [{
                saturation: -80
            }]
        }, {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{
                hue: '#00ffee'
            }, {
                saturation: 50
            }]
        }, {
            featureType: 'poi.business',
            elementType: 'labels',
            stylers: [{
                visibility: 'off'
            }]
        }],
        scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
    }


    var map2 = new google.maps.Map(document.getElementById("googlemap2"), googlemap2options);

    var marker2 = new google.maps.Marker({
        position: myLatlng,
        title: "Hello World!"
    });

    marker2.setMap(map2);


    /*Maps Style 3 optios*/
    var googlemap3options = {
        zoom: 14,
        center: centerPosition,
        scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        styles: [{ "featureType": "water", "stylers": [{ "saturation": 43 }, { "lightness": -11 }, { "hue": "#0088ff" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "hue": "#ff0000" }, { "saturation": -100 }, { "lightness": 99 }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#808080" }, { "lightness": 54 }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ece2d9" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#ccdca1" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#767676" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#b8cb93" }] }, { "featureType": "poi.park", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.sports_complex", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.medical", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.business", "stylers": [{ "visibility": "simplified" }] }]

    }


    var map3 = new google.maps.Map(document.getElementById("googlemap3"), googlemap3options);

    var marker3 = new google.maps.Marker({
        position: myLatlng,
        title: "Hello World!"
    });

    marker3.setMap(map3);



});
