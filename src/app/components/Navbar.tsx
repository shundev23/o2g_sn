"use client";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/50 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-center items-center relative">
        {/* ロゴ */}
        <Link href="/" className="flex items-center space-x-2 mr-24">
          <Image src="/icons/logo.png" alt="Logo" width={140} height={140} className="rounded-full" />
        </Link>
        {/* ナビゲーションメニュー */}
        <div className="flex space-x-8">
          <Link href="/" className="text-black hover:opacity-75">Home</Link>
          <Link href="/about" className="text-black hover:opacity-75">About</Link>
          <Link href="/blog" className="text-black hover:opacity-75">Blog</Link>
          <Link href="/gear" className="text-black hover:opacity-75">Gadget</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
