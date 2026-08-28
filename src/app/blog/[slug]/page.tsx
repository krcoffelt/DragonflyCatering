import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return {};

  return buildMetadata({
    title: `${post.title} | Dragonfly Catering`,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const path = `/blog/${post.slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/blog" },
            { name: post.title, path },
          ]),
          articleSchema({
            headline: post.title,
            description: post.description,
            path,
            image: post.hero.src,
            datePublished: post.published,
          }),
          faqSchema(post.faqs),
        ]}
      />
      <BlogArticle post={post} />
    </>
  );
}
