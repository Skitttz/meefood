import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { Skeleton } from "@components/ui/skeleton";
import { Button } from "./button";
import { Building, ChevronDown, LogOut } from "lucide-react";
import { IUserResume } from "@/interfaces/user-data";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { StoreUserDialog } from "./store-user-dialog";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "@/api/sign-out";
import { useNavigate } from "react-router-dom";
import { AppRoutesEnum } from "@/routes/routes";

function AccountMenu(propsAccount: IUserResume) {
  const navigate = useNavigate();
  const {
    managerName,
    email,
    restaurantName,
    isLoadingProfile,
    isLoadingRestaurant,
  } = propsAccount;
  const { mutateAsync: signOutFn, isPending: isSigningOut } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate(AppRoutesEnum.SIGN_IN, { replace: true });
    },
  });

  function handleSignOut() {
    signOutFn();
  }
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"outline"}
            className="flex select-none items-center gap-2"
          >
            {isLoadingRestaurant ? (
              <Skeleton className="h-4 w-40" />
            ) : (
              restaurantName
            )}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel className="flex flex-col">
            {isLoadingProfile ? (
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-32" />
              </div>
            ) : (
              <>
                <span>{managerName}</span>
                <span className="text-xs font-normal text-muted-foreground">
                  {email}
                </span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DialogTrigger asChild>
              <DropdownMenuItem className="cursor-pointer">
                <Building className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
            </DialogTrigger>
            <DropdownMenuItem
              asChild
              className="cursor-pointer text-rose-500 dark:text-rose-400"
              disabled={isSigningOut}
            >
              <button className="w-full" onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <StoreUserDialog />
    </Dialog>
  );
}

export { AccountMenu };
