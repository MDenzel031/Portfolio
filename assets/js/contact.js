function submitForm(){
  // e.preventDefault();


  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;


  sendEmail(name, email, subject, message);
  // document.getelementById("contact-form").reset();
}


function sendEmail(){

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "toshibaexpert64@gmail.com",
    Password : "4AA5E8CEDD48CD45D371A1F61AEE9F76296F",
    To : 'mdenzel31ugaban@gmail.com',
    From : "toshibaexpert64@gmail.com",
    Subject : subject,
    Body : `Name: ${name} <br/> Email: ${email} <br/> Subject: ${subject} <br/> Message: ${message}`,
  }).then(
    message => alert(message)
  );

  document.getElementById("contact-form").reset();

  var theEmail = document.getElementById("email").value;
  console.log(theEmail);
}