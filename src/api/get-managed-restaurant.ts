import { IGetRestaurantResponse } from "@/interfaces/restaurant-data";
import { api } from "@/lib/axios";
import { ApiRoutesEnum } from "@/routes/routes";

export async function getRestaurant(): Promise<IGetRestaurantResponse> {
    try {
        const response = await api.get<IGetRestaurantResponse>(ApiRoutesEnum.MANAGED_RESTAURANT);
        return response.data;
    } catch  {
        throw new Error("Unable to receive restaurant information. Please try again later.");
    }
}
