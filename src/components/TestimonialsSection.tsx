import TestimonialCard from "./TestimonialsCard";
import testimonial1 from "../assets/5.jpeg";
import testimonial2 from "../assets/6.jpeg";
import testimonial3 from "../assets/7.jpeg";

const testimonials = [
  {
    id: 1,
    logo: "Zoomerr",
    description:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    image: testimonial1,
    name: "Hellen Jummy",
    role: "Team Lead",
  },
  {
    id: 2,
    logo: "SHELLS",
    description:
      "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    image: testimonial2,
    name: "Hellena John",
    role: "Co-founder",
  },
  {
    id: 3,
    logo: "ArtVenue",
    description:
      "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultricies a lacus. Pretium vehicula pretium posuere justo sed.",
    image: testimonial3,
    name: "David Oshodi",
    role: "Manager",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="resources" className="bg-[#FFFBEB] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#141414] mb-12 text-center">
          Because they love us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              logo={testimonial.logo}
              description={testimonial.description}
              imageSrc={testimonial.image}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
