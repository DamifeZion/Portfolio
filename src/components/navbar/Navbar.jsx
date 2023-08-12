import React, { useRef } from "react";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";
import { useSelector, useDispatch } from "react-redux";
import { menuSlice } from "../../features/sliceExport";
import { useMediaQuery, useTheme } from "@mui/material";

const liStyle = {
  cursor: "pointer",
  fontWeight: "600",
  transition: "ease .2s",
};

const Navbar = () => {
  const menuState = useSelector((state) => state.menu.toggle);
  const dispatch = useDispatch();


  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));
  const body = document.querySelector("body");

  if (menuState) {
    body.style.overflowY = "hidden";
  } else {
    body.style.overflowY = "auto";
  }

  function handleMenuToggle() {
    dispatch(menuSlice.actions.toggleState());
  }

  function renderMenuBtn() {
    if (!menuState) return <GiHamburgerMenu />;
    else return <MdClose />;
  }

  function mobileMenu() {
    return (
      menuState && (
        <div className=" absolute top-[3.8rem] left-0 w-full bg-[--bg-color1] ">
          <div className="overflow-y-scroll h-screen pt-4 pb-14 px-[--px] gap-4">
            <ul className="flex flex-col text-[1rem] md:text-[1.3rem] pr-6">
              <a
                href="#home"
                className=" text-[--color2] hover:text-[--color1] pl-0 p-4"
              >
                <li style={liStyle}>Home</li>
              </a>
              <a
                href="#about"
                className=" text-[--color2] hover:text-[--color1] pl-0 p-4"
              >
                <li style={liStyle}>About</li>
              </a>
              <a
                href="#projects"
                className=" text-[--color2] hover:text-[--color1] pl-0 p-4"
              >
                <li style={liStyle}>Projects</li>
              </a>
              <a
                href="#contact"
                className=" text-[--color2] hover:text-[--color1] pl-0 p-4"
              >
                <li style={liStyle}>Contact</li>
              </a>
            </ul>

            <div className=" flex flex-col gap-8 pl-0 p-4">
              <div className=" flex justify-between w-full">
                <p className=" font-semibold md:text-[1.25rem] text-[--color2]">Switch Theme</p>
                <ToggleSwitch />
              </div>
              <button className=" py-[0.5rem] md:py-3 text-[1.2rem] bg-[--color1] text-[--bg-color2] rounded-[0.75rem] hover:bg-[--color2] duration-200 ease">
                Download CV
              </button>
            </div>
          </div>
        </div>
      )
    );
  }

  function desktopMenu() {
    return (
      <div className="flex gap-6 items-center">
        <ul className="flex gap-7 text-[1rem] border-r-[2.3px] border-[--bg-color3] pr-6">
          <a href="#home" className=" text-[--color2] hover:text-[--color1]">
            <li style={liStyle}>Home</li>
          </a>
          <a href="#about" className=" text-[--color2] hover:text-[--color1]">
            <li style={liStyle}>About</li>
          </a>
          <a
            href="#projects"
            className=" text-[--color2] hover:text-[--color1]"
          >
            <li style={liStyle}>Projects</li>
          </a>
          <a href="#contact" className=" text-[--color2] hover:text-[--color1]">
            <li style={liStyle}>Contact</li>
          </a>
        </ul>

        <div className=" flex gap-4 items-center">
          <ToggleSwitch />
          <button className=" py-[0.38rem] px-4 bg-[--color1] text-[--bg-color2] rounded-[0.75rem] hover:bg-[--color2] duration-200 ease">
            Download CV
          </button>
        </div>
      </div>
    );
  }

  function renderMenu() {
    return isSmall ? mobileMenu() : desktopMenu();
  }

  return (
    <div className=" bg-[--bg-color1] text-[--color1]">
      <section
        id="template"
        className=" flex items-center justify-between px-[--px] py-[--nav-py] "
      >
        <a
          href="#home"
          className=" uppercase text-[1.8rem] font-bold tracking-wide cursor-pointer z-[100]"
        >
          Damife
        </a>

        <i
          onClick={handleMenuToggle}
          className=" text-[2rem] lg:hidden cursor-pointer z-30"
        >
          {renderMenuBtn()}
        </i>

        {renderMenu()}
      </section>
    </div>
  );
};

export default Navbar;
