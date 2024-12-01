import React from "react";
import Image from "next/image";

import { GoArrowRight } from "react-icons/go";

const About = () => {
  return (
    <div className="w-fit lg:w-full">
      <div className="flex justify-between  md:flex-row flex-col  mx-20 my-36">
        {/* content */}

        <div className="flex  flex-col w-full  lg:w-[44%] gap-9 mb-11 lg:m-0">
          <h1 className="text-6xl font-[500] w-[500px] text-black leading-[58.32px] mb-11 ">
            Hi I’m Mehmet Akif Karasu, 3D artist & sculptor.
          </h1>
          <p className="text-2xl text-[#606060] leading-[37.44px] font-[400]  tracking-[-3%]">
            My work is mainly focused on third-dimension modeling, texturing and
            rendering. I like exploring the creatures with a touch of dark
            surrealism for characters and production.
          </p>
          <p className="text-2xl text-[#606060]  leading-[37.44px] font-[400]    tracking-[-3%]">
            Now I’m an interactive media design student in Istanbul ⏤ currently
            freelancing and seeking internship opportunities.
          </p>
        </div>

        {/* image */}
        <div className="lg:w-[37%] w-full  ">
          <Image
            className=" w-full h-full lg:w-[421px] lg:h-[590px]"
            src="/images/about.jpg"
            height={400}
            width={400}
            alt={"about"}
          />
        </div>
      </div>

      <div className="w-[670px] mx-20 my-32 h-[216px] flex flex-col">
        {/* project */}
        <div className="flex gap-10  ">
          <h1 className="text-xl font-semibold text-black underline w-[30%]">
            Main projects
          </h1>
          <p className="text-lg text-black w-[70%] ">
            Governor Sindh Website , Personal Portfolio, Food Website, ID Card Project etc.
          </p>
        </div>
        <p className="ml-[230px] my-7 text-black text-[18px]">Adobe CC, Figma, Ableton</p>

        {/* skill */}
        <div className="flex gap-10 mb-5">
          <h1 className="text-xl font-semibold text-black underline w-[30%]">
            {" "}
            Main skills
          </h1>
          <p className="text-[18px] text-black w-[70%]">
            Html, CSS, JavaScript, Next.js, TypeScript, TailwindCSS.
          </p>
        </div>
      </div>

      <hr className="w-[88%] mx-auto h-0.5 bg-[#181717] m-24" />

      {/*End  */}
      <div className="flex justify-between font-[400] mx-20 my-8 flex-col lg:flex-row lg:mx-24 lg:mb-28 ">
        <div className="flex gap-20 ">
          <h1 className="flex mb-16 lg:m-0  text-black text-3xl w-[347px] ">
            I am thrilled to answer to <br /> your next project{" "}
            <span className="-ml-20 mt-10 font-semibold">
              <GoArrowRight />
            </span>
          </h1>
        </div>

        <div>
          <h2 className="text-2xl text-black mb-6">khazrashaikh@gmail.com</h2>
          <p className="text-[18px] text-black">View Resume</p>
        </div>
      </div>
    </div>
  );
};

export default About;