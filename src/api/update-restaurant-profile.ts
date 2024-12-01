import { ApiRoutesEnum } from "@/routes/routes";
import { api } from "@/lib/axios";
import { IPutRestaurantProfileBody } from "@/interfaces/restaurant-data";

export async function updateRestaurantProfile({
  name,
  description,
}: IPutRestaurantProfileBody): Promise<void> {
  try {
    await api.put(ApiRoutesEnum.PROFILE, { name, description });
  } catch {
    throw new Error("Unable to update restaurant profile. Please try again later.");
  }
}
