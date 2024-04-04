import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const DropdownNavbar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <img src="/Hamburger.png" alt="Hamburger" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2">
          <img src="/user.png" alt="" />
          <Link to={"/faskes/update-profile"}>
            <p>Profile</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <img src="/calendar-clock.png" alt="" />
          <Link to={"/faskes/reservasi"}>
            <p>Reservasi</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2">
          <img src="/log-out.png" alt="" />
          <p>Log Out</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownNavbar;
