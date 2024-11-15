// RootLayout.js
import Navbar from "./component/Navbar";



import "./globals.css";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
        
      {children}
         
          

            </div>
            
      </body>
    </html>
  );
}
