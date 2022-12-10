const fname =document.getElementById('fname');
const lname =document.getElementById('lname');
const email =document.getElementById('email');
const phone =document.getElementById('phone');
const submit =document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("CLICKUIT");
    
    Email.send({
        SecureToken : "88f5d308-4eca-479a-9ee8-b48434b76b25",
        To : 'alexgalateanu2003@gmail.com',
        From : "alexgalateanu2003@gmail.com",
        Subject : "This is the subject",
        Body : "doamne ajuta"
    }).then(
      message => alert("gata boss acm")
    );

})