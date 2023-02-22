import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {

  }, []);

  return (
    <div className={show ? 'nav__black' : 'nav'}>
      <img className="nav__logo" src={process.env.PUBLIC_URL + "/netflix-logo.png"} alt="logo not found"></img>
      <img className="nav__avatar" src={process.env.PUBLIC_URL + "/Netflix-avatar.png"} alt="avatar"></img>
    </div>
  );
};

export default Navbar;
