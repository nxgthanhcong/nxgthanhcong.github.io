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

  expect(await screen.findByText("Ng Thanh Cong")).toBeInTheDocument();
  // The job description is HTML: highlights render as elements, not raw tags.
  expect((await screen.findByText("highlighted")).tagName).toBe("SPAN");
  expect(await screen.findByText("About me test content")).toBeInTheDocument();
  expect(
    await screen.findByRole("link", { name: /Software Engineer - Test Experience Co/ })
  ).toHaveAttribute("href", "https://example.com/");
  expect(await screen.findByText("Test Project")).toBeInTheDocument();
  // A project without imgUrl renders no <img> (no broken image icon).
  expect(await screen.findByText("Internal Project")).toBeInTheDocument();
  expect(screen.getByAltText("Test Project screenshot")).toBeInTheDocument();
  expect(screen.queryByAltText("Internal Project screenshot")).toBeNull();
  expect(await screen.findByText("Test Blog Post")).toBeInTheDocument();
  expect(window.fetch).toHaveBeenCalled();
});
