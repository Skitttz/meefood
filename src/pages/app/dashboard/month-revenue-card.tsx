import { getMonthRevenue } from "@/api/get-month-revenue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatterValueCurrency } from "@/utils/formatter";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";
import { MetricCardSkeleton } from "./metric-card-skeleton";

function Skeleton() {
  return <div className="h-6 w-full animate-pulse rounded bg-gray-300"></div>;
}

function MonthRevenueCard() {
  const { data: monthRevenue, isLoading } = useQuery({
    queryFn: getMonthRevenue,
    queryKey: ["metrics", "month-revenue"],
  });

  const receipt = monthRevenue?.receipt;
  const diffFromLastMonth = monthRevenue?.diffFromLastMonth;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Total (month)</CardTitle>
        <DollarSign className="h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        {isLoading ? (
          <MetricCardSkeleton />
        ) : receipt !== undefined && diffFromLastMonth !== undefined ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {formatterValueCurrency(receipt / 100)}
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

export { MonthRevenueCard };
