import { notFound } from "next/navigation";

import PageEnd from "../../components/PageEnd";
import { BLOG, BOOK } from "../../content";

export function generateStaticParams() {
  return BLOG.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG.posts.find((p) => p.slug === slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = BLOG.posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main id="main">
      <article className="article wrap">
        <header className="article__header">
          <div className="article__meta">
            <span className="blog-card__tag">{post.tag}</span>
            <span>{post.readTime}</span>
            <span>{post.date}</span>
          </div>
          <h1 className="article__title">{post.title}</h1>
          <p className="article__excerpt">{post.excerpt}</p>
        </header>

        <div className="article__body">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <a className="btn btn--pill" href={BOOK}>
          Book a Demo
        </a>
      </article>

      <PageEnd />
    </main>
  );
}
