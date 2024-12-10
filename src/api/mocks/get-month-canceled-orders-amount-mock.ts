import { IGetMonthCanceledOrdersAmountResponse } from "@/interfaces/orders-data";
import { ApiRoutesEnum } from "@/routes/routes";
import { HttpResponse, http } from "msw";

export const getMonthCanceledOrdersAmountMock = http.get<never,never,IGetMonthCanceledOrdersAmountResponse>(ApiRoutesEnum.MONTH_ORDERDS_CANCELED_AMOUNT, () => {
  return HttpResponse.json({
    amount: 3,
    diffFromLastMonth: 5,
  })
})