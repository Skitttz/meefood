import { IOrderDetailsParams } from "@/interfaces/orders-data";
import { api } from "@/lib/axios";
import { ApiRoutesEnum } from "@/routes/routes";

export async function dispatchOrder({ orderId }: IOrderDetailsParams): Promise<void> {
    try {
        await api.patch(`${ApiRoutesEnum.ORDERS}/${orderId}/dispatch`);
    } catch  {
        console.error("Unable to dispatch the order. Please try again later.");
    }
}
