import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { DialogTrigger } from "@components/ui/dialog";
import { Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";
import { IOrderTableRow } from "@/interfaces/orders-data";
import { OrderStatus } from "@/components/ui/order-status";
import { formatterValueCurrency } from "@/utils/formatter";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { disableButtonApprove } from "@/constants/generalConstants";
import { useOrderActions } from "@/hooks/useOrderActions";
import { ButtonStatus } from "@/components/ui/button-status";

function OrdersTableRow({ order }: IOrderTableRow) {
  const { orderId, status, customerName, total, createdAt } = order;
  const [isDetailsOpenState, setIsDetailsOpenState] = useState<boolean>(false);
  const { cancelOrderFn, isCancelingOrder } = useOrderActions();
  return (
    <TableRow>
      <TableCell>
        <Dialog open={isDetailsOpenState} onOpenChange={setIsDetailsOpenState}>
          <DialogTrigger asChild>
            <Button variant={"outline"} size={"xs"}>
              <Search className="h-3 w-3" />
              <span className="sr-only">Details Product</span>
            </Button>
          </DialogTrigger>
          <OrderDetails isOpen={isDetailsOpenState} orderId={orderId} />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">{orderId}</TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(createdAt, {
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <OrderStatus key={orderId} statusOrder={status} />
      </TableCell>
      <TableCell className="font-medium">{customerName}</TableCell>
      <TableCell className="font-medium">
        {formatterValueCurrency(total / 100)}
      </TableCell>
      <TableCell>
        <ButtonStatus status={status} orderId={orderId} />
      </TableCell>
      <TableCell>
        <Button
          disabled={disableButtonApprove(status, isCancelingOrder)}
          variant={"ghost"}
          size={"xs"}
          onClick={() => cancelOrderFn({ orderId })}
        >
          <X className="h-3 w-3" />
          {"Cancel"}
        </Button>
      </TableCell>
    </TableRow>
  );
}

export { OrdersTableRow };
