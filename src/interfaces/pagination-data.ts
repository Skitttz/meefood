export interface IPagination {
  pageIndex: number;
  totalCount: number;
  perPage: number;
  onPageChange: (pageIndex: number) => Promise<void> | void;
}

export interface IPaginationActions {
  currentPage: number;
  totalPages: number;  
  action: "next" | "previous" | "first" | "last";
}
