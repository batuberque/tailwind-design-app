import VideoCard from "./VideoCard";
import photo2 from "../assets/4.jpeg";
import photo3 from "../assets/2.jpeg";
import { FaRegFolder, FaDesktop, FaChartBar } from "react-icons/fa";

const GrowYourCollectionSection: React.FC = () => {
  return (
    <section id="login" className="bg-[#FFFBEB] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-4xl font-bold text-[#141414]">
            Grow your collection
          </h2>
          <p className="mt-4 text-lg text-[#666]">
            Erim neque massa porta adipiscing elit. Sem libero id faucibus nibh
            amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
            sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
            proin neque placerat at bibendum quam tellus.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <ul className="space-y-6">
              <li className="flex items-center text-[#141414] text-lg">
                <span className="w-10 h-10 bg-[#FFF7D6] flex items-center justify-center rounded-full mr-4">
                  <FaRegFolder className="text-[#141414] w-5 h-5" />
                </span>
                Bibendum tellus
              </li>
              <li className="flex items-center text-[#141414] text-lg">
                <span className="w-10 h-10 bg-[#FFF7D6] flex items-center justify-center rounded-full mr-4">
                  <FaDesktop className="text-[#141414] w-5 h-5" />
                </span>
                Cras eget
              </li>
              <li className="flex items-center text-[#141414] text-lg">
                <span className="w-10 h-10 bg-[#FFF7D6] flex items-center justify-center rounded-full mr-4">
                  <FaChartBar className="text-[#141414] w-5 h-5" />
                </span>
                Dolor pharetra
              </li>
              <li className="flex items-center text-[#141414] text-lg">
                <span className="w-10 h-10 bg-[#FFF7D6] flex items-center justify-center rounded-full mr-4">
                  <FaDesktop className="text-[#141414] w-5 h-5" />
                </span>
                Amet, fringilla
              </li>
              <li className="flex items-center text-[#141414] text-lg">
                <span className="w-10 h-10 bg-[#FFF7D6] flex items-center justify-center rounded-full mr-4">
                  <FaRegFolder className="text-[#141414] w-5 h-5" />
                </span>
                Amet nibh
              </li>
              <li className="flex items-center text-[#141414] text-lg">
                <span className="w-10 h-10 bg-[#FFF7D6] flex items-center justify-center rounded-full mr-4">
                  <FaChartBar className="text-[#141414] w-5 h-5" />
                </span>
                Sed velit
              </li>
            </ul>
          </div>
          <div className="flex-1 relative">
            <div className="w-full flex flex-col items-center md:items-end">
              <div className="absolute top-0 right-10 w-full max-w-md md:max-w-lg lg:max-w-xl">
                <VideoCard
                  imageSrc={photo2}
                  altText="Grow your collection video"
                />
              </div>
              <div className="absolute top-20 left-2 w-full max-w-md md:max-w-lg lg:max-w-xl">
                <VideoCard
                  imageSrc={photo3}
                  altText="Grow your collection image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowYourCollectionSection;
