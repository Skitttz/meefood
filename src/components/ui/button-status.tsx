import { useOrderActions } from "@/hooks/useOrderActions";
import { Button } from "./button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ReactElement } from "react";

interface IButtonStatusProps {
  status: "pending" | "processing" | "delivering" | string;
  orderId: string;
}

export const ButtonStatus = ({ status, orderId }: IButtonStatusProps) => {
  const {
    approveOrderFn,
    isApprovingOrder,
    deliverOrderFn,
    isDeliveringOrder,
    dispatchOrderFn,
    isDispatchingOrder,
  } = useOrderActions();
  const statusButtons: Record<
    IButtonStatusProps["status"],
    ReactElement | null
  > = {
    pending: (
      <Button
        onClick={() => approveOrderFn({ orderId })}
        disabled={isApprovingOrder}
        variant={"outline"}
        size={"xs"}
      >
        <ArrowRight className="h-3 w-3" />
        {"Approve"}
      </Button>
    ),
    processing: (
      <Button
        onClick={() => dispatchOrderFn({ orderId })}
        disabled={isDispatchingOrder}
        variant={"outline"}
        size={"xs"}
      >
        <ArrowRight className="h-3 w-3" />
        {"Deliver"}
      </Button>
    ),
    delivering: (
      <Button
        onClick={() => deliverOrderFn({ orderId })}
        disabled={isDeliveringOrder}
        variant={"outline"}
        size={"xs"}
      >
        <CheckCircle className="h-3 w-3" />
        {"Delivered"}
      </Button>
    ),
  };
  if (status in statusButtons) {
    return statusButtons[status as IButtonStatusProps["status"]];
  }
  return null;
};
