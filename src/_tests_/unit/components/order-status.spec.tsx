import { render } from "@testing-library/react";
import { OrderStatus } from "@/components/ui/order-status";

describe("OrderStatus", () => {
  test("should display the correct label based on status pending", () => {
    const wrapper = render(<OrderStatus statusOrder="pending" />);

    const statusText = wrapper.getByText("In pending");
    const badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-slate-400");
  });

  test("should display the correct label based on status canceled", () => {
    const wrapper = render(<OrderStatus statusOrder="canceled" />);

    const statusText = wrapper.getByText("Canceled");
    const badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-rose-500");
  });

  test("should display the correct label based on status delivering", () => {
    const wrapper = render(<OrderStatus statusOrder="delivering" />);

    const statusText = wrapper.getByText("In delivering");
    const badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
  });

  test("should display the correct label based on status processing", () => {
    const wrapper = render(<OrderStatus statusOrder="processing" />);

    const statusText = wrapper.getByText("In processing");
    const badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
  });

  test("should display the correct label based on status delivered", () => {
    const wrapper = render(<OrderStatus statusOrder="delivered" />);

    const statusText = wrapper.getByText("Delivered");
    const badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-emerald-500");
  });
});
