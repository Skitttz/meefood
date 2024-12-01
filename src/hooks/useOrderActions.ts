import { useMutation } from '@tanstack/react-query';
import { cancelOrder } from '@/api/cancel-order';
import { approveOrder } from '@/api/approve-order';
import { deliverOrder } from '@/api/deliver-order';
import { dispatchOrder } from '@/api/dispatch-order';
import { useOrderCache } from '@hooks/cache/useOrderCache';

export function useOrderActions() {
  const { updateOrderStatusOnCache } = useOrderCache();

  const { mutateAsync: cancelOrderFn, isPending: isCancelingOrder } = useMutation({
    mutationFn: cancelOrder,
    async onSuccess(_, { orderId }) {
      updateOrderStatusOnCache(orderId, "canceled");
    },
  });

  const { mutateAsync: approveOrderFn, isPending: isApprovingOrder } = useMutation({
    mutationFn: approveOrder,
    async onSuccess(_, { orderId }) {
      updateOrderStatusOnCache(orderId, "processing");
    },
  });

  const { mutateAsync: dispatchOrderFn, isPending: isDispatchingOrder } = useMutation({
    mutationFn: dispatchOrder,
    async onSuccess(_, { orderId }) {
      updateOrderStatusOnCache(orderId, "delivering");
    },
  });

  const { mutateAsync: deliverOrderFn, isPending: isDeliveringOrder } = useMutation({
    mutationFn: deliverOrder,
    async onSuccess(_, { orderId }) {
      updateOrderStatusOnCache(orderId, "delivered");
    },
  });

  return {
    cancelOrderFn,
    approveOrderFn,
    deliverOrderFn,
    dispatchOrderFn,
    isCancelingOrder,
    isApprovingOrder,
    isDispatchingOrder,
    isDeliveringOrder
  };
}