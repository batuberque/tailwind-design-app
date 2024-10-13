import sneakerImage from "../assets/nixe.png";
import { HiPlay } from "react-icons/hi";

const HeroSection = () => {
  return (
    <div
      id="products"
      className="flex flex-col md:flex-row items-center justify-center p-8 md:p-20 bg-[#FFFBEB]"
    >
      <div className="max-w-lg">
        <h1 className="text-5xl md:text-5xl font-bold text-[#141414] mb-4 text-center md:text-left">
          Collectible Sneakers
        </h1>
        <p className="text-base md:text-lg text-[#4B4B4B] mb-6 text-center md:text-left">
          Sit elit feugiat turpis sed integer accumsan turpis. Sed suspendisse
          nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
        </p>
        <div className="flex space-x-4 justify-center md:justify-start">
          <button className="px-6 py-3 border border-[#81512C] text-[#81512C] rounded-lg hover:bg-[#81512C] hover:text-white transition-colors duration-300">
            Sign up now
          </button>
          <button className="px-6 py-3 text-[#A25F4B] rounded-lg font-semibold hover:bg-[#A25F4B] hover:text-white transition-colors duration-300 flex items-center">
            <HiPlay className="mr-2 w-5 h-5" />
            <span>Watch Demo</span>
          </button>
        </div>
      </div>
      <div className="relative w-full md:w-[600px] h-[500px] flex items-center justify-center overflow-visible">
        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] overflow-visible">
          <div className="absolute top-0 left-0 w-full h-full bg-[#FBBF24] rounded-[30px]"></div>
          <img
            src={sneakerImage}
            alt="Sneaker"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[550px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
