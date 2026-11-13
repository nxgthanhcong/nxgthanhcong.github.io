// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// --- IntersectionObserver (not implemented by jsdom) -----------------------
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
window.IntersectionObserver = MockIntersectionObserver;

// --- Minimal Fetch API (jsdom 16 has no fetch/Request/Response/Headers) ----
// RTK Query's fetchBaseQuery builds a `new Request(...)`, reads
// `response.status`, calls `response.clone()` and `response.text()`.
if (typeof window.Headers === "undefined") {
  window.Headers = class Headers {
    constructor(init) {
      this._map = new Map();
      if (init) {
        const entries =
          typeof init.entries === "function" && !Array.isArray(init)
            ? Array.from(init.entries())
            : Array.isArray(init)
            ? init
            : Object.entries(init);
        entries.forEach(([k, v]) => this.set(k, v));
      }
    }
    get(name) {
      const v = this._map.get(String(name).toLowerCase());
      return v === undefined ? null : v;
    }
    set(name, value) {
      this._map.set(String(name).toLowerCase(), String(value));
    }
    has(name) {
      return this._map.has(String(name).toLowerCase());
    }
    delete(name) {
      this._map.delete(String(name).toLowerCase());
    }
    entries() {
      return this._map.entries();
    }
    forEach(cb) {
      this._map.forEach((v, k) => cb(v, k, this));
    }
  };
}

if (typeof window.Request === "undefined") {
  window.Request = class Request {
    constructor(url, init = {}) {
      this.url = String(url);
      this.method = init.method || "GET";
      this.headers = new window.Headers(init.headers);
      this.signal = init.signal;
    }
  };
}

if (typeof window.Response === "undefined") {
  window.Response = class Response {
    constructor(body = "", init = {}) {
      this._body = body;
      this.status = init.status === undefined ? 200 : init.status;
      this.ok = this.status >= 200 && this.status <= 299;
      this.headers = new window.Headers(init.headers);
    }
    clone() {
      return new window.Response(this._body, {
        status: this.status,
        headers: Array.from(this.headers.entries()),
      });
    }
    text() {
      return Promise.resolve(this._body);
    }
    json() {
      return Promise.resolve(JSON.parse(this._body));
    }
  };
}

// --- Fixtures served by the mocked fetch (keyed by file name) -------------
// Shapes mirror the JSON in public/data/.
export const fixtures = {
  "get-current-job-infomation.json": {
    role: "Software Engineer",
    company: "Test Co",
    description: "Test job <span class=\"text-slate-200\">highlighted</span> description",
  },
  "get-about-infomation.json": {
    content: "<p>About me test content</p>",
  },
  "get-experiences.json": [
    {
      startDate: "Nov 2023",
      endDate: "Present",
      position: "Software Engineer",
      company: "Test Experience Co",
      href: "https://example.com/",
      description: "Test experience description",
      tags: [{ title: "TypeScript" }],
    },
  ],
  "get-education.json": [
    {
      kind: "College",
      title: "Test College",
      href: "https://college.example/",
      description: "Test <span>education</span> description",
    },
  ],
  "get-projects.json": [
    {
      year: 2022,
      imgUrl: "./assets/images/v4.webp",
      title: "Test Project",
      madeAt: "Test Co",
      href: "/",
      description: "Test project description",
      links: [{ title: "Repo", icon: "<svg></svg>" }],
      tags: [{ title: "React" }],
    },
    {
      year: 2026,
      title: "Internal Project",
      madeAt: "Test Co",
      description: "No image, no link",
    },
  ],
  "get-blogs.json": [
    {
      href: "/",
      imgUrl: "./assets/images/spotify.webp",
      createDate: "Jan 2023",
      title: "Test Blog Post",
    },
  ],
};

beforeEach(() => {
  window.fetch = jest.fn((input) => {
    const url = typeof input === "string" ? input : input.url;
    const file = Object.keys(fixtures).find((name) => url.includes(name));
    if (!file) {
      return Promise.resolve(
        new window.Response("Not found", { status: 404 })
      );
    }
    return Promise.resolve(
      new window.Response(JSON.stringify(fixtures[file]), {
        status: 200,
        headers: { "content-type": "application/json" },
      })
    );
  });
});
