// About.js
import React from "react";

export default function About() {
  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" 
         style={{ backgroundImage: "url('https://i.pinimg.com/originals/22/a5/a7/22a5a7b9dbc0e29ccef006dea5981367.png')" }}> 
      <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-2xl text-center text-white">
        <h1 className="text-4xl font-bold mb-4 text-black">About Us</h1>
        <p className="text-lg mb-6">
          We are dedicated to providing exceptional service and have a passionate team that ensures client satisfaction.
        </p>
        <p className="text-lg mb-20 text-black">
          We bring you the latest models, cutting-edge technology, and unbeatable prices all in one place. Whether you’re looking for a sleek
          smartphone with advanced features or a powerful laptop for work and entertainment, we have the perfect options for you. Explore our
          collection, find exclusive deals, and enjoy a seamless shopping experience with trusted brands and excellent customer service. Start
          your tech journey with us today!
        </p>
      </div>
    </div>
  








  );
}
