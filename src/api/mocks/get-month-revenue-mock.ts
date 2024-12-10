import { IGetMonthRevenueResponse } from "@/interfaces/orders-data";
import { ApiRoutesEnum } from "@/routes/routes";
import { HttpResponse, http } from "msw";

export const getMonthRevenueMock = http.get<never,never,IGetMonthRevenueResponse>(ApiRoutesEnum.MONTH_REVENUE, () => {
  return HttpResponse.json({
    receipt: 32000,
    diffFromLastMonth: 20,
  })
})