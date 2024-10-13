import { FC, ReactNode } from "react";

interface VideoCardProps {
  imageSrc: string;
  altText: string;
  icon?: ReactNode;
}

const VideoCard: FC<VideoCardProps> = ({ imageSrc, altText, icon }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-lg border-8 border-white">
      <div className="flex items-center p-3">
        <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
      <img
        src={imageSrc}
        alt={altText}
        className="w-full rounded-b-lg shadow-inner"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {icon && (
          <button className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            {icon}
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
