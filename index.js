function sendMail(){
    var params = {
        fname: document.getElementById("fname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };


    const serviceID = "service_lh8358o";
    const templateID = "template_0xc715c";

    emailjs
    .send(serviceID,templateID,params)
    .then((res) => {
        document.getElementById("fname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("s-a trimis mesajul");
    })
    .catch((err) => console.log(err));
}