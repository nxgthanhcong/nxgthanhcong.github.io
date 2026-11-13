import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { store } from "../stores";
import Resume from "./resume";

test("renders the résumé from the shared data", async () => {
  const router = createMemoryRouter([{ path: "/resume", element: <Resume /> }], {
    initialEntries: ["/resume"],
  });
  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );

  expect(
    await screen.findByRole("heading", { level: 1, name: "Nguyen Thanh Cong" })
  ).toBeInTheDocument();
  expect(screen.getByText("Test resume summary")).toBeInTheDocument();
  expect(screen.getByText("Test highlight one")).toBeInTheDocument();
  expect(screen.getByText("C#, .NET")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "test@example.com" })).toHaveAttribute(
    "href",
    "mailto:test@example.com"
  );
  expect(screen.getByRole("button", { name: /Print \/ Save as PDF/ })).toBeInTheDocument();
});
