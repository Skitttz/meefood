import { IGetDayOrdersAmountResponse } from "@/interfaces/orders-data";
import { api } from "@/lib/axios";
import { ApiRoutesEnum } from "@/routes/routes";

export async function getDayOrdersAmount(){
  try {
    const response = await api.get<IGetDayOrdersAmountResponse>(ApiRoutesEnum.DAY_ORDERS_AMOUNT);
    return response.data;
  } catch  {
    throw new Error("Unable to receive orders information. Please try again later.");
  }
}