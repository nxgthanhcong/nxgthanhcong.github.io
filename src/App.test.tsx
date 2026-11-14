import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./stores";

test("renders the home page with data from the github db", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(await screen.findByText("Nguyen Thanh Cong")).toBeInTheDocument();
  // The job description is HTML: highlights render as elements, not raw tags.
  expect((await screen.findByText("highlighted")).tagName).toBe("SPAN");
  expect(await screen.findByText("About me test content")).toBeInTheDocument();
  expect(
    await screen.findByRole("link", { name: /Software Engineer - Test Experience Co/ })
  ).toHaveAttribute("href", "https://example.com/");
  expect(
    await screen.findByRole("link", { name: /Test College/ })
  ).toHaveAttribute("href", "https://college.example/");
  expect(await screen.findByText("Test Project")).toBeInTheDocument();
  // A project without imgUrl renders no <img> (no broken image icon).
  expect(await screen.findByText("Internal Project")).toBeInTheDocument();
  expect(screen.getByAltText("Test Project preview")).toBeInTheDocument();
  expect(screen.queryByAltText("Internal Project preview")).toBeNull();
  expect(
    screen.getByRole("img", { name: /Internal Project: internal system/ })
  ).toBeInTheDocument();
  // No posts yet: Blogs shows a coming-soon note instead of an empty list.
  expect(await screen.findByText("Coming soon")).toBeInTheDocument();
  expect(window.fetch).toHaveBeenCalled();
});
