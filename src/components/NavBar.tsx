import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-[#FFFBEB] z-10 p-4 md:p-6 flex justify-between items-center"
      style={{
        paddingTop: "24px",
        paddingBottom: "24px",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      <div className="text-2xl font-bold text-[#81512C] ml-6">Collers</div>
      <div className="md:hidden" onClick={toggleMenu}>
        <HiMenuAlt3 className="text-[#81512C] text-3xl cursor-pointer" />
      </div>
      <ul
        className={`fixed top-0 left-0 w-full h-full bg-[#FAF4E1] flex flex-col items-center justify-center space-y-8 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:flex md:static md:flex-row md:space-x-8 md:space-y-0 md:w-auto md:h-auto md:bg-transparent md:translate-x-0`}
      >
        <li className="cursor-pointer hover:text-[#53371A] text-[#81512C] text-2xl md:text-base">
          <Link
            to="products"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Products
          </Link>
        </li>
        <li className="cursor-pointer hover:text-[#53371A] text-[#81512C] text-2xl md:text-base">
          <Link
            to="solutions"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Solutions
          </Link>
        </li>
        <li className="cursor-pointer hover:text-[#53371A] text-[#81512C] text-2xl md:text-base">
          <Link
            to="pricing"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Pricing
          </Link>
        </li>
        <li className="cursor-pointer hover:text-[#53371A] text-[#81512C] text-2xl md:text-base">
          <Link
            to="resources"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Resources
          </Link>
        </li>
        <li className="cursor-pointer hover:text-[#53371A] text-[#81512C] text-2xl md:text-base">
          <Link
            to="login"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Log In
          </Link>
        </li>
        <button className="mt-8 md:mt-0 px-6 py-3 border border-[#81512C] text-[#81512C] rounded-lg hover:bg-[#81512C] hover:text-white transition-colors duration-300">
          Sign up now
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
