import { FC } from "react";
import { FaPlay } from "react-icons/fa";
import videoPhoto from "../assets/4.jpeg";
import VideoCard from "./VideoCard";

const WhyJoinUsSection: FC = () => {
  return (
    <section id="pricing" className="bg-[#FFFBEB] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-[#141414] mb-6">
            Why join us
          </h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start justify-center md:justify-start">
              <span className="text-green-600 mr-3">&#10003;</span>
              <p className="text-lg text-[#333]">
                Est et in pharetra magna adipiscing ornare aliquam.
              </p>
            </li>
            <li className="flex items-start justify-center md:justify-start">
              <span className="text-green-600 mr-3">&#10003;</span>
              <p className="text-lg text-[#333]">
                Tellus arcu sed consequat ac velit ut eu blandit.
              </p>
            </li>
            <li className="flex items-start justify-center md:justify-start">
              <span className="text-green-600 mr-3">&#10003;</span>
              <p className="text-lg text-[#333]">
                Ullamcorper ornare in et egestas dolor orci.
              </p>
            </li>
          </ul>
          <button className="px-8 py-4 border border-[#141414] rounded-lg text-[#141414] hover:bg-[#141414] hover:text-white transition-colors duration-300">
            Sign up now
          </button>
        </div>
        <div className="flex-1">
          <VideoCard
            imageSrc={videoPhoto}
            altText="Join us video"
            icon={<FaPlay className="text-xl text-black" />}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUsSection;
