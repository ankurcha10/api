const nodemailer = require("nodemailer");

// Submit form data
exports.submitForm = (req, res) => {
  const { name, phone, email, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "ankurcha10@gmail.com", // Your Gmail email address
      pass: "qjmouyzdeedqdqzi", // Your Gmail password
    },
  });

  // Email message configuration
  const mailOptions = {
    from: "ankurcha10@gmail.com",
    to: "ankurcha98@gmail.com", // The email address where you want to receive the form data
    subject: "Form Submission",
    text: `
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent", info.response);
      res.status(200).send("Email sent");
    }
  });
};
