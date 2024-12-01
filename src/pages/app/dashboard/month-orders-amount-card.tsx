import { getMonthOrdersAmount } from "@/api/get-month-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";
import { MetricCardSkeleton } from "./metric-card-skeleton";

function MonthOrdersAmountCard() {
  const { data: monthOrdersAmount, isLoading } = useQuery({
    queryFn: getMonthOrdersAmount,
    queryKey: ["metrics", "months-orders-amount"],
  });

  const amount = monthOrdersAmount?.amount;
  const diffFromLastMonth = monthOrdersAmount?.diffFromLastMonth;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Orders (month)
        </CardTitle>
        <Utensils className="h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        {isLoading ? (
          <MetricCardSkeleton />
        ) : amount !== undefined && diffFromLastMonth !== undefined ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {amount.toLocaleString("en-US")}
            </span>
            <p className="text-muted-foreground text-xs">
              {diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{diffFromLastMonth}%
                  </span>{" "}
                  in relation to last month
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {diffFromLastMonth}%
                  </span>{" "}
                  in relation to last month
                </>
              )}
            </p>
          </>
        ) : (
          <p className="text-muted-foreground text-sm">
            Data not available for this month.
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export { MonthOrdersAmountCard };
