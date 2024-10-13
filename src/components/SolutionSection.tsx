import { FaTrophy, FaHardHat, FaSeedling } from "react-icons/fa";

const SolutionsSection = () => {
  return (
    <section id="solutions" className="bg-yellow-50 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaTrophy className="w-12 h-12 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Nibh viverra
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaHardHat className="w-12 h-12 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Cursus amet</h3>
            <p className="mt-4 text-base text-gray-600">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaSeedling className="w-12 h-12 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Ipsum fermentum
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
