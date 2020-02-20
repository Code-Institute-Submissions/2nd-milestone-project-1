var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.133481, lng: 10.018343 },
    zoom: 4
  });
}
