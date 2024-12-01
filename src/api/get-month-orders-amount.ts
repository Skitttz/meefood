import { IGetMonthOrdersAmountResponse } from "@/interfaces/orders-data";
import { api } from "@/lib/axios";
import { ApiRoutesEnum } from "@/routes/routes";

export async function getMonthOrdersAmount(){
  try {
    const response = await api.get<IGetMonthOrdersAmountResponse>(ApiRoutesEnum.MONTH_ORDERDS_AMOUNT);
    return response.data;
  } catch  {
    throw new Error("Unable to receive orders information. Please try again later.");
  }
}