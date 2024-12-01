import { HeaderAuthenticated } from "@/components/header/header-auth";
import { useAuthInterceptor } from "@/hooks/useAuthInterceptor";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  useAuthInterceptor();
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <HeaderAuthenticated />
      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  );
}
