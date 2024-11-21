import { Dashboard } from "@pages/app/dashboard";
import { SignIn } from "@pages/auth/sign-in";
import { SignUp } from "@pages/auth/sign-up";
import { RoutesEnum } from "./routes";
import { useRoutes, RouteObject } from "react-router-dom";
import { AppLayout } from "@/pages/_layouts/app";
import { AuthLayout } from "@/pages/_layouts/auth";

export const RouteConfig = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
      ],
    },
    {
      path: RoutesEnum.GUEST,
      element: <AuthLayout />,
      children: [
        {
          path: RoutesEnum.SIGN_IN,
          element: <SignIn />,
        },
        {
          path: RoutesEnum.SING_UP,
          element: <SignUp />,
        },
      ],
    },
    // {
    //   path: "*",
    //   element: <NotFound />
    // }
  ];

  return useRoutes(routes);
};
