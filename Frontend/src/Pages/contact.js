import React, { useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const formData = Object.fromEntries(data.entries());

    try {
      const response = await fetch("http://localhost:9004/auth/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setShowPopup(true); // show popup
        setTimeout(() => setShowPopup(false), 4000); // hide after 4 seconds
        form.reset();
      } else {
        alert(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 dark:bg-gray-900 py-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We'd love to hear from you! Fill out the form below, and our team
              will respond promptly.
            </p>
          </div>

          {/* Popup */}
          {showPopup && (
            <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-slide-in">
              ✅ Message sent successfully!
            </div>
          )}

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 lg:p-12">
            <form name="contact" method="POST" onSubmit={handleSubmit}>
              <div className="mt-8">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="mt-2 w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
                />
              </div>

              <div className="mt-8">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="mt-2 w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
                />
              </div>

              <div className="mt-8">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="mt-2 w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
                />
              </div>

              <div className="mt-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  className="mt-2 w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
                ></textarea>
              </div>

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="inline-block w-full md:w-auto px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
