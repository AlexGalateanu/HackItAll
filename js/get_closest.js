var lat1, lat2, lat3, lon1, lon2, lon3;

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

async function getLocation() {
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
    let id1=0, id2=0, id3=0, dis1 = 20, dis2 = 20, dis3 = 20;
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
        html = ""
        if (val_fi < dis1) {
            dis3 = dis2;
            dis2 = dis1;
            dis1 = val_fi;

            id3 = id2;
            id2 = id1;
            id1 = detail.branchId;
        } else if (val_fi < dis2) {
            dis3 = dis2;
            dis2 = val_fi;

            id3 = id2;
            id2 = detail.branchId;

            } else if (val_fi < dis3) {
                dis3 = val_fi;
    
                id3 =  detail.branchId;
                }
        
            //    html += `${dis1} ${id1} <br>${dis2} ${id2} <br>${dis3} ${id3} <br><br>`
       // html += lat + lon + `<br>`
    
    });

    detail.forEach(detail => {
        if (detail.branchId == id1) {
          html += `<button type="button"> \`Nume:${detail.brn}<br>Strada:${detail.br_street}<br>Telefon:${detail.telephone}<br>Program:<br>
          Luni-Vineri:${detail.schedule.mf}<br>Sambata:${detail.schedule.sat}<br>Duminica:${detail.schedule.sun}<br>
          \`</button><br>`
          lat1  = detail.location.latitude;
          lon1 = detail.location.longitude;
          return
        }
    });

    detail.forEach(detail => {
      if (detail.branchId == id2) {
        html += `<button type="button"> \`Nume:${detail.brn}<br>Strada:${detail.br_street}<br>Telefon:${detail.telephone}<br>Program:<br>
        Luni-Vineri:${detail.schedule.mf}<br>Sambata:${detail.schedule.sat}<br>Duminica:${detail.schedule.sun}<br>
        \`</button><br>`
        lat2  = detail.location.latitude;
        lon2 = detail.location.longitude;
        return
      }
    });

    detail.forEach(detail => {
      if (detail.branchId == id3) {
        html += `<button type="button"> \`Nume:${detail.brn}<br>Strada:${detail.br_street}<br>Telefon:${detail.telephone}<br>Program:<br>
        Luni-Vineri:${detail.schedule.mf}<br>Sambata:${detail.schedule.sat}<br>Duminica:${detail.schedule.sun}<br>
        \`</button><br>`
        lat3  = detail.location.latitude;
        lon3 = detail.location.longitude;
        return
      }
      
    });

    let container = document.querySelector('.container');
    container.insertAdjacentHTML("beforeend", html);

    window.localStorage.setItem('lat1', lat1)
    window.localStorage.setItem('lon1', lon1)
   // console.log(lat1);
    // Data which will write in a file.
    //console.log(window.localStorage.getItem('lat1'))
    //console.log(window.localStorage.getItem('lon1'))
    
}


async function call_getlocation() {
  await getLocation()
  
//console.log(lat1);
}
call_getlocation()