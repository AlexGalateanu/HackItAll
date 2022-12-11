// Initialize and add the map
function initMap() {
  // The location of Uluru
  const coord_1 = {};
  const coord_2 = {};
  const coord_3 = {};
  const user_coord = { lat: 44.4410873, lng: 26.0516349 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: user_coord,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: user_coord,
    map: map,
  });
  const marker_1 = new google.maps.Marker({
    position: coord_1,
    map: map,
  });
  const marker_2 = new google.maps.Marker({
    position: coord_2,
    map: map,
  });
  const marker_3 = new google.maps.Marker({
    position: coord_3,
    map: map,
  });
}

window.initMap = initMap;