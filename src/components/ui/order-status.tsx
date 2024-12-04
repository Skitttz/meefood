import {
  COLORS_STATUS_ORDERS,
  ORDERS_CONFIG,
} from "@/constants/generalConstants";
import { IOrderStatus } from "@/interfaces/orders-data";

interface OrderStatusProps {
  statusOrder: IOrderStatus;
}

function OrderStatus({ statusOrder }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        data-testid="badge"
        className={COLORS_STATUS_ORDERS[ORDERS_CONFIG[statusOrder].status]}
      />{" "}
      <span className="font-medium text-muted-foreground">
        {ORDERS_CONFIG[statusOrder].label}
      </span>
    </div>
  );
}

export { OrderStatus };
