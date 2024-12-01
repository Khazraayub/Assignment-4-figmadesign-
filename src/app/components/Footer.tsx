import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#F3F3F3] body-font">
        
    <div className="container mx-auto py-4 pb-5 pt-20 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-[#2429AF] text-sm text-center font-bold sm:text-left">Khazra Shaikh — 2024
        
      </p>
      <span className="inline-flex sm:ml-auto  gap-8 font-bold sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link className="text-[#181717]" href={"/"}>
          Twitter
        </Link>
        <Link className="text-[#181717]" href={"https://github.com/Khazraayub"}>
          GitHub
        </Link>
        <Link className="text-[#181717]" href={"https://www.linkedin.com/in/khazra-ayub-99b762260/"}>
          LinkedIn
        </Link>
    
      </span>
    </div>
  
</footer>
  )
}
