import { sortByYearDesc } from "./sort";

test("sorts newest year first and keeps JSON order within a year", () => {
  const items = [
    { year: 2025, title: "a" },
    { year: 2026, title: "b" },
    { year: 2025, title: "c" },
    { year: 2021, title: "d" },
  ];
  expect(sortByYearDesc(items).map((i) => i.title)).toEqual(["b", "a", "c", "d"]);
  expect(items[0].title).toBe("a"); // input is not mutated
});
