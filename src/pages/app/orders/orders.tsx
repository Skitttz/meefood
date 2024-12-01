import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Helmet } from "react-helmet-async";
import { OrdersTableRow } from "./order-table-row";
import { OrderTableFilter } from "./order-table-filter";
import { Pagination } from "@/components/ui/pagination";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/api/get-orders";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { OrderTableSkeleton } from "./order-skeleton";

function Orders() {
  const [searchParams, setSearchParams] = useSearchParams();
  const orderId = searchParams.get("orderId") ?? null;
  const customerName = searchParams.get("customerName") ?? null;
  const status = searchParams.get("status") ?? "all";
  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get("page") ?? "1");
  const { data: result, isLoading: isLoadingOrders } = useQuery({
    queryKey: ["orders", pageIndex, orderId, customerName, status],
    queryFn: () =>
      getOrders({
        pageIndex,
        orderId,
        customerName,
        status: status === "all" ? null : status,
      }),
  });
  function handlePaginate(pageIndex: number) {
    setSearchParams((prevURLState) => {
      prevURLState.set("page", (pageIndex + 1).toString());
      return prevURLState;
    });
  }

  return (
    <>
      <Helmet title="Orders" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter">Orders</h1>

        <div className="space-y-2.5">
          <OrderTableFilter />
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identifier</TableHead>
                  <TableHead className="w-[180px]">Done At</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead className="w-[140px]">Order Total</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoadingOrders && <OrderTableSkeleton />}
                {result &&
                  result.orders.map((order) => {
                    return <OrdersTableRow key={order.orderId} order={order} />;
                  })}
              </TableBody>
            </Table>
          </div>
          {result && (
            <Pagination
              onPageChange={handlePaginate}
              pageIndex={pageIndex}
              totalCount={result.meta.totalCount}
              perPage={result.meta.perPage}
            />
          )}
        </div>
      </div>
    </>
  );
}

export { Orders };
