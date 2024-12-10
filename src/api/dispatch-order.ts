import { IOrderDispatchParams } from "@/interfaces/orders-data";
import { api } from "@/lib/axios";
import { ApiRoutesEnum } from "@/routes/routes";

export async function dispatchOrder({ orderId }: IOrderDispatchParams): Promise<void> {
    try {
        await api.patch(`${ApiRoutesEnum.ORDERS}/${orderId}/dispatch`);
    } catch  {
        console.error("Unable to dispatch the order. Please try again later.");
    }
}
