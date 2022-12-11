// Initialize and add the map
function initMap() {
  let x1 = window.localStorage.getItem('lat1')
  let y1 = window.localStorage.getItem('lon1')
  let lt1 = parseFloat(x1)
  let ln1 = parseFloat(y1)

  let x2 = window.localStorage.getItem('lat2')
  let y2 = window.localStorage.getItem('lon2')
  let lt2 = parseFloat(x2)
  let ln2 = parseFloat(y2)

  let x3 = window.localStorage.getItem('lat3')
  let y3 = window.localStorage.getItem('lon3')
  let lt3 = parseFloat(x3)
  let ln3 = parseFloat(y3)

  let c1 = window.localStorage.getItem('latc')
  let c2 = window.localStorage.getItem('lonc')
  let ltc = parseFloat(c1)
  let lnc = parseFloat(c2)
  // The location of Uluru
  const coord_1 = {lat: lt1, lng: ln1};
  const coord_2 = {lat: lt2, lng: ln2};
  const coord_3 = {lat: lt3, lng: ln3};
  const user_coord = {lat: ltc, lng: lnc};
  //const coord_3 = {lat: 44.4410873, lng: 26.0516349};
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: user_coord,
  });
  // The marker, positioned at Uluru
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

window.initMap=initMap;