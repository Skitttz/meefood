import { IOrderDeliverParams } from "@/interfaces/orders-data";
import { api } from "@/lib/axios";
import { ApiRoutesEnum } from "@/routes/routes";

export async function deliverOrder({ orderId }: IOrderDeliverParams): Promise<void> {
    try {
        await api.patch(`${ApiRoutesEnum.ORDERS}/${orderId}/deliver`);
    } catch {
        console.error("Unable to mark the order as delivered. Please try again later.");
    }
}
