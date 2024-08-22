import React from 'react';
import styles from './VisionSection.module.css'; // Import the external CSS file

const VisionSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16">
      {/* Central Line */}
      <div className="flex justify-center">
        <div className="w-11/12 flex">
          <div className="h-0.5 bg-white" style={{ width: '10%' }}></div>
          <div className="h-0.5 bg-gray-500" style={{ width: '90%' }}></div>
        </div>
      </div>

      {/* Text Section */}
      <div className={`pl-20 mt-8 ${styles.textContainer}`}>
        <h6 className="text-sm text-left">VISION</h6>
        <h1 className="text-7xl md:text-9xl font-bold mt-4 leading-tight">
          We’re Here to Revolutionize the World of Local Shipping
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mt-12 px-20">
        {/* Left Column */}
        <div className="bg-black text-white p-8 max-w-lg md:w-1/2">
          <p className="text-left">
            This is the space to introduce visitors to the business or brand.
            Briefly explain who's behind it, what it does and what makes it
            unique. Share its core values and what this site has to offer.
          </p>
        </div>

        {/* Right Column */}
        <div className="max-w-lg md:w-1/2 flex justify-end">
          <img
            src="https://static.wixstatic.com/media/84770f_4768df327fc14639ab855ebaa4699255~mv2.jpg/v1/fill/w_147,h_104/Robot_Dark_Background.jpg"
            alt="Vision Image"
            className="object-contain w-screen"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
