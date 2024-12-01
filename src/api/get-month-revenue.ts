import { IGetMonthRevenueResponse } from "@/interfaces/orders-data";
import { api } from "@/lib/axios";
import { ApiRoutesEnum } from "@/routes/routes";

export async function getMonthRevenue(){
  try {
    const response = await api.get<IGetMonthRevenueResponse>(ApiRoutesEnum.MONTH_REVENUE);
    return response.data;
  } catch  {
    throw new Error("Unable to receive orders information. Please try again later.");
  }
}