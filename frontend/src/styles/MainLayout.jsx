import React from 'react';

const MainLayout = (props) => {
  return (
    <div className="lg:p-8 md:p-8 p-4 h-full flex lg:gap-8 md:gap-8 gap-4">
      {props.children}
    </div>
  );
};

export default MainLayout;
