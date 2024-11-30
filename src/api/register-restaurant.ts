import { ApiRoutesEnum } from "@/routes/routes";
import { api } from "@/lib/axios";
import { IPostRestaurantBody } from "@/interfaces/restaurant-data";

export async function registerRestaurant({restaurantName,managerName,email,phone} : IPostRestaurantBody){
  await api.post(ApiRoutesEnum.RESTAURANTS, {restaurantName,managerName,email,phone})
}