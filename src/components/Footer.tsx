import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlineApple, AiOutlineAndroid } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul>
            <li className="mb-2">Pricing</li>
            <li className="mb-2">Overview</li>
            <li className="mb-2">Browse</li>
            <li className="mb-2">Accessibility</li>
            <li>Five</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Solutions</h3>
          <ul>
            <li className="mb-2">Brainstorming</li>
            <li className="mb-2">Ideation</li>
            <li className="mb-2">Wireframing</li>
            <li className="mb-2">Research</li>
            <li>Design</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul>
            <li className="mb-2">Contact Us</li>
            <li className="mb-2">Developers</li>
            <li className="mb-2">Documentation</li>
            <li className="mb-2">Integrations</li>
            <li>Reports</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Get the App</h3>
          <div className="flex flex-col items-center md:items-start mb-4">
            <div className="flex items-center mb-4">
              <AiOutlineApple className="text-2xl mr-2" />
              <span>Download on the App Store</span>
            </div>
            <div className="flex items-center mb-4">
              <AiOutlineAndroid className="text-2xl mr-2" />
              <span>Get it on Google Play</span>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <FaYoutube className="text-2xl cursor-pointer hover:text-white" />
              <FaFacebookF className="text-2xl cursor-pointer hover:text-white" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-white" />
              <FaInstagram className="text-2xl cursor-pointer hover:text-white" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between text-center md:text-left">
        <p>Collers @ 2023. All rights reserved.</p>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Contact</span>
          <span className="flex items-center">
            <span className="mr-1">🌐</span> EN
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
