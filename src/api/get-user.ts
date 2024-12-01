import { IGetUserResponse } from "@/interfaces/user-data";
import { api } from "@/lib/axios";
import { ApiRoutesEnum } from "@/routes/routes";

export async function getUser(): Promise<IGetUserResponse> {
  try {
    const response = await api.get<IGetUserResponse>(ApiRoutesEnum.USER);
    return response.data;
  } catch (error) {
    throw new Error("Unable to receive user data. Please try again later.");
  }
}
