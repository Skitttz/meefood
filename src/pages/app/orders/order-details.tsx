import { getOrderDetails } from "@/api/get-order-details";
import { OrderStatus } from "@/components/ui/order-status";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IOrderDetails } from "@/interfaces/orders-data";
import { formatterValueCurrency } from "@/utils/formatter";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { OrderDetailsSkeleton } from "./order-skeleton";
import { Skeleton } from "@/components/ui";

function OrderDetails({ orderId, isOpen }: IOrderDetails) {
  const { data: order, isLoading: isLoadingOrder } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrderDetails({ orderId }),
    enabled: isOpen,
  });
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="flex">
          Order:{" "}
          {isLoadingOrder ? (
            <Skeleton className="ml-1 h-5 w-[240px]" />
          ) : (
            order?.id
          )}
        </DialogTitle>
        <DialogDescription>Order Details</DialogDescription>
      </DialogHeader>
      {order ? (
        <div className="space-y-6">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Status</TableCell>
                <TableCell className="flex justify-end">
                  <OrderStatus statusOrder={order.status} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Customer
                </TableCell>
                <TableCell className="flex justify-end">
                  {order.customer.name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Phone</TableCell>
                <TableCell className="flex justify-end">
                  {order.customer.phone ?? "No phone number registered"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">E-mail</TableCell>
                <TableCell className="flex justify-end">
                  {order?.customer.email}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Done At</TableCell>
                <TableCell className="flex justify-end">
                  {formatDistanceToNow(order.createdAt, {
                    addSuffix: true,
                  })}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead className="text-right">Qty</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {order.orderItems.map((orderItems) => {
                const priceInCents = Number(orderItems?.priceInCents) / 100;
                const totalValueOrderItem =
                  priceInCents * Number(orderItems.quantity);
                return (
                  <TableRow key={orderItems.id}>
                    <TableCell>{orderItems.product.name}</TableCell>
                    <TableCell className="text-right">
                      {orderItems.quantity}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatterValueCurrency(priceInCents)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatterValueCurrency(totalValueOrderItem)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableFooter>
              <TableCell colSpan={3} className="font-medium">
                Order Total
              </TableCell>
              <TableCell className="text-right font-medium">
                {formatterValueCurrency(Number(order?.totalInCents) / 100)}
              </TableCell>
            </TableFooter>
          </Table>
        </div>
      ) : (
        <OrderDetailsSkeleton />
      )}
    </DialogContent>
  );
}

export { OrderDetails };
