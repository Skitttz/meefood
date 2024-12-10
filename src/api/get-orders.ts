import { IGetOrdersQuery, IGetOrdersResponse } from "@/interfaces/orders-data";
import { api } from "@/lib/axios";
import { ApiRoutesEnum } from "@/routes/routes";

export async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status,
}: IGetOrdersQuery): Promise<IGetOrdersResponse> {
  try {
    const response = await api.get<IGetOrdersResponse>(ApiRoutesEnum.ORDERS, {
      params: {
        pageIndex,
        orderId,
        customerName,
        status,
      },
    });

    return response.data;
  } catch {
    throw new Error("Unable to receive orders. Please try again later.");
  }
}
