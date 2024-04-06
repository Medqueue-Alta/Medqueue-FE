import { Link } from "react-router-dom";
import DropdownNavbar from "./PatientDropdownNavbar";


const NavigationBar = () => {
  return (
    <nav className="navbar-container bg-[#089993]">
      <div className="justify-self-start">
        <Link to={"/pasien/home"}>
          <img
            src="/MedQueue_Icon.png"
            alt="MedQueue_Icon"
            className="max-w-none w-1/2 p-3 drop-shadow-xl"
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