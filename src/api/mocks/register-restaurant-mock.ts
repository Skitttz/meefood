import { IPostRestaurantBody } from "@/interfaces/restaurant-data";
import { ApiRoutesEnum } from "@/routes/routes" 
import { http, HttpResponse} from "msw"

export const registerRestaurantMock = http.post<never, IPostRestaurantBody>(ApiRoutesEnum.RESTAURANTS, async ({request}) => {
  const { restaurantName} =   await request.json();
  if(restaurantName === 'AcarajeShop'){
    return new HttpResponse(null, {status: 201})
  }
  return new HttpResponse(null, {status:400})
})