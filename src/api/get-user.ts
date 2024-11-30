import { IGetUserResponse } from "@/interfaces/user-data";
import { api } from "@/lib/axios";
import { ApiRoutesEnum } from "@/routes/routes";

export async function getUser() : Promise<IGetUserResponse>{
  const response = await api.get(ApiRoutesEnum.USER);
  return response.data;
}