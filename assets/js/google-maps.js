var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.133481, lng: 10.018343 },
    zoom: 4
  });

  $.getJSON("assets/data/data-package-1.json", function(data) {
    $.each(data, function(key, value) {
      var latlng = new google.maps.LatLng(
        value.Location.Latitude,
        value.Location.Longitude
      );
      var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: value.HouseType + " | " + value.MaxPersons + " personen"
      });
    });
  });
}
