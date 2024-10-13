import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import sneakerImage1 from "../assets/1.jpeg";
import sneakerImage2 from "../assets/2.jpeg";
import sneakerImage3 from "../assets/3.jpeg";

const products = [
  {
    id: 1,
    title: "Title",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    image: sneakerImage1,
  },
  {
    id: 2,
    title: "Title",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    image: sneakerImage2,
  },
  {
    id: 3,
    title: "Title",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    image: sneakerImage3,
  },
];

const ProductsSection: React.FC = () => {
  return (
    <section className="bg-[#0F172A] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-white text-center md:text-left">
            The best of the best
          </h2>
          <button className="mt-4 md:mt-0 px-8 py-4 border border-white rounded-lg text-white hover:bg-white hover:text-black transition-colors duration-300">
            Sign up now
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-[#0F172A] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              style={{ boxShadow: "0 4px 30px rgba(255, 255, 255, 0.1)" }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-60 object-cover rounded-lg mb-6"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#141414] to-transparent opacity-60 -z-10"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {product.description}
                </p>
                <button className="w-full p-3 border border-white rounded-lg text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center">
                  <FaShoppingCart className="mr-2" />
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
