import React from "react";
import TopSection from "@/components/TopSection";
import VisionSection from "@/components/VisionSection";
import ProductSection from "@/components/ProductSection";

const App: React.FC = () => {
  return (
    <main>
      <TopSection />
      <VisionSection />
      <ProductSection />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-40"></div>
      <VisionSection />
    </main>
  );
};

export default App;