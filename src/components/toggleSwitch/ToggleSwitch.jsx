import React, { useRef } from "react";
import { TbMoonFilled, TbSunHigh } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { themeSlice } from "../../features/sliceExport";

const ToggleSwitch = () => {
  const themeState = useSelector((state) => state.theme.toggle);
  const dispatch = useDispatch();
  const inputRef = useRef();

  function handleToggle() {
    dispatch(themeSlice.actions.toggleTheme());
    console.log(themeState);

    const isDarkTheme = !inputRef.current.checked;
    if (isDarkTheme) {
      darkTheme();
    } else {
      lightTheme();
    }
  }

  function darkTheme() {
    document.querySelector("body").setAttribute("data-theme", "dark");
  }

  function lightTheme() {
    document.querySelector("body").setAttribute("data-theme", "light");
  }

  return (
    <div className="toggle-switch">
      <input
        ref={inputRef}
        type="checkbox"
        id="theme"
        onChange={handleToggle}
      />
      <label htmlFor="theme">
        <TbMoonFilled className="moon absolute left-1 text-[0.9rem]" />
        <TbSunHigh className="sun absolute right-1 text-[0.9rem]" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
