import React from 'react';

const FrostedGlassBox = ({ children, className }) => {
  return (
    <div className={`box my-4 shadow-lg w-96 h-48 rounded-lg backdrop-blur-md backdrop-brightness-150 bg-opacity-50 bg-white p-4 ${className}`}>
      {children}
    </div>
  );
};

const FrostedCircle = ({ children }) => {
  return (
    <div className="relative">
      <FrostedGlassBox className="mt-12 mb-0">
        <div className="flex justify-between items-center">
          <div className="w-2 h-24 bg-gray-300"></div>
          <div className="absolute w-24 h-24 rounded-full bg-black bg-opacity-50 bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
            {children}
          </div>
        </div>
      </FrostedGlassBox>
    </div>
  );
};

const HierarchyDiagram = () => {
  return (
    <div className="flex justify-center items-center">
      <FrostedCircle>Child</FrostedCircle>
    </div>
  );
};

export default HierarchyDiagram;
