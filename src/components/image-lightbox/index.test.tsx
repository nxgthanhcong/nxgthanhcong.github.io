import { fireEvent, render, screen } from "@testing-library/react";
import ImageLightbox from ".";

test("shows the image and closes on Escape and backdrop click", () => {
  const onClose = jest.fn();
  render(<ImageLightbox src="/x.svg" alt="FMS preview" onClose={onClose} />);

  const dialog = screen.getByRole("dialog", { name: "FMS preview" });
  expect(screen.getByRole("img", { name: "FMS preview" })).toHaveAttribute("src", "/x.svg");
  expect(screen.getByRole("button", { name: "Close" })).toHaveFocus();

  fireEvent.keyDown(document, { key: "Escape" });
  fireEvent.click(dialog);
  expect(onClose).toHaveBeenCalledTimes(2);

  // clicking the image itself does not close it
  fireEvent.click(screen.getByRole("img", { name: "FMS preview" }));
  expect(onClose).toHaveBeenCalledTimes(2);
});
