import { Loader2 } from "lucide-react";

function PopularProductSkeleton() {
  return (
    <div className="flex h-[240px] w-full items-center justify-center">
      <Loader2 className="text-muted h-8 w-8 animate-spin" />
    </div>
  );
}

function RevenueSkeleton() {
  return (
    <div className="flex h-[240px] w-full items-center justify-center">
      <Loader2 className="text-muted h-8 w-8 animate-spin" />
    </div>
  );
}

export { PopularProductSkeleton, RevenueSkeleton };
