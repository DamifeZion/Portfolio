import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" bg-[--bg-color1] ">
      <section className="flex flex-col template py-[--py] px-[--px]">
        <h1 className=" place-self-center rounded-xl py-[0.25rem] px-[1.25rem] bg-[--bg-color3] w-fit ">
          Get in touch
        </h1>

        <h2 className=" text-[1.25rem] text-center mt-4">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </h2>

        <ul className=" flex flex-col mt-6 gap-3 lg:mt-12 items-center">
          <li className=" flex gap-5 items-center">
            <AiOutlineMail className="text-[1.1rem] lg:text-[2rem]" />
            <h1 className=" text-[1.1rem] lg:text-[2.25rem] font-semibold text-[--color1]">
              damifeolaleye@gmail.com
            </h1>
          </li>
          <li className=" flex gap-5 items-center">
            <BsTelephone className=" text-[1.1rem] lg:text-[2rem]" />
            <h1 className=" text-[1.1rem] lg:text-[2.25rem] font-semibold text-[--color1]">
              +234 8076568689
            </h1>
          </li>
        </ul>

        <p className="  mt-6 lg:mt-12 text-center">
          You may also find me on these platforms!
        </p>

        <ul className=" flex gap-3 text-center mt-6 justify-center">
          <a target="__blank" href="https://github.com/DamifeZion">
            <FiGithub className=" text-[1.1rem] lg:text-[1.8rem]" />
          </a>
          <a target="__blank" href="https://twitter.com/DamifeZion">
            <FiTwitter className=" text-[1.1rem] lg:text-[1.8rem]" />
          </a>
          <a target="__blank" href="https://www.linkedin.com/in/damife-zion/">
            <FaLinkedinIn className="  text-[1.1rem] lg:text-[1.8rem]" />
          </a>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
