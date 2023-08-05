import React from "react";
import {TbMoonFilled, TbSunHigh} from 'react-icons/tb'

const ToggleSwitch = ({}) => {
  return (
    <div className=" toggle-switch">
      <input type="checkbox" id="theme" />
      <label htmlFor="theme">
        <TbMoonFilled className="moon absolute left-1 text-[0.9rem]"/>
        <TbSunHigh className="sun absolute right-1 text-[0.9rem]"/>
      </label>
    </div>
  );
};

export default ToggleSwitch;
