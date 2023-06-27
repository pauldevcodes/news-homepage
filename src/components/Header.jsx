import { useState } from "react";

// images
import logo from "../../src/images/logo.svg";
import openMenu from "../../src/images/icon-menu.svg";
import closeMenu from "../../src/images/icon-menu-close.svg";
import ToggleMenu from "./ToggleMenu";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const navLinks = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "new",
    },
    {
      id: 3,
      link: "popular",
    },
    {
      id: 4,
      link: "trending",
    },
    {
      id: 5,
      link: "categories",
    },
  ];
  return (
    <header className=" pt-7 mx-4 mb-8 flex items-center justify-between lg:pt-[89px] lg:mb-[55px] xl:mx-[165px]">
      {/* container for the logo */}
      <div>
        <img src={logo} alt="news company logo" className=" w-[45px] h-7 lg:w-16 lg:h-10" />
      </div>

      {/* container for menu icons */}
      <div onClick={toggleMenu} className=" z-20 lg:hidden">
        {menu ? (
          <img src={closeMenu} alt="icon to close menu" />
        ) : (
          <img src={openMenu} alt="icon to open menu" />
        )}
      </div>

      {menu && <ToggleMenu menu={menu} setMenu={setMenu} navLinks={navLinks} />}

      {/* container for navlinks */}
      <ul className=" hidden lg:flex lg:flex-row lg:items-center lg:gap-x-10">
        {navLinks.map(({ id, link }) => {
          return (
            <li key={id} className=" text-[#5E607A] text-[15px] leading-[26px] capitalize hover:cursor-pointer hover:text-[#F15D51]">
              {link}
            </li>
          );
        })}
      </ul>
    </header>
  );
}
