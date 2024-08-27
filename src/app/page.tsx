import React from "react";
import TopSection from "@/components/TopSection";
import VisionSection from "@/components/VisionSection";
import ProductSection from "@/components/ProductSection";
import WhyVolaso from "@/components/WhyVolaso";
import Company from "@/components/Company";
import Collaboration from "@/components/Collaboration";
import Footer from "@/components/Footer";

const App: React.FC = () => {
  return (
    <main>
      <TopSection />
      <VisionSection />
      <ProductSection />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div style={{ height: '20vw' }}></div>
      <WhyVolaso />
      <div style={{ height: '21vw' }}></div>
      <Company />
      <Collaboration />
      <div style={{ height: '7vw' }}></div>
      <Footer />
    </main>
  );
};

export default App;