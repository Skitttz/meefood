import { useNavigate } from "react-router-dom";
import { api } from "@/lib/axios";
import { AppRoutesEnum } from "@/routes/routes";
import { isAxiosError } from "axios";
import { useEffect } from "react";

export function useAuthInterceptor() {
  const navigate = useNavigate();

  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error) && error.response?.status === 401 && error.response?.data.code === "UNAUTHORIZED") {
          navigate(AppRoutesEnum.SIGN_IN, { replace: true });
        }
        return Promise.reject(error); 
      }
    );

    return () => {
      api.interceptors.response.eject(interceptorId);
    };
  }, [navigate]);
}
