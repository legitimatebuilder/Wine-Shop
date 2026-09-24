function sendMail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "waqasnoobidiot@gmail.com",
        Password: "drunkard5557", // This is a dummy password. Actual will be on Elastic Email!//
        To: "waqasnoobidiot@gmail.com",
        From: document.getElementById("name").value,
        Subject: "New Contact Form Inquiry",
        Body: "Name:" + document.getElementById("name").value
            + "<br> Email:" + document.getElementById("email").value
            + "<br> Phone No:" + document.getElementById("phone").value
    }).then(message => alert("Message sent successfully!"));
};

// Note: In order to get the smtp server running and receive emails, you have to create an account on elastic email host. //