import { ReactNode } from "react";
import Footer from "./PatientFooter";
import NavigationBar from "./PatientNavigationBar";

interface Props {
  children: ReactNode;
}

const PatientLayout = (props: Props) => {
  const { children } = props;

  return (
    <div className="flex justify-center bg-[#066e6a]">
      <div className="layout-container md:min-w-[480px] md:max-w-[480px] md:justify-items-center bg-white">
        <NavigationBar />
        <div className="w-full h-full">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default PatientLayout;
