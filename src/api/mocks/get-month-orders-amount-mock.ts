import { IGetMonthOrdersAmountResponse } from "@/interfaces/orders-data";
import { ApiRoutesEnum } from "@/routes/routes";
import { HttpResponse, http } from "msw";

export const getMonthOrdersAmountMock = http.get<never,never,IGetMonthOrdersAmountResponse>(ApiRoutesEnum.MONTH_ORDERDS_AMOUNT, () => {
  return HttpResponse.json({
    amount: 150,
    diffFromLastMonth: 7,
  })
})