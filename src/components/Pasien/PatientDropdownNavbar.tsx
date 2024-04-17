import { Link, useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/use-toast";

const DropdownNavbar = () => {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
    toast({
      title: "Success",
      description: "Berhasil Log-Out",
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger id="trigger-btn">
        <img src="/Hamburger.png" alt="Hamburger" className="brightness-200s" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2" id="profile-btn">
          <img src="/user.png" alt="" />
          <Link to={"/pasien/update-profile"}>
            <p>Profile</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2" id="reservation-btn">
          <img src="/calendar-clock.png" alt="" />
          <Link to={"/pasien/reservasi"}>
            <p>Reservasi</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2" id="logout-btn">
          <img src="/log-out.png" alt="" />
          <p onClick={logout}>Log Out</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownNavbar;
