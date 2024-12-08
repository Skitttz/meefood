import { queryClient } from "@/lib/react-query";
import { SignIn } from "@/pages/auth";
import { QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";

describe("SignIn", () => {
  const route = { signOut: "/sign-out", signIn: "/sign-in" };

  it("should set default email input value if present on search params", async () => {
    render(
      <>
        <SignIn />
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <HelmetProvider>
              <MemoryRouter
                initialEntries={[`${route.signIn}?email=skittz@example.com`]}
              >
                <QueryClientProvider client={queryClient}>
                  {children}
                </QueryClientProvider>
              </MemoryRouter>
            </HelmetProvider>
          );
        },
      },
    );
    const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
    expect(emailInput.value).toEqual("skittz@example.com");
  });
});
