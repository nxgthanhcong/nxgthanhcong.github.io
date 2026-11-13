import { render, screen } from "@testing-library/react";
import { SectionError, SectionSkeleton } from ".";

test("skeleton is announced as loading", () => {
  render(<SectionSkeleton lines={2} />);
  expect(screen.getByRole("status", { name: "Loading" })).toBeInTheDocument();
});

test("error message is announced", () => {
  render(<SectionError />);
  expect(screen.getByRole("alert")).toHaveTextContent("Couldn’t load this section");
});
