import React, { ReactNode } from 'react';

const LayoutBase = (props: { children: ReactNode }) => {
  return <div>{props.children}</div>;
};

export default LayoutBase;
