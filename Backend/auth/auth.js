require("dotenv").config()
const mailSvc = require('../service/mail')
class AuthController {
   register = async (req, res, next) => {
        const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
        await mailSvc.sendEmail(
            process.env.SMTP_USER, // send to yourself
            `Contact Form: ${subject}`,
            `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`
        );

        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
    };
}

const authController = new AuthController();
module.exports = authController;