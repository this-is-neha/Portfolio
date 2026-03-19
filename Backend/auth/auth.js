// require("dotenv").config()
// const mailSvc = require('../service/mail')
// class AuthController {
//    register = async (req, res, next) => {
//         const { name, email, subject, message } = req.body;

//     if (!name || !email || !subject || !message) {
//         return res.status(400).json({ success: false, message: 'All fields are required.' });
//     }

//     try {
//         await mailSvc.sendEmail(
//             process.env.SMTP_USER, 
//             `Contact Form: ${subject}`,
//             `<p><strong>Name:</strong> ${name}</p>
//              <p><strong>Email:</strong> ${email}</p>
//              <p><strong>Message:</strong> ${message}</p>`
//         );

//         res.status(200).json({ success: true, message: 'Email sent successfully!' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: 'Failed to send email.' });
//     }
//     };
// }

// const authController = new AuthController();
// module.exports = authController;


require("dotenv").config();
const mailSvc = require("../service/mail");

class AuthController {
  register = async (req, res, next) => {
    console.log("📩 Incoming request body:", req.body);

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      console.log("❌ Missing fields");
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    try {
      // 🔍 Check ENV variables
      console.log("🔐 SMTP_USER:", process.env.SMTP_USER);
      console.log(
        "🔐 SMTP_PASS exists:",
        process.env.SMTP_PASS ? "YES ✅" : "NO ❌"
      );

      console.log("🚀 Attempting to send email...");

      const response = await mailSvc.sendEmail(
        process.env.SMTP_USER,
        `Contact Form: ${subject}`,
        `<p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Message:</strong> ${message}</p>`
      );

      console.log("✅ Email send response:", response);

      res.status(200).json({
        success: true,
        message: "Email sent successfully!",
      });
    } catch (error) {
      console.error("🔥 EMAIL ERROR FULL:", error);
      console.error("🔥 ERROR MESSAGE:", error.message);
      console.error("🔥 ERROR STACK:", error.stack);

      res.status(500).json({
        success: false,
        message: "Failed to send email.",
        error: error.message, 
      });
    }
  };
}

const authController = new AuthController();
module.exports = authController;