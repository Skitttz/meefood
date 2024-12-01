import { getMonthCanceledOrdersAmount } from "@/api/get-month-canceled-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatterValueCurrency } from "@/utils/formatter";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";
import { MetricCardSkeleton } from "./metric-card-skeleton";

function MonthCanceledOrdersAmount() {
  const { data: monthCanceledOrdersAmount, isLoading } = useQuery({
    queryFn: getMonthCanceledOrdersAmount,
    queryKey: ["metrics", "month-canceled-orders-amount"],
  });

  const amount = monthCanceledOrdersAmount?.amount;
  const diffFromLastMonth = monthCanceledOrdersAmount?.diffFromLastMonth;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancellations (month)
        </CardTitle>
        <DollarSign className="h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        {isLoading ? (
          <MetricCardSkeleton />
        ) : amount !== undefined && diffFromLastMonth !== undefined ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {formatterValueCurrency(amount)}
            </span>
            <p className="text-muted-foreground text-xs">
              {diffFromLastMonth < 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {diffFromLastMonth}%
                  </span>{" "}
                  in relation to last month
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    +{diffFromLastMonth}%
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

export { MonthCanceledOrdersAmount };
