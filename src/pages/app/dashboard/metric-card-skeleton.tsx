import { Skeleton } from "@/components/ui";

export function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="mt-1 h-7 w-36" />
      <Skeleton className="h-h w-52" />
    </>
  );
}
