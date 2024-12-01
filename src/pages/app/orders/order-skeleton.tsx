import {
  Button,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { Search } from "lucide-react";

function OrderTableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Button variant="outline" size="xs" disabled>
            <Search className="h-3 w-3" />
            <span className="sr-only">Details order</span>
          </Button>
        </TableCell>

        <TableCell className="font-mono text-xs font-medium">
          <Skeleton className="h-4 w-[64]" />
        </TableCell>

        <TableCell className="text-muted-foreground">
          <Skeleton className="h-4 w-[140]" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-[180px]" />
        </TableCell>

        <TableCell className="font-medium">
          <Skeleton className="h-4 w-[200px]" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-[80px]" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-[92px]" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-[92px]" />
        </TableCell>
      </TableRow>
    );
  });
}

function OrderDetailsSkeleton() {
  return (
    <div className="space-y-6">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="text-muted-foreground">Status</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="ml-auto h-5 w-20" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Customer</TableCell>
            <TableCell className="text-right">
              <Skeleton className="ml-auto h-5 w-[164px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Phone</TableCell>
            <TableCell className="text-right">
              <Skeleton className="ml-auto h-5 w-[140px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">E-mail</TableCell>
            <TableCell className="text-right">
              <Skeleton className="ml-auto h-5 w-[200px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Done at</TableCell>
            <TableCell className="text-right">
              <Skeleton className="ml-auto h-5 w-[148px]" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead className="text-right">Qty.</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 2 }).map((_, i) => {
            return (
              <TableRow key={i}>
                <TableCell>
                  <Skeleton className="h-5 w-[140px]" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="ml-auto h-5 w-3" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="ml-auto h-5 w-12" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="ml-auto h-5 w-12" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Order Total</TableCell>
            <TableCell className="text-right font-medium">
              <Skeleton className="ml-auto h-5 w-20" />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export { OrderTableSkeleton, OrderDetailsSkeleton };
