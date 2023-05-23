import React from "react";

const MainLayout = (props) => {
  return <div className="p-8 h-full flex gap-8">{props.children}</div>;
};

export default MainLayout;
