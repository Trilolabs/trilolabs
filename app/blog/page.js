import PageEnd from "../components/PageEnd";
import PageHero from "../components/PageHero";
import { BLOG } from "../content";

export const metadata = {
  title: "News & Insights",
  description: BLOG.support,
};

export default function BlogPage() {
  return (
    <main id="main">
      <PageHero
        title={BLOG.title}
        support={BLOG.support}
        countBadge={`0${BLOG.posts.length}`}
      />

      <section className="blog-grid wrap" aria-label="Articles">
        <ul className="blog-cards">
          {BLOG.posts.map((post) => (
            <li key={post.slug}>
              <a className="blog-card reveal" href={`/blog/${post.slug}`}>
                <div className="blog-card__meta">
                  <span className="blog-card__tag">{post.tag}</span>
                  <span>{post.readTime}</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="blog-card__title">{post.title}</h2>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <span className="blog-card__more">
                  Read article
                  <span aria-hidden="true"> →</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <PageEnd />
    </main>
  );
}
