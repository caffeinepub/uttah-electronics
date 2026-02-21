import HeroSection from './components/sections/HeroSection';
import FeaturedCategoriesSection from './components/sections/FeaturedCategoriesSection';
import FeaturedProductsSection from './components/sections/FeaturedProductsSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import TopNav from './components/site/TopNav';
import Footer from './components/site/Footer';
import SectionDivider3D from './components/three/SectionDivider3D';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <SectionDivider3D />
        
        <section id="categories">
          <FeaturedCategoriesSection />
        </section>
        
        <section id="products">
          <FeaturedProductsSection />
        </section>
        
        <SectionDivider3D />
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
