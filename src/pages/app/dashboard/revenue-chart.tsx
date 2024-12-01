import colors from "tailwindcss/colors";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import { getDailyRevenueInPeriod } from "@/api/get-daily-revenue-in-period";
import { Label } from "@/components/ui";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { useMemo, useState } from "react";
import { DateRange } from "react-day-picker";
import { subDays } from "date-fns";
import { RevenueSkeleton } from "./recharts-skeleton";

function RevenueChart() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  });
  const { data: dailyRevenueInPeriod } = useQuery({
    queryKey: ["metrics", "daily-revenue-in-period", dateRange],
    queryFn: () =>
      getDailyRevenueInPeriod({ from: dateRange?.from, to: dateRange?.to }),
  });
  const charDataRevenue = useMemo(() => {
    return dailyRevenueInPeriod?.map((chartItem) => {
      return {
        date: chartItem.date,
        receipt: chartItem.receipt / 100,
      };
    });
  }, [dailyRevenueInPeriod]);
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Revenue in the period
          </CardTitle>
          <CardDescription>Daily revenue in the period</CardDescription>
        </div>
        <div className="flex items-center gap-3">
          <Label>Select Time Period: </Label>
          <DatePickerWithRange date={dateRange} onDateChange={setDateRange} />
        </div>
      </CardHeader>
      <CardContent>
        {dailyRevenueInPeriod ? (
          <ResponsiveContainer width="100%" height={248}>
            <LineChart data={charDataRevenue} style={{ fontSize: 12 }}>
              <XAxis
                dataKey={"date"}
                tickLine={false}
                axisLine={false}
                dy={16}
              />
              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                width={80}
                tickFormatter={(value: number) =>
                  value.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })
                }
              />
              <CartesianGrid vertical={false} className="stroke-muted" />
              <Line
                type="linear"
                strokeWidth={2}
                dataKey={"receipt"}
                stroke={colors.violet["500"]}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <RevenueSkeleton />
        )}
      </CardContent>
    </Card>
  );
}

export { RevenueChart };
