import React from 'react';

const InnerLayout = (props) => {
  return <div className="p-8 w-full">{props.children}</div>;
};

export default InnerLayout;
