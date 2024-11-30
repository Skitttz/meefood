import { IGetOrdersQuery, IGetOrdersResponse } from "@/interfaces/orders-data";
import { api } from "@/lib/axios";
import { AppRoutesEnum } from "@/routes/routes";

export async function getOrders({pageIndex,orderId,customerName,status} : IGetOrdersQuery): Promise<IGetOrdersResponse>{
  const response = await api.get<IGetOrdersResponse>(AppRoutesEnum.ORDERS,{
    params:{
      pageIndex,
      orderId,
      customerName,
      status,
    },
  })

  return response.data;
}