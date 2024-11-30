import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  OrderFiltersSchema,
  orderFiltersSchema,
} from "@/validations/orderFilterValidations";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

function OrderTableFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = {
    orderId: searchParams.get("orderId") ?? null,
    customerName: searchParams.get("customerName") ?? null,
    status: searchParams.get("status") ?? "all",
  };
  const { register, handleSubmit, control, reset } =
    useForm<OrderFiltersSchema>({
      resolver: zodResolver(orderFiltersSchema),
      defaultValues: {
        customerName: filters.customerName ?? "",
        orderId: filters.orderId ?? "",
        status: filters.status,
      },
    });
  function handleFilter({ orderId, customerName, status }: OrderFiltersSchema) {
    setSearchParams((prevURLState) => {
      const filters = { orderId, customerName, status };

      Object.entries(filters).forEach(([key, value]) => {
        value ? prevURLState.set(key, value) : prevURLState.delete(key);
      });

      prevURLState.set("page", "1");

      return prevURLState;
    });
  }

  function handleClearFilters() {
    setSearchParams((prevURLState) => {
      const filters = ["orderId", "customerName", "status"];
      filters.forEach((key) => prevURLState.delete(key));
      prevURLState.set("page", "1");
      return prevURLState;
    });

    reset({
      orderId: "",
      customerName: "",
      status: "all",
    });
  }
  return (
    <form
      className="flex items-center gap-2"
      onSubmit={handleSubmit(handleFilter)}
    >
      <span className="text-sm font-semibold">Filters:</span>
      <Input
        placeholder="ID orders"
        {...register("orderId")}
        className="h-8 w-auto"
      />
      <Input
        placeholder="Customer name"
        {...register("customerName")}
        className="h-8 w-[320px]"
      />
      <Controller
        name="status"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Select
              defaultValue="all"
              name={name}
              onValueChange={onChange}
              value={value}
              disabled={disabled}
            >
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="canceled">Canceled</SelectItem>
                <SelectItem value="processing">In processing</SelectItem>
                <SelectItem value="delivering">In delivering</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
              </SelectContent>
            </Select>
          );
        }}
      ></Controller>

      <Button type="submit" variant={"default"} size={"xs"}>
        <Search className="h-4 w-4" /> Search
      </Button>
      <Button
        type="button"
        onClick={handleClearFilters}
        variant={"outline"}
        className="hover:bg-gray-800"
        size={"xs"}
      >
        <X className="h-4 w-4" /> Remove Filters
      </Button>
    </form>
  );
}

export { OrderTableFilter };
