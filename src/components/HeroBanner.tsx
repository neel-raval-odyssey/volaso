import React from "react";

const HeroBanner: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-start h-[500px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/c837a6_518925604ea94963890d43b5f41aa5bff000.jpg')",
      }}
    >
      <div className="bg-opacity-50 p-8 text-white max-w-md ml-8">
        <h1 className="text-4xl font-bold mb-4">The Future of Delivery Is Here</h1>
        <p className="text-xl leading-relaxed">
          DISCOVER A GREENER, FASTER SELF-DRIVING DELIVERY SOLUTION WITH VOLASO.
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
