import { IOrderApproveParams } from "@/interfaces/orders-data";
import { ApiRoutesEnum } from "@/routes/routes";
import { HttpResponse, http } from "msw";

export const approveOrderMock = http.patch<IOrderApproveParams, never, never>(`${ApiRoutesEnum.ORDERS_WITH_PARAMS}/approve`, async({params}) => {
  if(params.orderId === 'error-order-id'){
    return new HttpResponse(null, {status:400})
  }
  return new HttpResponse(null, {status: 204})
})