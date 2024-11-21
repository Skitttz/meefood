import { HandPlatter, HomeIcon, UtensilsCrossedIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import { RoutesEnum } from "@/routes/routes";
import { NavLink } from "@components/nav-link";

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <HandPlatter className="h-6 w-6" />
          <span className="font-semibold">Meefood</span>
        </div>
        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to={"/"}>
            <HomeIcon className="h-4 w-4" /> Dashboard
          </NavLink>
          <NavLink to={RoutesEnum.ORDERS}>
            <UtensilsCrossedIcon className="h-4 w-4" /> Orders
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
