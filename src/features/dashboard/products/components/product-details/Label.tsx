import React from "react";

const Label = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-xs text-gray-400 mb-1">{children}</p>;
};

export default Label;
