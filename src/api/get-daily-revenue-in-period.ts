import { IGetDailyRevenueInPeriodQuery, IGetDailyRevenueInPeriodResponse } from "@/interfaces/orders-data";
import { api } from "@/lib/axios";
import { ApiRoutesEnum } from "@/routes/routes";

export async function getDailyRevenueInPeriod({from,to} : IGetDailyRevenueInPeriodQuery){
  try {
    const response = await api.get<IGetDailyRevenueInPeriodResponse>(ApiRoutesEnum.DAILY_RECEIPT_IN_PERIOD, {
      params:{
        from,
        to
      }
    });
    return response.data;
  } catch  {
    throw new Error("Unable to receive daily orders information. Please try again later.");
  }
}