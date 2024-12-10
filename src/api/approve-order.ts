import { IOrderApproveParams } from "@/interfaces/orders-data";
import { api } from "@/lib/axios";
import { ApiRoutesEnum } from "@/routes/routes";

export async function approveOrder({ orderId }:  IOrderApproveParams): Promise<void> {
    try {
        await api.patch(`${ApiRoutesEnum.ORDERS}/${orderId}/approve`);
    } catch {
        console.error("Unable to approve the order. Please try again later.");
    }
}
