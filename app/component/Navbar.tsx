import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mf-20 bg-gray-100 text-black flex gap-9 text-3xl font-bold mb-0 list-none">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/About">About</Link></li>
      <li><Link href="/Services">Services</Link></li>
      <li><Link href="/Contact">Contact</Link></li>
    </nav>
  );
}
 