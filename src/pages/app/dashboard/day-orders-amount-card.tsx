import { getDayOrdersAmount } from "@/api/get-days-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";
import { MetricCardSkeleton } from "./metric-card-skeleton";

function DayOrdersAmountCard() {
  const { data: dayOrdersAmount, isLoading } = useQuery({
    queryFn: getDayOrdersAmount,
    queryKey: ["metrics", "days-orders-amount"],
  });

  const amount = dayOrdersAmount?.amount;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Orders (day)</CardTitle>
        <Utensils className="h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        {isLoading ? (
          <MetricCardSkeleton />
        ) : amount !== undefined ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {amount.toLocaleString("en-US")}
            </span>
            <p className="text-muted-foreground text-xs">
              {amount >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{amount}%
                  </span>{" "}
                  in relation to last month
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {amount}%
                  </span>{" "}
                  in relation to last month
                </>
              )}
            </p>
          </>
        ) : (
          <p className="text-muted-foreground text-sm">
            Data not available for this day.
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export { DayOrdersAmountCard };
