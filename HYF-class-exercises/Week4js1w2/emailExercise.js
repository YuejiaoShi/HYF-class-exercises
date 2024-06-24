// Imagine we work at a company. Peter from the HR department wants us to send out a couple of emails to some recepients. The only problem is that he sent us the email in a weird format: benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com

// Use the sendEmailTo function to send an email to all the recepients that we got from Peter.

// Hint use the .split method and look up iterating an array js for loop on google.

// This function emulates sending emails to receipients

function sendEmailTo(recepient) {
  // But really it only logs out a string
  console.log("email sent to " + recepient);
}

const recipients =
  "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com";
const emails = recipients.split("|");

for (let i = 0; i < emails.length; i++) {
  sendEmailTo(emails[i]);
}

// Solution 2
for (const email of emails) {
  sendEmailTo(email);
}
// Solution 3
emails.forEach(sendEmailTo);
