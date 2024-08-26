import React from "react";
import TopSection from "@/components/TopSection";
import VisionSection from "@/components/VisionSection";
import ProductSection from "@/components/ProductSection";
import WhyVolaso from "@/components/WhyVolaso";

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
    </main>
  );
};

export default App;