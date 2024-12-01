import { IGetOrderDetailsResponse, IOrderDetailsParams } from "@/interfaces/orders-data";
import { api } from "@/lib/axios";
import { ApiRoutesEnum } from "@/routes/routes";

export async function getOrderDetails({ orderId }: IOrderDetailsParams) {
    try {
        const response = await api.get<IGetOrderDetailsResponse>(`${ApiRoutesEnum.ORDERS}/${orderId}`);
        return response.data;
    } catch (error) {
        throw new Error("Unable to receive order details. Please try again later.");
    }
}
