import { IGetOrdersResponse, IOrderStatus } from "@/interfaces/orders-data";
import { ApiRoutesEnum } from "@/routes/routes";
import { HttpResponse, http } from "msw";

type Orders = IGetOrdersResponse['orders'][number];

const randomStatus: IOrderStatus[] = [
 "canceled",
 'pending',
 'processing',
 'delivering',
 'delivered',
]

const orders:Orders[] = Array.from({length: 100}).map((_, i) => {
  return {
    orderId: `order-${i + 1}`,
    customerName: `Customer ${i + 1}`,
    createdAt: new Date(),
    total: 2400,
    status: randomStatus[i % 5]
  }
})

export const getOrdersMock = http.get<never,never, IGetOrdersResponse>(ApiRoutesEnum.ORDERS, async ({request}) => {
  const {searchParams} = new URL(request.url);
  let filteredOrdersData = orders;
  const filters = {
    orderId: searchParams.get("orderId") ?? null,
    customerName: searchParams.get("customerName") ?? null,
    status: searchParams.get("status") ?? null,
  };
  const pageIndex = searchParams.get('pageIndex') ? Number(searchParams.get('pageIndex')) : 0;
  const hasFilter = filters.orderId || filters.customerName || filters.status;

  if (hasFilter) {
    filteredOrdersData = filteredOrdersData.filter((order: Orders) => {
      return (
        (!filters.orderId || order.orderId.includes(filters.orderId)) &&
        (!filters.customerName || order.customerName.toLowerCase().includes(filters.customerName.toLowerCase())) &&
        (!filters.status || order.status === filters.status)
      );
    });
  }

  const paginatedOrders = filteredOrdersData.slice(
    pageIndex * 10, (pageIndex + 1) * 10
  )

  return HttpResponse.json({
    orders: paginatedOrders,
    meta:{
      pageIndex,
      perPage: 10,
      totalCount: filteredOrdersData.length,
    }
  })
})