import React from "react";

const Display = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-sm font-medium">{children}</p>;
};

export default Display;
