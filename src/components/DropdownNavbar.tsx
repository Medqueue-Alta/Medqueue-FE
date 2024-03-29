import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropdownNavbar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <img src="/Hamburger.png" alt="Hamburger" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <img src="/user.png" alt="" />
          <p>Profile</p>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <img src="/calendar-clock.png" alt="" />
          <p>Reservasi</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            <img src="/log-out.png" alt="" />
            <p>Log Out</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownNavbar;
