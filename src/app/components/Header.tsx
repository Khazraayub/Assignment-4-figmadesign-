"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-[#F3F3F3] text-black fixed w-full top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-center text-black sm:text-5xl font-medium text-5xl pl-2">ks.</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex  space-x-6">
            <Link href="/"
               className="hover:text-gray-400 cursor-pointer hover:animate-bounce ">Work
            </Link>
            <Link href="/about"
                className="hover:text-gray-400 cursor-pointer hover:animate-bounce">About 
            </Link>
            <Link href="/"
                className="hover:text-gray-400 cursor-pointer hover:animate-bounce">Playground 
            </Link>
            <Link href="/"
                className="hover:text-gray-400 cursor-pointer hover:animate-bounce ">Contact 
            </Link>
          </div>

          

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <div className="space-y-2 px-4 py-4">
            <Link href="/"
                className="block hover:text-gray-400 cursor-pointer logo duration-150 ease-linear">Work 
            </Link>
            <Link href="/about"
                className="block hover:text-gray-400 cursor-pointer logo duration-150 ease-linear">About 
            </Link>
            <Link href="/skills"
                className="block hover:text-gray-400 cursor-pointer logo duration-150 ease-linear">Playground 
            </Link>
            <Link href="/contact"
                className="block hover:text-gray-400 cursor-pointer logo duration-150 ease-linear">Contact 
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
