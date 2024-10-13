import videoPhoto from "../assets/4.jpeg";

const ShoesCollectedMap = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-center justify-center w-full h-screen bg-orange-700 p-4">
      <div className="w-full md:w-1/3 bg-white p-4 shadow-lg rounded-lg md:mr-8 md:self-center">
        <img
          src={videoPhoto}
          alt="Cool Shoes"
          className="w-full h-auto object-contain rounded-md"
        />
        <div className="mt-4 bg-gray-100 p-3 rounded-md">
          <p className="text-gray-800 font-semibold text-lg">Emma Simpson</p>
          <p className="text-gray-600 text-base">
            collected one pair of Cool Shoes.
          </p>
        </div>
      </div>
      <div className="w-full md:w-auto text-center bg-gray-800 bg-opacity-75 p-4 rounded-md mt-8 md:mt-0 md:mx-auto">
        <h1 className="text-white text-6xl font-bold">11,658,467</h1>
        <p className="text-white text-3xl">Shoes Collected</p>
      </div>
    </div>
  );
};

export default ShoesCollectedMap;
