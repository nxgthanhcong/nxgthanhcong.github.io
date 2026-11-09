import { getExternalHostname, isExternalUrl } from "./url";

test.each([
  ["https://www.example.com/path", "example.com"],
  ["http://github.com/nxgthanhcong", "github.com"],
  ["/", null],
  ["", null],
  [undefined, null],
  ["not a url", null],
])("getExternalHostname(%p) -> %p", (href, expected) => {
  expect(getExternalHostname(href)).toBe(expected);
});

test("isExternalUrl", () => {
  expect(isExternalUrl("https://example.com")).toBe(true);
  expect(isExternalUrl("/")).toBe(false);
});
