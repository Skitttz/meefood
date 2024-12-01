import { COLORS_RECHARTS_ITEM } from "@/constants/generalConstants";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PieLabel } from "@/components/ui/custom-pie-label";
import { useQuery } from "@tanstack/react-query";
import { getPopularProducts } from "@/api/get-popular-products";
import { PopularProductSkeleton } from "./recharts-skeleton";

function PopularProductChart() {
  const { data: popularProducts } = useQuery({
    queryKey: ["metrics", "popular-products"],
    queryFn: getPopularProducts,
  });
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Popular Products
          </CardTitle>
          <CardDescription>Daily revenue in the period</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {popularProducts ? (
          <ResponsiveContainer width="100%" height={248}>
            <PieChart style={{ fontSize: 12 }}>
              <Pie
                data={popularProducts}
                dataKey={"amount"}
                nameKey={"product"}
                cx={"50%"}
                cy={"50%"}
                outerRadius={86}
                labelLine={false}
                innerRadius={64}
                strokeWidth={8}
                label={(props) => PieLabel({ ...props, data: popularProducts })}
              >
                {popularProducts.map((_, index) => {
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS_RECHARTS_ITEM[index]}
                      className="stroke-inherit hover:opacity-80"
                    />
                  );
                })}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <PopularProductSkeleton />
        )}
      </CardContent>
    </Card>
  );
}

export { PopularProductChart };
