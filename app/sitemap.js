import { BLOG, WORK } from "./content";

const siteUrl = "https://trilolabs.com";

export default function sitemap() {
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/about-us",
    "/case-studies",
    "/blog",
    "/book-a-call",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const caseRoutes = WORK.cases.map((item) => ({
    url: `${siteUrl}/case-studies/${item.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes = BLOG.posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseRoutes, ...blogRoutes];
}
