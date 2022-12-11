function sendMail(){
    var params = {
        fname: window.localStorage.getItem("")
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        cnp: document.getElementById("cnp").value,
        telefon: document.getElementById("telefon").value,
    };

    const serviceID = "service_lh8358o";
    const templateID = "template_0xc715c";

    emailjs
    .send(serviceID,templateID,params)
    .then((res) => {
        document.getElementById("fname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("cnp").value = "";
        document.getElementById("telefon").value = "";
        console.log(res);
        alert("s-a trimis mesajul");
    })
    .catch((err) => console.log(err));
}

function saveData(){
    window.localStorage.setItem('fname', document.getElementById("fname").value)
    window.localStorage.setItem('lname', document.getElementById("lname").value)
    window.localStorage.setItem('email', document.getElementById("email").value)
    window.localStorage.setItem('message', document.getElementById("message").value)
    window.localStorage.setItem('cnp', document.getElementById("cnp").value)
    window.localStorage.setItem('telefon', document.getElementById("telefon").value)
}

function butonPress(){
    let a1 = window.localStorage.getItem('fname')
    let a2 = window.localStorage.getItem('lname')
    let a3 = window.localStorage.getItem('email')
    let a4 = window.localStorage.getItem('message')
    let a5 = window.localStorage.getItem('cnp')
    let a6 = window.localStorage.getItem('telefon')

    let html='<a href="';

    if (a1 == 'none' || a2 == 'none' || a3 == 'none'  || a5 == 'none' || a6 == 'none') {
        allert("Nu ati introdus toate casutele necesare")
        html += 'test.html'
    } else {
        html += 'confirmare.html'
    }
    html += '">Submit</a>';
    let container = document.querySelector('.container');
    container.insertAdjacentHTML("beforeend", html);
}