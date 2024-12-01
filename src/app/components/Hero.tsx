import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="bg-[#F3F3F3] body-font w-full lg:w-full">
      <div className="flex flex-col lg:flex-row items-center lg:px-20 h-[70vh]">
        <div className="lg:w-[45%] lg:my-0 mt-16">
          <h1 className="font-[500] text-black text-[60px] leading-[58.32px] ">
            Hello, I&apos;m <br /> Khazra Shaikh
          </h1>
        </div>
        <div className="mx-auto px-8 lg:px-0  md:w-[55%] text-[30px] mt-24">
          <p className="font-normal  leading-[37.44px]  text-[#606060]">
            A senior-year design student who trying to specialize in 3D modeling
            & texturing.
          </p>
        </div>
      </div>

      <div className="px-20 -mt-9  mb-36">
        <p className="text-5xl text-black">
          <FaArrowDownLong />
        </p>
      </div>
    </section>
  );
}
