import { Link } from "react-router-dom";
import DropdownNavbar from "./PatientDropdownNavbar";


const NavigationBar = () => {
  return (
    <nav className="navbar-container shadow-xl bg-[#089993] ">
      <div className="justify-self-start">
        <Link to={"/pasien/home"} id="logo-btn">
          <img
            src="/MedQueue_Icon.png"
            alt="MedQueue_Icon"
            className=" w-1/2 md:w-32 p-3 brightness-125 drop-shadow-2xl"
          />
        </Link>
      </div>
      <div className="justify-self-end mr-5">
        <DropdownNavbar />
      </div>
    </nav>
  );
}

export default NavigationBar