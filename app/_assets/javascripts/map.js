//
// map module used for initializing google map on contact page
////////
module.exports.initializeMap = function() {
    var mapCanvas = document.getElementById('map-canvas'),
        map,
        mapOptions = {
          center: new google.maps.LatLng(43.6586847, -79.4463929),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: true
        };

        map = new google.maps.Map(mapCanvas, mapOptions);
        google.maps.event.addDomListener(window, 'resize', function () {
          var center = map.getCenter();
          google.maps.event.trigger(map, 'resize');
          map.setCenter(center);
        });
  };
