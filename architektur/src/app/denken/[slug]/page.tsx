import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { AuthorBox } from "@/components/blocks/AuthorBox";
import { PrevNext } from "@/components/blocks/PrevNext";
import { PostListItem } from "@/components/blocks/PostListItem";
import { mdxComponents } from "@/components/mdx";
import { JsonLd, articleSchema, ogImageUrl } from "@/lib/seo";
import {
  getAllPosts,
  getPostBySlug,
  formatPostDate,
  readingTimeLabel,
} from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts("de");
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, "de");
  if (!post) return {};
  const enExists = getPostBySlug(slug, "en");
  return {
    title: `${post.title} · Pascal Frey`,
    description: post.excerpt,
    alternates: {
      canonical: `/denken/${slug}`,
      languages: enExists
        ? {
            "de-CH": `/denken/${slug}`,
            en: `/en/thinking/${slug}`,
            "x-default": `/denken/${slug}`,
          }
        : { "de-CH": `/denken/${slug}`, "x-default": `/denken/${slug}` },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Pascal Frey"],
      images: [
        {
          url: ogImageUrl({
            title: post.title,
            eyebrow: post.tag ?? "Denken",
            subtitle: post.excerpt,
          }),
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "de");
  if (!post) notFound();

  const all = getAllPosts("de");
  const idx = all.findIndex((p) => p.slug === slug);
  const prev = idx >= 0 && idx + 1 < all.length ? all[idx + 1] : null;
  const next = idx > 0 ? all[idx - 1] : null;
  const related = all.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main>
      <JsonLd data={articleSchema(post)} />
      {post.cover && (
        <section className="pt-12 sm:pt-16">
          <Container>
            <div className="overflow-hidden rounded-2xl bg-powder shadow-[rgba(0,0,0,0.4)_0_0_1.143px_0,_rgba(0,0,0,0.04)_0_2px_4px_0]">
              <Image
                src={post.cover}
                alt=""
                width={1600}
                height={900}
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="h-auto w-full"
                style={{ aspectRatio: "16/9", objectFit: "cover" }}
              />
            </div>
          </Container>
        </section>
      )}

      <section className="pt-16 pb-8 sm:pt-24">
        <Container size="prose">
          <div className="text-[14px] text-gravel">
            {formatPostDate(post.date, "de")} · {readingTimeLabel(post, "de")}
            {post.tag ? <> · {post.tag}</> : null}
          </div>
          <Heading as="h1" size="display" className="mt-4">
            {post.title}
          </Heading>
        </Container>
      </section>

      <section className="pb-16">
        <Container size="prose">
          <article>
            <MDXRemote source={post.body} components={mdxComponents} />
          </article>
        </Container>
      </section>

      <section className="pb-16">
        <Container size="prose">
          <AuthorBox locale="de" />
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-chalk py-24">
          <Container>
            <Eyebrow>Weiterlesen</Eyebrow>
            <ol className="mt-8 divide-y divide-chalk border-t border-chalk">
              {related.map((p) => (
                <li key={p.slug}>
                  <PostListItem
                    href={`/denken/${p.slug}`}
                    date={formatPostDate(p.date, "de")}
                    readingTime={readingTimeLabel(p, "de")}
                    tag={p.tag}
                    title={p.title}
                    excerpt={p.excerpt}
                  />
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      <section className="pb-24">
        <Container size="prose">
          <PrevNext
            prev={prev ? { href: `/denken/${prev.slug}`, title: prev.title } : null}
            next={next ? { href: `/denken/${next.slug}`, title: next.title } : null}
            locale="de"
          />
        </Container>
      </section>
    </main>
  );
}
