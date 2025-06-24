import React from "react";
import { useState } from "react";

const ContactSection = ({ darkMode }) => {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      const response = await fetch("http://localhost:8000/email/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
  setStatus("success");
  setForm({ nom: "", email: "", message: "" });
} else {
  setStatus("error");
  const data = await response.json();
  if (data && data.errors) {
    const errors = Object.values(data.errors)
      .map((arr) => arr.join(" "))
      .join(" ");
    setErrorMsg(errors);
  } else if (data && data.detail) {
    setErrorMsg(data.detail);
  } else {
    setErrorMsg("Erreur inconnue.");
  }
}
    } catch {
      setStatus("error");
  setErrorMsg("Erreur réseau ou serveur : " + err.message);
    }
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <section
      id="contact"
      className={`py-20 ${darkMode ? "bg-[#0f172a]" : "bg-[#f0fff1]"}`}
    >
      {showPopup && (
        <div
          className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded shadow-lg font-semibold ${
            status === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {status === "success"
            ? "Message envoyé avec succès !"
            : "Erreur lors de l'envoi du message."}
        </div>
      )}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Get In Touch
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p
              className={`mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    darkMode ? "bg-[#1e293b]" : "bg-[#e9ecef]"
                  }`}
                >
                  <i className="fas fa-envelope text-[#6366f1]"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    rlmionitra@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    darkMode ? "bg-[#1e293b]" : "bg-[#e9ecef]"
                  }`}
                >
                  <i className="fas fa-map-marker-alt text-[#6366f1]"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Madagascar, Antananarivo
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    darkMode ? "bg-[#1e293b]" : "bg-[#e9ecef]"
                  }`}
                >
                  <i className="fas fa-globe text-[#6366f1]"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Website</h4>
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    www.mionitra.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/Mionitra"
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer ${
                  darkMode
                    ? "bg-[#1e293b] hover:bg-[#818cf8] hover:text-white"
                    : "bg-[#e9ecef] hover:bg-[#6366f1] hover:text-white"
                }`}
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/lova-mionitra-9177002aa/"
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer ${
                  darkMode
                    ? "bg-[#1e293b] hover:bg-[#818cf8] hover:text-white"
                    : "bg-[#e9ecef] hover:bg-[#6366f1] hover:text-white"
                }`}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.facebook.com/younah.yzuki"
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer ${
                  darkMode
                    ? "bg-[#1e293b] hover:bg-[#818cf8] hover:text-white"
                    : "bg-[#e9ecef] hover:bg-[#6366f1] hover:text-white"
                }`}
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#6366f1] outline-none ${
                      darkMode
                        ? "bg-[#1e293b] text-[#f8fafc]"
                        : "bg-white text-[#1e293b]"
                    }`}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#6366f1] outline-none ${
                      darkMode
                        ? "bg-[#1e293b] text-[#f8fafc]"
                        : "bg-white text-[#1e293b]"
                    }`}
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#6366f1] outline-none ${
                    darkMode
                      ? "bg-[#1e293b] text-[#f8fafc]"
                      : "bg-white text-[#1e293b]"
                  }`}
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-full !rounded-button whitespace-nowrap hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
