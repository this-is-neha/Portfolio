const Message = require("./auth.model");

exports.createMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(422).json({ message: "All fields are required" });
    }

  
    const newMessage = new Message({ name, email, subject, message });
    const savedMessage = await newMessage.save();

    console.log("Message saved:", savedMessage); 

    res.status(201).json({
      message: "Message sent successfully",
      data: savedMessage,
    });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};