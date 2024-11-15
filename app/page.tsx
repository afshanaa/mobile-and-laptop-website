// Home.js
import React from "react";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" 
        style={{ backgroundImage: "url('https://img.pikbest.com/ai/illus_our/20230428/95ed84c1301838c03f10f12a3a47c419.jpg!w700wp')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg">
          <h1 className="text-white mt-5  text-5xl font-bold text-white">Top-quality mobile phones and laptops Services!</h1>
         
        </div>
      </section>

       
 
    
    </div>
  );
}
