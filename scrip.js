function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "aravintha0027@gmail.com",
        Password : "87F2972C9F64F3E30CA392F3AC11BCF4BE65",
        To : 'aravinthaa0027@gmail.com',
        From : "document.getElementById("Email").value",
        Subject : "New Contact Form Enquary",
        Body : "Email:" + document.getElementById("Email").value,
    }).then(
      message => alert(successfuly u upodode in your Mail id)
    );
    }