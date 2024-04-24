import { ReactNode } from "react";
import Header from "../Header";

interface Props {
  children: ReactNode;
}

const MainLayout = (props: Props) => {
  const { children } = props;
  return <div className="main">
    <Header/>
    {children}
  </div>;
};

export default MainLayout;