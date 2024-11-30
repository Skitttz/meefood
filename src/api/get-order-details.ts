import { IGetOrderDetailsResponse } from "@/interfaces/orders-data";
import { api } from "@/lib/axios";

interface IGetOrderDetailsParams {
  orderId: string
}

export async function getOrderDetails({orderId}:IGetOrderDetailsParams ): Promise<IGetOrderDetailsResponse>{
  const response = await api.get(`/orders/${orderId}`);
  return response.data;
}