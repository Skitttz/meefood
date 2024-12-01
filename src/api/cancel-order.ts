import { IOrderDetailsParams } from "@/interfaces/orders-data";
import { api } from "@/lib/axios";
import { ApiRoutesEnum } from "@/routes/routes";

export async function cancelOrder({ orderId }: IOrderDetailsParams): Promise<void> {
    try {
        await api.patch(`${ApiRoutesEnum.ORDERS}/${orderId}/cancel`);
    } catch {
        console.error("Unable to cancel the order. Please try again later.");
    }
}
