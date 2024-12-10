import { IGetDayOrdersAmountResponse } from "@/interfaces/orders-data";
import { ApiRoutesEnum } from "@/routes/routes";
import { HttpResponse, http } from "msw";

export const getDayOrdersAmountMock = http.get<never,never,IGetDayOrdersAmountResponse>(ApiRoutesEnum.DAY_ORDERS_AMOUNT, () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  })
})