import { HomeIcon, UtensilsCrossedIcon } from "lucide-react";
import { AppRoutesEnum } from "@/routes/routes";
import { NavLink } from "@components/nav-link";
import { ThemeToggle } from "../theme/theme-toggle";
import { AccountMenu, Skeleton, Separator } from "../ui/index";
import MeefoodLogo from "@assets/meefood.png";
import { Link } from "react-router-dom";
import { getUser } from "@/api/get-user";
import { useQuery } from "@tanstack/react-query";
import { getRestaurant } from "@/api/get-managed-restaurant";

function HeaderAuthenticated() {
  const { data: user, isLoading: isLoadingProfile } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: Infinity,
  });
  const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } =
    useQuery({
      queryKey: ["managed-restaurant"],
      queryFn: getRestaurant,
      staleTime: Infinity,
    });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Link
          to={AppRoutesEnum.BASE}
          className="flex items-center gap-2 text-lg font-medium text-foreground"
        >
          <img src={MeefoodLogo} className="h-8 w-8" alt="Logo Meefood" />
          <span className="font-semibold">Meefood</span>
        </Link>
        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to={"/"}>
            <HomeIcon className="h-4 w-4" /> Dashboard
          </NavLink>
          <NavLink to={AppRoutesEnum.ORDERS}>
            <UtensilsCrossedIcon className="h-4 w-4" /> Orders
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu
            managerName={user?.name}
            email={user?.email}
            restaurantName={managedRestaurant?.name}
            isLoadingProfile={isLoadingProfile}
            isLoadingRestaurant={isLoadingManagedRestaurant}
          />
        </div>
      </div>
    </div>
  );
}

export { HeaderAuthenticated };
