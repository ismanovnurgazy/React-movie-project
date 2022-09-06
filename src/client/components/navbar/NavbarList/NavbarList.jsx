import React from "react";
import NavbarItem from "../NavbarItem";
import navElems from "../navElems";
export default function NavbarList() {
  const navbarElems = navElems.map((item) => (
    <NavbarItem key={item.title} {...item} />
  ));
  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          {navbarElems}
        </ul>
      </div>
    </nav>
  );
}
