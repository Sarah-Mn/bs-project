import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const PublicLayout = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};

export default PublicLayout;
