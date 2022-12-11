
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

async function show_coordonates(){
    let detail = await getdata();
    let html = '';
    detail.forEach(detail => {
        let htmlSegment = `<div>
                    <div> ${detail.location.latitude} <br> ${detail.location.longitude} <br><br></div>
                        </div>`;

                        html += htmlSegment;
                    });
                
                    let container = document.querySelector('.container');
                    container.innerHTML = html;
}

show_coordonates();
