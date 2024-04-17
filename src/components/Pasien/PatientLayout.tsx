import { ReactNode } from "react";
import Footer from "./PatientFooter";
import NavigationBar from "./PatientNavigationBar";

interface Props {
  children: ReactNode;
}

const PatientLayout = (props: Props) => {
  const { children } = props;

  return (
    <div className="layout-container">
      <NavigationBar />
      <div className="w-full h-full">{children}</div>
      <Footer />
    </div>
  );
};

export default PatientLayout;
