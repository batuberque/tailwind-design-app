import Footer from "./components/Footer";
import GrowYourCollectionSection from "./components/GrownYourCollectionSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import ProductsSection from "./components/ProductsSection";
import ShoesCollectedMap from "./components/ShoesCollectedMap";
import SolutionsSection from "./components/SolutionSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyJoinUsSection from "./components/WhyJoinUsSection";

function App() {
  return (
    <div className="pt-16">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <ProductsSection />
      <WhyJoinUsSection />
      <TestimonialsSection />
      <GrowYourCollectionSection />
      <ShoesCollectedMap />
      <Footer />
    </div>
  );
}

export default App;
