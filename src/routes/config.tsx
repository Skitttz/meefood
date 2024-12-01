import { useRoutes, RouteObject } from "react-router-dom";
import { AppRoutesEnum } from "./routes";
import { AppLayout } from "@/pages/_layouts/app";
import { AuthLayout } from "@/pages/_layouts/auth";
import { SignIn, SignUp } from "@pages/auth/index";
import { Dashboard, Orders } from "@pages/app/index";
import { NotFound } from "@/pages/not-found";
import { Error } from "@/pages/error";

export const RouteConfig = () => {
  const routes: RouteObject[] = [
    {
      path: AppRoutesEnum.BASE,
      errorElement: <Error />,
      children: [
        {
          path: AppRoutesEnum.BASE,
          element: <AppLayout />,
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
            {
              path: AppRoutesEnum.ORDERS,
              element: <Orders />,
            },
          ],
        },
        {
          element: <AuthLayout />,
          children: [
            {
              path: AppRoutesEnum.SIGN_IN,
              element: <SignIn />,
            },
            {
              path: AppRoutesEnum.SING_UP,
              element: <SignUp />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ];

  return useRoutes(routes);
};
