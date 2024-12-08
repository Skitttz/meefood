import { NavLink } from "@/components/nav-link";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("NavLink", () => {
  const route = { home: "/", about: "/about" };

  const renderWithRouter = (ui: JSX.Element, initialRoute = route.home) => {
    return render(ui, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={[initialRoute]}>{children}</MemoryRouter>
      ),
    });
  };
  it("should highlight nav link when current page", () => {
    renderWithRouter(
      <>
        <NavLink to={route.home}>Home</NavLink>
        <NavLink to={route.about}>About</NavLink>
      </>,
    );
    expect(screen.getByText("About").dataset.current).toEqual("false");
    expect(screen.getByText("Home").dataset.current).toEqual("true");
  });

  it("should correctly update the current navigation link when the user navigates to a different page", async () => {
    renderWithRouter(
      <>
        <NavLink to={route.home}>Home</NavLink>
        <NavLink to={route.about}>About</NavLink>
      </>,
    );

    const navClicked = screen.getByRole("link", {
      name: "About",
    });
    await userEvent.click(navClicked);

    const aboutLink = screen.getByText("About");
    const homeLink = screen.getByText("Home");
    expect(aboutLink.dataset.current).toEqual("true");
    expect(homeLink.dataset.current).toEqual("false");
  });
});
