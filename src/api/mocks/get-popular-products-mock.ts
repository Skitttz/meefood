import { mockDatasetProduct } from "@/constants/generalConstants";
import { IGetPopularProducts } from "@/interfaces/orders-data";
import { ApiRoutesEnum } from "@/routes/routes";
import { HttpResponse, http } from "msw";

export const getPopularProductMock = http.get<never,never,IGetPopularProducts>(ApiRoutesEnum.POPULAR_PRODUCTS, () => {
  return HttpResponse.json(mockDatasetProduct)
})