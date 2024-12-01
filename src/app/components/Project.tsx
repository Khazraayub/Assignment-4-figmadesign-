import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";

export default function Project() {
  return (
    <section className="bg-[#F3F3F3] body-font  w-[200vw] lg:w-full">
      {/* project 01 */}
      <div className="flex flex-col justify-between lg:flex-row lg:gap-32 mx-20 h-[85vh] lg:h-[70vh] lg:my-[110px] my-[55px]">
        <div className="flex flex-col justify-between text-start  w-[356px]">
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-2xl font-semibold">
                01/Governor Sindh IT Website
              </h2>
            </div>
            <div>
              <p className="text-xl ">
                This is a Governor Sindh IT Website Project using Tailwind CSS
                in Next.JS.
              </p>
            </div>

            <div>
              <span className="text-[#606060]">
                This Project is designed by Khazra Shaikh
              </span>
            </div>
          </div>
          <div className="project-link my-9 lg:m-0 flex font-semibold underline">
            <Link href="https://governor-sindh-it-website.vercel.app/">
              More shots from This Project
            </Link>

            <div className="text-sm ml-1 mt-1">
              <GoArrowUpRight />
            </div>
          </div>
        </div>

        {/* project Image */}
        <div className="lg:w-[680px] w-full">
          <img
            className=" lg:h-[370px] lg:w-[640px]  "
            src="/images/project1.JPG"
            alt="project1"
          />
        </div>
      </div>

      <hr className="w-[88%] mx-auto h-0.5 bg-[#181717] " />

      {/* project 02 */}
      <div className="flex flex-col justify-between lg:flex-row lg:gap-32 mx-20 h-[85vh] lg:h-[70vh] lg:my-[110px] my-[55px]">
        <div className="flex flex-col justify-between text-start  w-[356px]">
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-2xl font-semibold">
                02/Governor Sindh ID Card
              </h2>
            </div>
            <div>
              <p className="text-xl ">
              This is a Student Id Card Project using Tailwind CSS in Next.JS. I design mine
              </p>
            </div>

            <div>
              <span className="text-[#606060]">
                This Project is designed by Khazra Shaikh
              </span>
            </div>
          </div>
          <div className="project-link my-9 lg:m-0 flex font-semibold underline">
            <Link href="https://governor-sindh-it-website.vercel.app/">
              More shots from This Project
            </Link>

            <div className="text-sm ml-1 mt-1">
              <GoArrowUpRight />
            </div>
          </div>
        </div>

        {/* project Image */}
        <div className="lg:w-[680px]  w-full">
          <img
            className=" lg:h-[370px] lg:w-[640px]  "
            src="/images/project3.JPG"
            alt="project2"
          />
        </div>
      </div>

      <hr className="w-[88%] mx-auto h-0.5 bg-[#181717] " />

      {/* project 03 */}
      <div className="flex flex-col justify-between lg:flex-row lg:gap-32 mx-20 h-[85vh] lg:h-[70vh] lg:my-[110px] my-[55px]">
        <div className="flex flex-col justify-between text-start  w-[356px]">
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-2xl font-semibold">
                03/Pizza House Website In Nex.JS
              </h2>
            </div>
            <div>
              <p className="text-xl ">
              This is a Pizza House Food Website using Tailwind CSS in Next.JS.
              </p>
            </div>

            <div>
              <span className="text-[#606060]">
                This Project is designed by Khazra Shaikh
              </span>
            </div>
          </div>
          <div className="project-link my-9 lg:m-0 flex font-semibold underline">
            <Link href="https://governor-sindh-it-website.vercel.app/">
              More shots from This Project
            </Link>

            <div className="text-sm ml-1 mt-1">
              <GoArrowUpRight />
            </div>
          </div>
        </div>

        {/* project Image */}
        <div className="lg:w-[680px]  w-full">
          <img
            className=" lg:h-[370px] lg:w-[640px]  "
            src="/images/project4.JPG"
            alt="project3"
          />
        </div>
      </div>
      <hr className="w-[88%] mx-auto h-0.5 bg-[#181717] " />

    </section>
    
  );
}
