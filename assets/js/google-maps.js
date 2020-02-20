var map;
var markers = [];

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

      var contentInfoWindow =
        `<div id="content">
        ` +
        `
        <div id="siteNotice">` +
        `</div>
        ` +
        `
        <h5 class="infoWindowTitle">` +
        value.Title +
        `</h5>
        ` +
        `
        <div class="infoWindowImage">
          ` +
        `<img src="` +
        value.Images_330x220.split(",")[0] +
        `" />` +
        `
        </div>
        ` +
        `<div class="infoWindowTextWrapper">
          ` +
        `<p class="infoWindowText">` +
        value.Description +
        `</p> ` +
        `
        </div>
        ` +
        `
      </div>
  
      `;

      var infowindow = new google.maps.InfoWindow({
        content: contentInfoWindow
      });

      var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: value.HouseType + " | " + value.MaxPersons + " personen"
      });

      // Add markers to cluster of markers
      markers.push(marker);

      marker.addListener("click", function() {
        infowindow.open(map, marker);
      });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
    });
  });
}
