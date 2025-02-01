"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/50 z-50">
      <div className="container mx-auto px-6 py-4 flex flex-wrap justify-between items-center relative">
        {/* ロゴ */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/icons/logo.png" alt="Logo" width={140} height={140} className="rounded-full" />
        </Link>
        {/* ハンバーガーメニューアイコン */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {/* ナビゲーションメニュー */}
        <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? "block" : "hidden"} justify-center`}>
          <div className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
            <Link href="/" className="text-black hover:opacity-75">Home</Link>
            <Link href="/about" className="text-black hover:opacity-75">About</Link>
            <Link href="/gear" className="text-black hover:opacity-75">Gadget</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
