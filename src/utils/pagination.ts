import { IPaginationActions } from "@/interfaces/pagination-data";

export function actionPagination({
  currentPage,
  totalPages,
  action,
}: IPaginationActions): number {
  const actions: Record<IPaginationActions["action"], () => number> = {
    next: () => Math.min(currentPage + 1, totalPages),
    previous: () => Math.max(currentPage - 1, 0),
    first: () => 0,
    last: () => totalPages - 1,
  };

  return actions[action]();
}

