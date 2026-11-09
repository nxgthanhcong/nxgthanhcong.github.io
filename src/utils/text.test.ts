import { displayCompany } from "./text";

test.each([
  ["VietCredit", "VietCredit"],
  ["  Fpt Telecom ", "Fpt Telecom"],
  ["None", null],
  ["none", null],
  ["", null],
  [undefined, null],
  [null, null],
])("displayCompany(%p) -> %p", (input, expected) => {
  expect(displayCompany(input)).toBe(expected);
});
