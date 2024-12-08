import { queryClient } from "@/lib/react-query";
import { Orders } from "@/pages/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter, useLocation } from "react-router-dom";
import { enablePointerEvents } from "../utils/enable-pointers";

const setupMocks = () => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn();
  window.HTMLElement.prototype.hasPointerCapture = vi.fn();
  window.HTMLElement.prototype.releasePointerCapture = vi.fn();
};

const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location-display">{location.search}</div>;
};

const renderComponent = (route: string) => {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[route]}>
        <QueryClientProvider client={queryClient}>
          <Orders />
          <LocationDisplay />
        </QueryClientProvider>
      </MemoryRouter>
    </HelmetProvider>,
  );
};

describe("OrderTableFilter", () => {
  const VALUE_PARAMS = {
    orderId: "12345",
    customerName: "Skittz",
    status: "pending",
    pageNumber: "1",
  } as const;
  const { orderId, customerName, status, pageNumber } = VALUE_PARAMS;

  const BASE_ROUTE = "/orders";
  const ROUTES = {
    BASE: BASE_ROUTE,
    WITH_FILTERS: `${BASE_ROUTE}?orderId=${orderId}&customerName=${customerName}&status=${status}&page=${pageNumber}`,
  };

  beforeEach(() => {
    setupMocks();
  });

  it("should update URL search params when filters are applied", async () => {
    renderComponent(ROUTES.BASE);

    const searchOrderIdInput = screen.getByPlaceholderText(
      "ID orders",
    ) as HTMLInputElement;
    const searchCustomerNameInput = screen.getByPlaceholderText(
      "Customer name",
    ) as HTMLInputElement;
    const searchButton = screen.getByRole("button", { name: "Search" });
    const statusDropdown = screen.getByTestId("select-element");

    enablePointerEvents([
      searchOrderIdInput,
      searchCustomerNameInput,
      searchButton,
      statusDropdown,
    ]);

    await userEvent.type(searchOrderIdInput, orderId);
    await userEvent.type(searchCustomerNameInput, customerName);
    await userEvent.click(statusDropdown);
    const pendingOption = await screen.findByRole("option", {
      name: "Pending",
    });
    enablePointerEvents(pendingOption);

    await userEvent.click(pendingOption);
    await userEvent.click(searchButton);

    expect(searchOrderIdInput.value).toBe(orderId);
    expect(searchCustomerNameInput.value).toBe(customerName);

    await waitFor(() => {
      const locationDisplay = screen.getByTestId("location-display");
      expect(locationDisplay.textContent).toContain(`orderId=${orderId}`);
      expect(locationDisplay.textContent).toContain(
        `customerName=${customerName}`,
      );
      expect(locationDisplay.textContent).toContain(`status=${status}`);
    });
  });

  it("should clear all URL search params when clicked 'clear filter' button", async () => {
    renderComponent(ROUTES.WITH_FILTERS);
    const clearButton = screen.getByRole("button", { name: "Remove Filters" });

    enablePointerEvents(clearButton);

    await userEvent.click(clearButton);

    await waitFor(() => {
      const locationDisplay = screen.getByTestId("location-display");
      expect(locationDisplay.textContent).toContain(`?page=1`);
    });
  });
});
