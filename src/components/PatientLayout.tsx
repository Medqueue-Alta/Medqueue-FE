import { ReactNode } from "react";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

interface Props {
  children: ReactNode;
}

const PatientLayout = (props: Props) => {
  const { children } = props;

  return (
    <div className="layout-container">
      <NavigationBar />
      <div className="w-full h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default PatientLayout;
