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
  expect(await screen.findByText("About me test content")).toBeInTheDocument();
  expect(await screen.findByText("Test Project")).toBeInTheDocument();
  expect(await screen.findByText("Test Blog Post")).toBeInTheDocument();
  expect(window.fetch).toHaveBeenCalled();
});
