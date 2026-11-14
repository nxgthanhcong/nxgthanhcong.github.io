import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../stores";
import BlogsSection from "./blogs";

test("lists posts once get-blogs.json has entries", async () => {
  const posts = [
    { href: "https://example.com/post", imgUrl: "", createDate: "Dec 2026", title: "First Post" },
  ];
  window.fetch = jest.fn(() =>
    Promise.resolve(
      new window.Response(JSON.stringify(posts), {
        status: 200,
        headers: { "content-type": "application/json" },
      })
    )
  ) as jest.Mock;

  render(
    <Provider store={store}>
      <BlogsSection />
    </Provider>
  );

  expect(await screen.findByText("First Post")).toBeInTheDocument();
  expect(screen.queryByText("Coming soon")).not.toBeInTheDocument();
});
