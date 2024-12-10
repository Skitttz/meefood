import { mockDatasetRevenue } from "@/constants/generalConstants";
import { IGetDailyRevenueInPeriodResponse } from "@/interfaces/orders-data";
import { ApiRoutesEnum } from "@/routes/routes";
import { HttpResponse, http } from "msw";

export const getDailyRevenueInPeriodMock = http.get<never,never,IGetDailyRevenueInPeriodResponse>(ApiRoutesEnum.DAILY_RECEIPT_IN_PERIOD, () => {
  return HttpResponse.json(mockDatasetRevenue)
})