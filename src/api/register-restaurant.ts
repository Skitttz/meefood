import { ApiRoutesEnum } from "@/routes/routes";
import { api } from "@/lib/axios";
import { IPostRestaurantBody } from "@/interfaces/restaurant-data";

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: IPostRestaurantBody): Promise<void> {
  try {
    await api.post(ApiRoutesEnum.RESTAURANTS, { restaurantName, managerName, email, phone });
  } catch {
    throw new Error("Unable to register the restaurant. Please try again later.");
  }
}
