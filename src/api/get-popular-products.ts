import {IGetPopularProducts } from "@/interfaces/orders-data";
import { api } from "@/lib/axios";
import { ApiRoutesEnum } from "@/routes/routes";

export async function getPopularProducts(){
  try {
    const response = await api.get<IGetPopularProducts>(ApiRoutesEnum.POPULAR_PRODUCTS);
    return response.data;
  } catch  {
    throw new Error("Unable to receive popular products information. Please try again later.");
  }
}