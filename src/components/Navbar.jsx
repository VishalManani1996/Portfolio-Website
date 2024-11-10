import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/logo3.png";
import Resume from "../assets/VishalManani_BE_2.2years.pdf"

const Navbar = () => {
  return (
    <nav className=" mb-20 flex  items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        {/* <img className="mx-2 w-10" src={logo} /> */}
        <img className="mx-2 w-16 rounded-full" src={logo} />
        {/* <h1 className="text-3xl text-white font-semibold">|-Vm-|</h1> */}
      </div>
      <div className="flex gap-4 m-8 items-center justify-center text-2xl ">
        <a
          href="https://www.linkedin.com/in/vishal-manani-641677180"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/VishalManani1996"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black bg-slate-200 rounded-xl text-[15px] px-2"
        >
         Resume
        </a>
        {/* <FaInstagram />
        <FaSquareXTwitter /> */}
      </div>
    </nav>
  );
};

export default Navbar;
