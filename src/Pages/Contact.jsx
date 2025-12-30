import { useState } from "react"
import { FaSearch, FaTwitter, FaLinkedinIn, FaFacebook, FaCopy } from "react-icons/fa";
import Footer from "../Components/Footer"

export default function Contact() {
  const [activeSection, setIsActiveSection] = useState("general");
  const [openQuestion, setOpenQuestion] = useState(null);
  const [search, setIsSearch] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // ✅ FIX: Proper alert and reset BEFORE any return
    console.log("Form Submitted:", formData);
    alert("Form Submitted Successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });

    setErrors({});
  }

  const generalQuestion = [
    {
      id: 1,
      question: "What is an FAQ section?",
      answer: "An FAQ section can be used to quickly answer common questions about your business like Where do you ship to?, What are your opening hours?, or How can I book a service?."
    }
  ];

  const faqQuestions = [
    {
      id: 2,
      question: "Can I insert an Image, video, or GIF in my FAQ?",
      answer: "Yes. To add media follow these steps: 1. Manage FAQs from your site dashboard or in the Editor. 2. Create a new FAQ or edit an existing one. 3. From the answer text box click on the video, image or GIF icon. 4. Add media from your library and save."
    },
    {
      id: 3,
      question: "How do I edit or remove the 'Frequently Asked Questions' title?",
      answer: "You can edit the title from the FAQ 'Settings' tab in the Editor. To remove the title from your mobile app go to the 'Site & App' tab in your Owner's app and customize."
    }
  ];

  const questions = activeSection === "general" ? generalQuestion : faqQuestions;

  // ✅ FIX: Changed 'serach' to 'search'
  const filteredQuestions = search ? [...generalQuestion, ...faqQuestions].filter(
    (q) =>
      q.question.toLowerCase().includes(search.toLowerCase()) ||
      q.answer.toLowerCase().includes(search.toLowerCase())
  ) : questions;

  const isSearching = search.trim() !== "";

  return (
    <div className="lg:mt-32 mt-20 min-h-screen">
      {/* Contact Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 px-4 sm:px-6 lg:px-10">
        
        {/* Contact Info */}
        <div className="border-t border-white/30 pt-6">
          <h1 className="font-semibold text-3xl sm:text-4xl mb-6">Contact Selcore</h1>
          <ul className="space-y-3 font-sans text-base sm:text-lg">
            <li>Call us: 123-456-789</li>
            <li>Email us: info@mysite.com</li>
            <li>500 Terry Francine Street,<br />San Francisco, CA 94158</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="border-t font-sans border-white/30 pt-6">
          <h1 className="font-semibold text-3xl sm:text-4xl mb-6">Got a question?</h1>
          <p className="mb-8 text-gray-300">
            We're here to help! Please fill out the form with any questions or concerns, and we will get back to you as soon as possible.
          </p>

          <div onSubmit={handleSubmit} className="space-y-4">
            {/* ✅ FIX: Added responsive flex layout */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <label className="flex flex-col flex-1">
                <span className="mb-2">First Name</span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border border-white/30 bg-transparent rounded px-3 py-2 outline-none focus:border-purple-500 transition-colors"
                />
                {errors.firstName && (
                  <span className="text-red-400 text-sm mt-1">{errors.firstName}</span>
                )}
              </label>

              <label className="flex flex-col flex-1">
                <span className="mb-2">Last Name</span>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border border-white/30 bg-transparent rounded px-3 py-2 outline-none focus:border-purple-500 transition-colors"
                />
                {errors.lastName && (
                  <span className="text-red-400 text-sm mt-1">{errors.lastName}</span>
                )}
              </label>
            </div>

            <label className="flex flex-col">
              <span className="mb-2">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-white/30 bg-transparent rounded px-3 py-2 outline-none focus:border-purple-500 transition-colors"
              />
              {errors.email && (
                <span className="text-red-400 text-sm mt-1">{errors.email}</span>
              )}
            </label>

            <label className="flex flex-col">
              <span className="mb-2">Subject</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border border-white/30 bg-transparent rounded px-3 py-2 outline-none focus:border-purple-500 transition-colors"
              />
              {errors.subject && (
                <span className="text-red-400 text-sm mt-1">{errors.subject}</span>
              )}
            </label>

            <label className="flex flex-col">
              <span className="mb-2">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="border border-white/30 bg-transparent rounded px-3 py-2 outline-none focus:border-purple-500 transition-colors resize-none"
              />
              {errors.message && (
                <span className="text-red-400 text-sm mt-1">{errors.message}</span>
              )}
            </label>

            <button
              onClick={handleSubmit}
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 mx-4 sm:mx-6  lg:mx-10 bg-purple-300/10 rounded-xl p-6 sm:p-8 lg:p-10 border border-white/20">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold">Frequently Asked Questions</h1>
          
          {/* Search */}
          <div className="flex items-center gap-3 border-b border-white pb-2 max-w-md">
            <input
              placeholder="Looking for something?"
              className="flex-1 bg-transparent text-white outline-none text-sm sm:text-base"
              value={search}
              onChange={(e) => setIsSearch(e.target.value)}
            />
            <FaSearch size={18} className="text-white/70" />
          </div>
        </div>

        {/* Tabs */}
        {!isSearching && (
          <div className="relative font-sans flex gap-8 mb-8 border-b border-white/20">
            <button
              onClick={() => { setIsActiveSection("general"); setOpenQuestion(null); }}
              className={`pb-3 text-base sm:text-lg transition-colors ${
                activeSection === "general" ? "text-white" : "text-white/60"
              }`}
            >
              General
            </button>

            <button
              onClick={() => { setIsActiveSection("faq"); setOpenQuestion(null) }}
              className={`pb-3 text-base sm:text-lg transition-colors ${
                activeSection === "faq" ? "text-white" : "text-white/60"
              }`}
            >
              Setting Up FAQs
            </button>

            {/* Animated underline */}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                activeSection === "general"
                  ? "translate-x-0 w-[70px]"
                  : "translate-x-[106px] w-[150px]"
              }`}
            />
          </div>
        )}

        {/* Questions */}
        <div className="space-y-4 font-sans">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((item) => (
              <div
                key={item.id}
                className="border border-white/20 rounded-lg overflow-hidden cursor-pointer hover:border-white/40 transition-colors"
                onClick={() => setOpenQuestion(openQuestion === item.id ? null : item.id)}
              >
                <h3 className="text-base sm:text-lg font-medium p-4 flex justify-between items-center">
                  <span>{item.question}</span>
                  <span className="text-2xl">{openQuestion === item.id ? "−" : "+"}</span>
                </h3>
                
                {openQuestion === item.id && (
                  <div className="px-4 pb-4 pt-0">
                    <p className="text-gray-300 text-sm sm:text-base mb-6">
                      {item.answer}
                    </p>
                    <div className="flex gap-4 sm:gap-6">
                      <FaFacebook size={24} className="cursor-pointer hover:text-purple-400 transition-colors" />
                      <FaLinkedinIn size={24} className="cursor-pointer hover:text-purple-400 transition-colors" />
                      <FaCopy size={24} className="cursor-pointer hover:text-purple-400 transition-colors" />
                      <FaTwitter size={24} className="cursor-pointer hover:text-purple-400 transition-colors" />
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-red-400 text-center py-8 text-lg">
              No FAQ found matching your search.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}