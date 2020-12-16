import React, { useState } from "react";
import { Link } from "react-router-dom";
import MagicLineMenu from "react-magic-line-menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid';
import "./Navbar.css";

function Navbar() {
  const [indexLink, setIndexLink] = useState(0);
  const [navbarActive, setNavbarActive] = useState(false);
  return (
    <React.Fragment>
      <MagicLineMenu
        active={indexLink}
        onItemClick={(index) => setIndexLink(index)}
        menuClassName={navbarActive?"navbar active":"navbar"}
        lineClassName="lineStyle"
        easing="easeOutBack"
      >
        <button onClick={()=>console.log(navbarActive)}><FontAwesomeIcon icon={faBars} size='sm' />{navbarActive}</button>
        <Link to="/">HOME</Link>
        <Link to="/">ELEMENTS</Link>
        <Link to="/">BEAUTY</Link>
        <Link to="/">TRENDS</Link>
        <Link to="/">STYLE</Link>
        <Link to="/">ABOUT</Link>
        <Link to="/">CONTACTS</Link>
      </MagicLineMenu>
    </React.Fragment>
  );
}

export default Navbar;
