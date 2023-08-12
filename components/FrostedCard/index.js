import React, { Children } from 'react';

const FrostedGlassBox = ({children}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="box my-4 shadow-lg w-96 h-48 rounded-lg backdrop-blur-md backdrop-brightness-150 bg-opacity-50 bg-white">
        {children}
      </div>
    </div>
  );
};

export default FrostedGlassBox;
