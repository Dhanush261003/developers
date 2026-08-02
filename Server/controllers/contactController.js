const Contact = require("../models/Contact");
const transporter = require("../config/mailer");

const createContact = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    // Save enquiry to MongoDB
    const contact = await Contact.create({
      name,
      email,
      phone,
      service,
      message,
    });

    // Send email notification
    await transporter.sendMail({
      from: `"3 Developers Website" <${process.env.EMAIL_USER}>`,

      to: [
        process.env.EMAIL_TO_1,
        process.env.EMAIL_TO_2,
        process.env.EMAIL_TO_3,
      ],

      replyTo: email,

      subject: `New Project Enquiry - ${name}`,

      html: `
        <h2>New Project Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "Not selected"}</p>

        <h3>Project Details</h3>
        <p>${message}</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Message submitted successfully.",
      data: contact,
    });

  } catch (error) {
    console.error("Contact submission error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
};

module.exports = {
  createContact,
};