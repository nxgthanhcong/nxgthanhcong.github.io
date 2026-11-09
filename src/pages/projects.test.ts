import { getExternalHostname } from "./projects";

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
