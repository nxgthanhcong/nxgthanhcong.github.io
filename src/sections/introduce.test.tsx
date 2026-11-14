import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../stores";
import Introduce from "./introduce";

test("clicking the avatar opens the full photo", () => {
  render(
    <Provider store={store}>
      <Introduce />
    </Provider>
  );

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "View full photo" }));

  const full = screen.getByRole("img", { name: "Nguyen Thanh Cong, full photo" });
  expect(full.getAttribute("src")).toMatch(/profile-full\.webp$/);

  fireEvent.click(screen.getByRole("button", { name: "Close" }));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});
