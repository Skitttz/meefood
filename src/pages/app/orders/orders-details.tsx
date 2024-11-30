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

function OrderDetails({ orderId, isOpen }: IOrderDetails) {
  const { data: order } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrderDetails({ orderId }),
    enabled: isOpen,
  });
  const hasOrder = !order;
  if (hasOrder) return null;
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Order: {order.id}</DialogTitle>
        <DialogDescription>Order Details</DialogDescription>
      </DialogHeader>
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
              <TableCell className="text-muted-foreground">Customer</TableCell>
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
              <TableHead className="text-right">Qtd</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {order.orderItems.map((orderItems) => {
              const totalValueOrderItem =
                Number(orderItems.priceInCents) * Number(orderItems.quantity);
              return (
                <TableRow key={orderItems.id}>
                  <TableCell>{orderItems.product.name}</TableCell>
                  <TableCell className="text-right">
                    {orderItems.quantity}
                  </TableCell>
                  <TableCell className="text-right">
                    {formatterValueCurrency(Number(orderItems.priceInCents))}
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
              {formatterValueCurrency(Number(order?.totalInCents))}
            </TableCell>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
}

export { OrderDetails };
