import { BLOG, WORK } from "./content";
import { SITE_URL } from "./site";

export default function sitemap() {
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/about-us",
    "/case-studies",
    "/blog",
    "/book-a-call",
  ].map((path) => ({
    url: `${SITE_URL}${path || "/"}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const caseRoutes = WORK.cases.map((item) => ({
    url: `${SITE_URL}/case-studies/${item.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes = BLOG.posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseRoutes, ...blogRoutes];
}
