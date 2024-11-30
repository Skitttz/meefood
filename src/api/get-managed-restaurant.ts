import { IGetRestaurantResponse } from "@/interfaces/restaurant-data";
import { api } from "@/lib/axios";
import { ApiRoutesEnum } from "@/routes/routes";

export async function getRestaurant() : Promise<IGetRestaurantResponse>{
  const response = await api.get(ApiRoutesEnum.MANAGED_RESTAURANT);
  return response.data;
}