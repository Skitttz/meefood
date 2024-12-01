import { IGetOrdersResponse, IOrderStatus } from "@/interfaces/orders-data";
import { QueryClient, useQueryClient } from "@tanstack/react-query";

interface OrderCacheOperations {
  updateOrderStatus: (orderId: string, status: IOrderStatus) => void;
}

const ORDERS_CACHE_KEY = ['orders'] as const;

export function createOrderCache(queryClient: QueryClient): OrderCacheOperations {
  return {
    updateOrderStatus(orderId: string, status: IOrderStatus) {
      const ordersListCache = queryClient.getQueriesData<IGetOrdersResponse>({
        queryKey: ORDERS_CACHE_KEY,
      });

      ordersListCache.forEach(([cacheKey, cacheData]) => {
        if (!cacheData) return;

        queryClient.setQueryData<IGetOrdersResponse>(cacheKey, {
          ...cacheData,
          orders: cacheData.orders.map((order) => 
            order.orderId === orderId ? { ...order, status } : order
          ),
        });
      });
    },
  };
}

export function useOrderCache() {
  const queryClient = useQueryClient();
  
  return {
    updateOrderStatusOnCache: (orderId: string, status: IOrderStatus) => {
      const cache = createOrderCache(queryClient);
      cache.updateOrderStatus(orderId, status);
    },
  };
}