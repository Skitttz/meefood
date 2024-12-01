import { Outlet } from "react-router-dom";
import { HeaderPublic } from "@/components/header/header-public";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <HeaderPublic />
      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
