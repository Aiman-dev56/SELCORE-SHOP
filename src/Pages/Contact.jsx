import { useState } from "react"
import { FaSearch,  FaTwitter, FaLinkedinIn, FaFacebook, FaCopy } from "react-icons/fa";
import Footer from "../Components/Footer"

export default function Contact() {
 const [activeSection, setIsActiveSection] = useState("general");

 const [openQuestion, setOpenQuestion] = useState(null);


 const generalQuestion =  [
    {
        id:1 ,
        question: "what is an FAQ section?",
        answer: "An FAQ section can be used to quickly answer common questions about your business like Where do you ship to?, What are your opening hours?, or How can I book a service?. "
    }
 ];

 const faqQuestions = [
    {
        id:2,
        question :"Can I insert an Image, video, or GIF in my FAQ?",
        answer : "Yes. To add media follow these steps: 1. Manage FAQs from your site dashboard or in the Editor. 2. Create a new FAQ or edit an existing one .3. From the answer text box click on the video, image or GIF icon. 4. Add media from your library and save."
    },
    {
        id: 3,
        question: "How do I edit or remove the 'Frequently Asked Questions' title?",
        answer : "You can edit the title from the FAQ 'Settings' tab in the Editor. To remove the title from your mobile app go to the 'Site & App' tab in your Owner's app and customize."
    }
 ];

 const questions = activeSection === "general" ? generalQuestion : faqQuestions;

    return (
        <div className="lg:mt-50 mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-10">
                <div className="border-t m-10 ">
                    <h1 className="font-semibold text-4xl mt-5">Contact Selcore</h1>
                    <ul className="mt-8 w-50 font-sans ">
                        <li className="mb-3">Call us: 123-456-789</li>
                        <li className="mb-3">Email us: info@mysite.com</li>
                        <li className="mb-3">500 Terry Francine Street,
                            San Francisco, CA 94158</li>
                    </ul>

                </div>
                <div className="border-t m-10">
                    <h1 className="font-semibold text-4xl mt-5">Got a question?</h1>
                    <p className="font-sans mt-8">We're here to help! Please fill out the form with any questions or concerns, and we will get back to you as soon as possible.</p>
                    <form className="mt-10 m-5">
                        <div className="flex gap-10">

                            <label className="flex flex-col font-sans mb-2">
                                First Name
                                <input type="text" placeholder="" className="border h-10 p-1 w-70 mt-2" />
                            </label>


                            <label className="flex flex-col font-sans mb-2">
                                Last Name
                                <input type="text" placeholder="" className="border p-1 w-70 mt-2 h-10" />
                            </label>


                        </div>
                        <label className="flex flex-col font-sans mt-2">
                            Email
                            <input type="email" placeholder="" className="border bg-transparent p-1 w-full mt-2 h-10" />
                        </label>
                        <label className="flex flex-col font-sans  mt-2">
                            Subject
                            <input type="text" placeholder="" className="border bg-transparent p-1 w-full mt-2 h-10" />
                        </label>
                        <label className="flex flex-col font-sans mt-2">
                            Message
                            <textarea type="text" placeholder="" className="border p-1 bg-transparent w-full mt-2 h-30" />
                        </label>

                        <button className="px-18 rounded-lg py-2 text-black text-[15px] mt-5 bg-purple-500 hover:bg-purple-400 cursor-pointer">Submit</button>

                    </form>



                </div>

            </div>

            <div className="flex flex-col m-10 bg-purple-300/15 h-auto rounded-lg p-6">
                <div className="flex justify-between">
                    <h1 className="text-3xl">Frequently asked questions</h1>
                    <div className="fle flex-col">
                        <div className="inline-flex gap-3 border-b border-white">
                        <input placeholder="Looking For Something" className="text-[20px] text-white p-2 border-0 outline-none focus:outline-none focus:ring-0 hover:border-0 focus:border-0" />
                        <FaSearch size={20} className="lg:mt-2" />
                        
                    </div>

                    </div>
                    


                </div>

                <div className="mt-15 font-sans">
  {/* Tabs container */}
  <div className="relative flex gap-8 w-fit">
    <button
      onClick={() => {setIsActiveSection("general"); setOpenQuestion(null);}}
      className={`text-[18px] cursor-pointer mb-5 ${
        activeSection === "general" ? "text-white" : "text-white"
      }`}
    >
      General
    </button>

    <button
      onClick={() => {setIsActiveSection("faq"); setOpenQuestion(null)}}
      className={`text-[18px] cursor-pointer mb-5 ${
        activeSection === "faq" ? "text-white" : "text-white"
      }`}
    >
      Setting Up FAQs
    </button>

    {/* Sliding underline */}
    <span
      className={`
        absolute
        -bottom-1
        left-0
        
        h-1
        bg-white
        transition-all
        duration-300
        ease-in-out
        ${
          activeSection === "general"
            ? "translate-x-0 w-[60px]"
            : "translate-x-[90px] w-[140px]"
        }
      `}
    />
  </div>
 {/* Questions */}
      <div className="mt-6 space-y-4">
        {questions.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 pb-3 cursor-pointer"
            onClick={() =>
              setOpenQuestion(openQuestion === item.id ? null : item.id)
            }
          >
            <h3 className="text-lg font-medium m-4 flex justify-between">
              {item.question}
              <span>{openQuestion === item.id ? "−" : "+"}</span>
            </h3>

            {openQuestion === item.id && (
              <p className="m-4 text-gray-300 transition-all text-[18px] w-200">
                {item.answer}
                <div className="flex gap-8 mt-10">
                <FaFacebook size={30} />
                <FaLinkedinIn size={30} />
                <FaCopy size={30} />
                <FaTwitter size={30} />

            </div>
              </p>
              
            )}
            

          </div>
        ))}
    
    

  </div>
</div>


            </div>
            <Footer />
        </div>
    )
}