import { IGetMonthCanceledOrdersAmountResponse } from "@/interfaces/orders-data";
import { api } from "@/lib/axios";
import { ApiRoutesEnum } from "@/routes/routes";

export async function getMonthCanceledOrdersAmount(){
  try {
    const response = await api.get<IGetMonthCanceledOrdersAmountResponse>(ApiRoutesEnum.MONTH_ORDERDS_CANCELED_AMOUNT);
    return response.data;
  } catch  {
    throw new Error("Unable to receive orders information. Please try again later.");
  }
}