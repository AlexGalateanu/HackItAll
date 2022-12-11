var x = document.getElementById("demo");

async function getdata() {
    let url = 'http://localhost:3000/serviceResponse';

    let response = await fetch(url);

    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        return json;
    } else {
        alert("HTTP-Error: " + response.status);
  }
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(show_chosen_position);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

async function show_chosen_position(position) {
    let detail = await getdata();
    let html = '';
    let  val_la, val_lo, val_fi;
    let id1, id2, id3, dis1 = 20, dis2 = 20, dis3 = 20;
    let i, j;
    let lat, lon;

  //  for (i = 0; i < 5; i++)
  //      dis[i] = 0;

    detail.forEach(detail => {
        lat = parseFloat(detail.location.latitude);
        lon = parseFloat(detail.location.longitude);

        val_la = (position.coords.latitude - lat) * (position.coords.latitude - lat); 
        val_lo = (position.coords.longitude - lon) * (position.coords.longitude - lon);
        val_fi = val_la + val_lo;
        val_fi = Math.sqrt(val_fi);

        html += val_fi + ` ` + detail.branchId + '<br>';

        if (val_fi < dis1) {

        } else if (val_fi < dis2) {

            } else if (val_fi < dis3) {

                }
        

       // html += lat + lon + `<br>`
    
    });
    let container = document.querySelector('.container');
    container.innerHTML = html;

}

getLocation()