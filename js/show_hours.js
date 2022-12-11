
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

async function show_hours(id, wkend){
    let detail = await getdata();
    let html = '';
    id = 128;
    wkend = 0;

    detail.forEach(detail => {

        
        let periods = detail.schedule.mf;
        let start1, end1, start2, end2;


        if (detail.branchId == id) {
            if (wkend == 0) {
                if (detail.scheduleBreak.mf != "") {
                    start1 = periods[0] + periods[1] + periods[3] + periods[4];
                    if (periods[3] == 0) {
                        start1 = parseInt(start1);
                    } else {
                        start1 = parseInt(start1);
                        start1 += 20;
                    }

                    end1= periods[8] + periods[9] + periods[11] + periods[12];
                    if (periods[11] == 0) {
                        end1 = parseInt(end1);
                    } else {
                        end1 = parseInt(end1);
                        end1 += 20;
                    }

                    start2 = periods[17] + periods[18] + periods[20] + periods[21];
                    if (periods[20] == 0) {
                        start2 = parseInt(start2);
                    } else {
                        start2 = parseInt(start2);
                        start2 += 20;
                    }

                    end2 = periods[25] + periods[26] + periods[28] + periods[29];
                    if (periods[28] == 0) {
                        end2 = parseInt(end2);
                    } else {
                        end2 = parseInt(end2);
                        end2 += 20;
                    }

                } else {
                    start1 = periods[0] + periods[1] + periods[3] + periods[4];
                    if (periods[3] == 0) {
                        start1 = parseInt(start1);
                    } else {
                        start1 = parseInt(start1);
                        start1 += 20;
                    }

                    end1= periods[8] + periods[9] + periods[11] + periods[12];
                    if (periods[11] == 0) {
                        end1 = parseInt(end1);
                    } else {
                        end1 = parseInt(end1);
                        end1 += 20;
                    }
                }
            }
            if (wkend == 1) {

            }

            let htmlSegment='';

            if (detail.scheduleBreak.mf != "") {
                while (start1 < end1) {
                    if (start1 < 1000) 
                        htmlSegment = '0';
                    else
                        htmlSegment = '';
                    if (start1 % 100 == 50) {
                        htmlSegment += (start1-50)/100 + ':30';
                    } else {
                        htmlSegment += start1/100 + ':00';
                    }

                    start1 += 50;
                    htmlSegment += ' - ';
                    html += htmlSegment;

                    if (start1 < 1000) 
                        htmlSegment = '0';
                    else
                        htmlSegment = '';
                    if (start1 % 100 == 50) {
                        htmlSegment += (start1-50)/100 + ':30';
                    } else {
                        htmlSegment += start1/100 + ':00';
                    }
                    html += htmlSegment + `<br>`
                }

                while (start2 < end2) {
                    if (start2 < 1000) 
                        htmlSegment = '0';
                    else
                        htmlSegment = '';
                    if (start2 % 100 == 50) {
                        htmlSegment += (start2-50)/100 + ':30';
                    } else {
                        htmlSegment += start2/100 + ':00';
                    }

                    start2 += 50;
                    htmlSegment += ' - ';
                    html += htmlSegment;

                    if (start2 < 1000) 
                        htmlSegment = '0';
                    else
                        htmlSegment = '';
                    if (start2 % 100 == 50) {
                        htmlSegment += (start2-50)/100 + ':30';
                    } else {
                        htmlSegment += start2/100 + ':00';
                    }
                    html += htmlSegment + `<br>`}
            } else {
                while (start1 < end1) {
                    if (start1 < 1000) 
                        htmlSegment = '0';
                    else
                        htmlSegment = '';
                    if (start1 % 100 == 50) {
                        htmlSegment += (start1-50)/100 + ':30';
                    } else {
                        htmlSegment += start1/100 + ':00';
                    }

                    start1 += 50;
                    htmlSegment += ' - ';
                    html += htmlSegment;

                    if (start1 < 1000) 
                        htmlSegment = '0';
                    else
                        htmlSegment = '';
                    if (start1 % 100 == 50) {
                        htmlSegment += (start1-50)/100 + ':30';
                    } else {
                        htmlSegment += start1/100 + ':00';
                    }
                    html += htmlSegment + `<br>`}

                
            }
        }
        
    });
                
    const result = html.split(`<br>`);
    let final = '';     
    
    result.forEach(result =>{
        if (result != "")
  
        final += `<button type="button"><a href="./test.html">${result}</a></button> <br>`
    })

    let container = document.querySelector('.container');
    container.insertAdjacentHTML("beforeend", final);
}

show_hours();
