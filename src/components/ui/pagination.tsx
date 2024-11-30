import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "./button";
import { IPagination } from "@/interfaces/pagination-data";
import { actionPagination } from "@/utils/pagination";

function Pagination({
  pageIndex,
  perPage,
  totalCount,
  onPageChange,
}: IPagination) {
  const pages = Math.ceil(totalCount / perPage || 1);
  const { isFirstPage, isLastPage } = {
    isFirstPage: pageIndex === 0,
    isLastPage: pageIndex === pages - 1,
  };
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total {totalCount} item(s)
      </span>
      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Page {pageIndex + 1} in {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button
            disabled={isFirstPage}
            onClick={() =>
              onPageChange(
                actionPagination({
                  currentPage: pageIndex,
                  totalPages: pages,
                  action: "first",
                }),
              )
            }
            variant={"outline"}
            className="h-8 w-8 p-0"
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">First Page</span>
          </Button>
          <Button
            variant={"outline"}
            disabled={isFirstPage}
            onClick={() =>
              onPageChange(
                actionPagination({
                  currentPage: pageIndex,
                  totalPages: pages,
                  action: "previous",
                }),
              )
            }
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous Page</span>
          </Button>
          <Button
            variant={"outline"}
            disabled={isLastPage}
            onClick={() =>
              onPageChange(
                actionPagination({
                  currentPage: pageIndex,
                  totalPages: pages,
                  action: "next",
                }),
              )
            }
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next Page</span>
          </Button>
          <Button
            variant={"outline"}
            className="h-8 w-8 p-0"
            disabled={isLastPage}
            onClick={() =>
              onPageChange(
                actionPagination({
                  currentPage: pageIndex,
                  totalPages: pages,
                  action: "last",
                }),
              )
            }
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Last Page</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export { Pagination };
