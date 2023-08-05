import React from "react";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import pic from "../../assets/Damife.jpg";

const gitLink = "https://github.com/DamifeZion";
const linkedInLink = "https://github.com/DamifeZion";
const twitterLink = "https://github.com/DamifeZion";

const Home = () => {
  return (
    <div className=" bg-[--bg-color1] text-[--color1]">
      <section
        id="home"
        className=" template px-[--px] py-[--py] flex flex-col-reverse md:flex-row gap-16  md:gap-10 lg:gap-24"
      >
        <div className=" flex flex-col w-full md:w-[55%] smlg:w-[62%] lg:w-[65%]">
          <h1 className=" capitalize text-[2.25rem] font-semibold md:text-[2.5rem] lg:text-[3.75rem] lg:font-bold flex ">
            Hi, I'm Damife <span className=" hidden lg:block">👋</span>
          </h1>

          <p className=" text-[--color2] break-words">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>

          <div className=" flex flex-col gap-2 my-12">
            <p className="flex">
              <HiOutlineLocationMarker className=" text-[1.5rem] mr-3" />
              Lagos, Nigeria
            </p>

            <p className="flex items-center ">
              <span className="w-3 h-3 rounded-full bg-[--color3] ml-1 mr-4" />
              Available for new projects
            </p>
          </div>

          <div className=" flex gap-2 text-[1.8rem]">
            <a
              href={gitLink}
              className="p-[0.4rem] bg-transparent  hover:bg-[--bg-color2] ease duration-300 rounded-md"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>

            <a
              href={linkedInLink}
              className=" p-[0.4rem] bg-transparent  hover:bg-[--bg-color2] ease duration-300 rounded-md"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLinkedin />
            </a>

            <a
              href={twitterLink}
              className=" p-[0.4rem] bg-transparent  hover:bg-[--bg-color2] ease duration-300 rounded-md"
              target="_blank"
              rel="noreferrer"
            >
              <RxTwitterLogo />
            </a>
          </div>
        </div>

        <div
          className=" w-8/12 place-self-center md:place-self-start md:w-[35%] smlg:w-[30%] lg:w-[23%] h-[220px] sm:h-[300px] smlg:h-[350px] relative z-[2] before:border-b-[1rem] before:border-r-[1rem] before:border-l-[1rem] md:before:border-l-[0] md:before:border-b-[1.5rem] md:before:border-r-[1.5rem] smlg:before:border-b-[1.8rem] smlg:before:border-r-[1.8rem] before:border-[--bg-color3] before:absolute before:w-[120%] md:before:w-full before:h-full before:right-1/2 md:before:top-10 before:translate-x-1/2 before:-bottom-7 md:border-l-0 md:before:translate-x-0 md:before:-right-8 smlg:before:-right-9 smlg:before:top-10 lg:before:-right-10 lg:before:top-10 before:z-[-1]"
        >
          <img
            src={pic}
            alt="Developer image"
            className=" w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
