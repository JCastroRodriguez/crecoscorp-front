  if ($('#world_map_marker').length > 0) {
      $('#world_map_marker').vectorMap({
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

  if ($('#usa_map_marker').length > 0) {
      $('#usa_map_marker').vectorMap({
          map: 'us_aea',
          backgroundColor: 'transparent',
          regionStyle: {
              initial: {
                  fill: 'rgba(86,111,201,.4)'
              }
          }
      });
  }


  
  if ($('#canada_map_marker').length > 0) {
      $('#canada_map_marker').vectorMap({
          map: 'ca_lcc',
          backgroundColor: 'transparent',
          regionStyle: {
              initial: {
                  fill: 'rgba(86,111,201,.4)'
              }
          }
      });
  }


  if ($('#uk_map_marker').length > 0) {
      $('#uk_map_marker').vectorMap({
          map: 'uk_countries_mill',
          backgroundColor: 'transparent',
          regionStyle: {
              initial: {
                  fill: 'rgba(86,111,201,.4)'
              }
          }
      });
  }

  if ($('#australia_map_marker').length > 0) {
      $('#australia_map_marker').vectorMap({
          map: 'au_merc',
          backgroundColor: 'transparent',
          regionStyle: {
              initial: {
                  fill: 'rgba(86,111,201,.4)'
              }
          }
      });
  }

  if ($('#china_map_marker').length > 0) {
      $('#china_map_marker').vectorMap({
          map: 'cn_mill',
          backgroundColor: 'transparent',
          regionStyle: {
              initial: {
                  fill: 'rgba(86,111,201,.4)'
              }
          }
      });
  }

  if ($('#france_map_marker').length > 0) {
      $('#france_map_marker').vectorMap({
          map: 'fr_regions_2016_mill',
          backgroundColor: 'transparent',
          regionStyle: {
              initial: {
                  fill: 'rgba(86,111,201,.4)'
              }
          }
      });
  }
