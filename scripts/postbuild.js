// Runs after `react-scripts build` (npm "postbuild").
//
// GitHub Pages has no SPA rewrites, so:
// - build/404.html (copy of index.html) catches unknown paths and lets React
//   Router render them (served with status 404);
// - each known route also gets build/<route>/index.html, so it is served with
//   status 200 and its own title/description in link previews.
const fs = require("fs");
const path = require("path");

const BUILD = path.join(__dirname, "..", "build");
const SITE = "https://nxgthanhcong.github.io";
const html = fs.readFileSync(path.join(BUILD, "index.html"), "utf8");

fs.writeFileSync(path.join(BUILD, "404.html"), html);

const routes = [
  {
    route: "resume",
    title: "Resume – Nguyen Thanh Cong",
    description:
      "Resume of Nguyen Thanh Cong, backend-focused software engineer: experience in telecom, finance, and agriculture, skills, and education.",
  },
  {
    route: "projects",
    title: "Projects – Nguyen Thanh Cong",
    description:
      "Projects by Nguyen Thanh Cong: farm management systems for GreenFeed, a telecom contract system for FPT Telecom, and freelance work.",
  },
];

const setMeta = (doc, attr, key, value) => {
  const re = new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`);
  if (!re.test(doc)) throw new Error(`meta ${key} not found in build/index.html`);
  return doc.replace(re, `$1${value}$2`);
};

for (const { route, title, description } of routes) {
  let doc = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  doc = setMeta(doc, "name", "description", description);
  doc = setMeta(doc, "property", "og:title", title);
  doc = setMeta(doc, "property", "og:description", description);
  doc = setMeta(doc, "property", "og:url", `${SITE}/${route}`);
  fs.mkdirSync(path.join(BUILD, route), { recursive: true });
  fs.writeFileSync(path.join(BUILD, route, "index.html"), doc);
}

console.log(`postbuild: 404.html + ${routes.map((r) => r.route + "/index.html").join(", ")}`);
