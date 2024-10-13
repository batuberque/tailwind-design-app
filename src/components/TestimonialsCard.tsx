const TestimonialCard: React.FC<{
  logo: string;
  description: string;
  imageSrc: string;
  name: string;
  role: string;
}> = ({ logo, description, imageSrc, name, role }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full mr-4">
          <span className="text-lg font-semibold text-gray-800">{logo}</span>
        </div>
      </div>
      <p className="text-[#666] mb-6 leading-relaxed">{description}</p>
      <div className="flex items-center mt-4">
        <img
          src={imageSrc}
          alt={name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="text-[#141414] font-semibold text-lg">{name}</p>
          <p className="text-sm text-[#666]">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
