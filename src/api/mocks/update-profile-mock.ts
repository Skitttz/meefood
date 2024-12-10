import { IPutRestaurantProfileBody } from "@/interfaces/restaurant-data";
import { ApiRoutesEnum } from "@/routes/routes" 
import { http, HttpResponse} from "msw"

export const updateProfileMock = http.put<never, IPutRestaurantProfileBody>(ApiRoutesEnum.PROFILE, async ({request}) => {
  const { name} =   await request.json();
  if(name === 'PastelShop'){
    return new HttpResponse(null, {status: 201})
  }
  return new HttpResponse(null, {status:400})
})