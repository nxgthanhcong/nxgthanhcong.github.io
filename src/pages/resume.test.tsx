import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { store } from "../stores";
import Resume from "./resume";

test("renders the resume from the shared data", async () => {
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
  // HR scan order: summary, skills, jobs, freelance, education
  expect(screen.getAllByRole("heading", { level: 2 }).map((h) => h.textContent)).toEqual([
    "Summary",
    "Skills",
    "Experience",
    "Freelance",
    "Education & certificates",
  ]);
  expect(screen.getByText("Test freelance highlight")).toBeInTheDocument();
  expect(screen.getByText("Test highlight one")).toBeInTheDocument();
  expect(screen.getByText("C#, .NET")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "test@example.com" })).toHaveAttribute(
    "href",
    "mailto:test@example.com"
  );
  expect(screen.getByRole("button", { name: /Print \/ Save as PDF/ })).toBeInTheDocument();
});

test("?print=1 opens the print dialog once the resume has loaded", async () => {
  jest.useFakeTimers();
  const print = jest.spyOn(window, "print").mockImplementation(() => {});
  const router = createMemoryRouter([{ path: "/resume", element: <Resume /> }], {
    initialEntries: ["/resume?print=1"],
  });
  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );

  await screen.findByRole("heading", { level: 1, name: "Nguyen Thanh Cong" });
  jest.advanceTimersByTime(500);
  expect(print).toHaveBeenCalledTimes(1);
  // The flag is dropped so a reload doesn't print again.
  expect(router.state.location.search).toBe("");

  print.mockRestore();
  jest.useRealTimers();
});
