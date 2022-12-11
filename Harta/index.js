// Initialize and add the map
function initMap(coord_lat, coord_long) {
    // The location of Uluru
    const uluru = { lat: 44.4410873, lng: 26.0516349 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;