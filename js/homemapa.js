function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.4190452, lng: -70.6417096},
    zoom: 17
  });
  var geocoder = new google.maps.Geocoder();
 
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
        var marker = new google.maps.Marker({
    position: pos,
    map: map,
    title: 'Hello World!'
  });
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
   document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
 var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
var infoWindow = new google.maps.InfoWindow({map:map});
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: La Geolocalizacion fallo.' :
                        'Error: Su navegador no sopurta la Geolocalizacion.');
}
}