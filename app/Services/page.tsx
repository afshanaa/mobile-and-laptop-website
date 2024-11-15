// Services.js
import React from "react";
import Image from "next/image";

export default function Services(){
  return(
<>

{/* Services Section */}
<section className="py-20 bg-gray-800">


        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-white pt-20">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-9">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <img src="https://watermark.lovepik.com/photo/20211119/large/lovepik-laptop-and-mobile-phone-on-the-desktop-picture_500231129.jpg"
               alt="Service 1" 
               width={500} 
               height={300} 
               className="rounded-lg"/>
              <h3 className="text-2xl font-semibold mt-4">Laptop and Mobile Desktop</h3>
              <p className="mt-2">The image you provided is titled "Laptop and Mobile Phone on the Desktop" and it depicts a desktop scene with a laptop, 
               mobile phone, and various desk accessories. The devices are placed on a clean, organized desk, creating a professional and modern workspace vibe.
              The image is suitable for themes related to technology, productivity, business, or workspace design.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <img src="https://www.apple.com/v/iphone/home/bx/images/meta/iphone__kqge21l9n26q_og.png" 
              alt="Service 2" 
              width={500} 
              height={300}
               className="rounded-lg"/>
              <h3 className="text-2xl font-semibold mt-4">Samsung Glaxy s24</h3>
              <p className="mt-2">
                The Samsung Galaxy S24 is a compact and stylish smartphone,
               featuring a 6.2-inch Dynamic AMOLED display with a 120Hz refresh rate,
                 protected by Gorilla Glass Victus 2. The device is powered by the Exynos 2400 chipset and offers 8GB of
                 RAM with 128GB or 256GB of internal storage. It's built with an aluminum frame and an IP68 rating for water and dust resistance.
                USB-C port, and Bluetooth 5.3..</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <img src="https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-set-of-laptop-tablet-and-phone-mockups-in-isolated-black-background-image_3770199.jpg" 
              alt="Service 3" 
              width={500} 
              height={300} 
              className="rounded-lg"/>
              <h3 className="text-2xl font-semibold mt-4">I phone Apple</h3>
              <p className="mt-2">The Samsung Galaxy S24 is a compact and stylish smartphone,
               featuring a 6.2-inch Dynamic AMOLED display with a 120Hz refresh rate,
                 protected by Gorilla Glass Victus 2. The device is powered by the Exynos 2400 chipset and offers 8GB of
                 RAM with 128GB or 256GB of internal storage. It's built with an aluminum frame and an IP68 rating for water and dust resistance.
                USB-C port, and Bluetooth 5.3...</p>
            </div>
          </div>
        </div>
      </section>

</>
  );
}

      