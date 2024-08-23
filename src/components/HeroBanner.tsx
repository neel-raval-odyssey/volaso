import React from "react";

const HeroBanner: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-start h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/84770f_4768df327fc14639ab855ebaa4699255~mv2.jpg/v1/fill/w_147,h_104/Robot_Dark_Background.jpg')",
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
