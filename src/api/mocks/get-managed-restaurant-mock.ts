import { IGetRestaurantResponse } from "@/interfaces/restaurant-data";
import { ApiRoutesEnum } from "@/routes/routes";
import { HttpResponse, http } from "msw";

export const getManagedRestaurantMock = http.get<never,never,IGetRestaurantResponse>(ApiRoutesEnum.MANAGED_RESTAURANT, () => {
  return HttpResponse.json({
    id: 'custom-id',
    managerId: 'manager-custom-id',
    name: 'AcarajeShop',
    description: 'Example Restaurant Description',
    createdAt: new Date(),
    updatedAt: null,
  })
})