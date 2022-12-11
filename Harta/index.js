// Initialize and add the map

function initMap() {

  let x1 = window.localStorage.getItem('lat1')
  let y1 = window.localStorage.getItem('lon1')
  let x = 0;
  let y = 0;
  console.log(x1)
  console.log(y1)
  while (!x1 && !y1) {
    x1 = window.localStorage.getItem('lat1')
    y1 = window.localStorage.getItem('lon1')
  }
  console.log(x1)
  console.log(y1)
    // The location of Uluru
    
    const uluru = { lat: x1, lng: 26.053855 };
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