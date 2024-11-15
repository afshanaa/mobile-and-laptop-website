// Contact.js
import React from "react";


export default function Contact() {
  return (
    
<>


      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <p className="mb-8">Get in touch to learn more about our services.</p>
          <form className="max-w-lg mx-auto">
            <input type="text" placeholder="Your Name" className="w-full mb-4 p-3 bg-gray-800 rounded text-gray-100" />
            <input type="email" placeholder="Your Email" className="w-full mb-4 p-3 bg-gray-800 rounded text-gray-100" />
            <textarea placeholder="Your Message" className="w-full mb-4 p-3 bg-gray-800 rounded text-gray-100" rows="5"></textarea>
            <button type="submit" className="w-full bg-indigo-900 hover:bg-indigo-500 py-3 rounded text-white font-semibold">Send Message</button>
          </form>
        </div>
      </section>
    


    <footer className="bg-gray-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Company Logo and Info */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Your Company</h2>
            <p className="text-sm text-gray-100">© 2024 Your Company. All rights reserved.</p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/" className="text-2xl font-bold hover:text-gray-300">Home</a>
            <a href="/About" className="text-2xl font-bold hover:text-red-300">About Us</a>
            <a href="/Services" className="text-2xl font-bold hover:text-red-300">Services</a>
            <a href="/Contact" className="text-2xl font-bold hover:text-red-300">Contact</a>
           
          </div>

          
        </div>
      </div>
    </footer>


</>
  );
}
