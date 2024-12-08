import { Pagination } from "@/components/ui";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { enablePointerEvents } from "../utils/enable-pointers";

const onPageChangeCallback = vi.fn();
describe("Pagination", () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear();
  });
  it("should display the right amount of page and results", () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />,
    );
    expect(wrapper.getByText("Page 1 in 20")).toBeInTheDocument();
    expect(wrapper.getByText("Total 200 item(s)")).toBeInTheDocument();
  });

  it("should able be to handle next page", async () => {
    render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const nextPageButton = screen.getByRole("button", {
      name: "Next Page",
    });

    enablePointerEvents(nextPageButton);
    await userEvent.click(nextPageButton);
    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
  });

  it("should able be to handle previous page", async () => {
    render(
      <Pagination
        pageIndex={1}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const previousPageButton = screen.getByRole("button", {
      name: "Previous Page",
    });

    enablePointerEvents(previousPageButton);
    await userEvent.click(previousPageButton);
    expect(onPageChangeCallback).toHaveBeenCalledWith(0);
  });

  it("should able be to handle first page", async () => {
    render(
      <Pagination
        pageIndex={15}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const firstPageButton = screen.getByRole("button", {
      name: "First Page",
    });

    enablePointerEvents(firstPageButton);
    await userEvent.click(firstPageButton);
    expect(onPageChangeCallback).toHaveBeenCalledWith(0);
  });

  it("should able be to handle last page", async () => {
    render(
      <Pagination
        pageIndex={3}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const lastPageButton = screen.getByRole("button", {
      name: "Last Page",
    });

    enablePointerEvents(lastPageButton);
    await userEvent.click(lastPageButton);
    expect(onPageChangeCallback).toHaveBeenCalledWith(19);
  });
});
