import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex  items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        <img className="mx-2 w-10" src={logo} />
      </div>
      <div className="flex gap-4 m-8 items-center justify-center text-2xl ">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
