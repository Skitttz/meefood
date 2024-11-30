import {
  COLORS_RECHARTS_ITEM,
  mockDatasetProduct,
} from "@/constants/generalConstants";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PieLabel } from "@/components/ui/custom-pie-label";

function PopularProductChart() {
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
        <ResponsiveContainer width="100%" height={248}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={mockDatasetProduct}
              dataKey={"amount"}
              nameKey={"product"}
              cx={"50%"}
              cy={"50%"}
              outerRadius={86}
              labelLine={false}
              innerRadius={64}
              strokeWidth={8}
              label={(props) =>
                PieLabel({ ...props, data: mockDatasetProduct })
              }
            >
              {mockDatasetProduct.map((_, index) => {
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
      </CardContent>
    </Card>
  );
}

export { PopularProductChart };
