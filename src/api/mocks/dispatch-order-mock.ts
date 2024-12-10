import { IOrderDispatchParams } from "@/interfaces/orders-data";
import { ApiRoutesEnum } from "@/routes/routes";
import { HttpResponse, http } from "msw";

export const dispatchOrderMock = http.patch<IOrderDispatchParams, never, never>(`${ApiRoutesEnum.ORDERS_WITH_PARAMS}/Dispatch`, async({params}) => {
  if(params.orderId === 'error-order-id'){
    return new HttpResponse(null, {status:400})
  }
  return new HttpResponse(null, {status: 204})
})