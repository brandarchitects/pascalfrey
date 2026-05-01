import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MetaBlock } from "@/components/blocks/MetaBlock";
import { ProjectCard } from "@/components/blocks/ProjectCard";
import { PrevNext } from "@/components/blocks/PrevNext";
import { mdxComponents } from "@/components/mdx";
import { ogImageUrl } from "@/lib/seo";
import { getAllWork, getWorkBySlug } from "@/lib/content";
import { t } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const works = getAllWork("en");
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug, "en");
  if (!work) return {};
  return {
    title: `${work.title} · ${work.client} · Pascal Frey`,
    description: work.summary,
    alternates: {
      canonical: `/en/work/${slug}`,
      languages: {
        "de-CH": `/arbeiten/${slug}`,
        en: `/en/work/${slug}`,
        "x-default": `/arbeiten/${slug}`,
      },
    },
    openGraph: {
      title: work.title,
      description: work.summary,
      images: [
        {
          url: ogImageUrl({
            title: work.title,
            eyebrow: `${work.client} · ${work.year}`,
            subtitle: work.summary,
          }),
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function EnWorkPage({ params }: PageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug, "en");
  if (!work) notFound();

  const all = getAllWork("en");
  const idx = all.findIndex((w) => w.slug === slug);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx >= 0 && idx + 1 < all.length ? all[idx + 1] : null;
  const related = all.filter((w) => w.slug !== slug).slice(0, 3);

  const hasRealCover = work.cover && !work.cover.includes("/blog/placeholder");

  return (
    <main>
      {hasRealCover && (
        <section className="pt-12 sm:pt-16">
          <Container>
            <div className="overflow-hidden rounded-2xl bg-powder shadow-[rgba(0,0,0,0.4)_0_0_1.143px_0,_rgba(0,0,0,0.04)_0_2px_4px_0]">
              <Image
                src={work.cover}
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

      <section className="pt-16 pb-12 sm:pt-24">
        <Container size="prose">
          <Eyebrow variant="fh">{t("work.detail.eyebrow", "en")}</Eyebrow>
          <Heading as="h1" size="display" className="mt-4">
            {work.title}
          </Heading>
          <p className="mt-6 max-w-[60ch] text-[18px] leading-[1.5] text-gravel">
            {work.summary}
          </p>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <MetaBlock
            items={[
              { label: t("work.detail.client", "en"), value: work.client },
              { label: t("work.detail.year", "en"), value: String(work.year) },
              { label: t("work.detail.role", "en"), value: work.role },
              { label: t("work.detail.tags", "en"), value: work.tags ?? [] },
            ]}
          />
        </Container>
      </section>

      <section className="pb-16">
        <Container size="prose">
          <article>
            <MDXRemote source={work.body} components={mdxComponents} />
          </article>
        </Container>
      </section>

      {work.award && (
        <section className="pb-16">
          <Container size="prose">
            <div className="rounded-2xl border border-chalk p-6">
              <Eyebrow variant="fh">{t("work.detail.award", "en")}</Eyebrow>
              <p className="mt-3 text-[16px] text-cinder">{work.award}</p>
            </div>
          </Container>
        </section>
      )}

      <section className="pb-12">
        <Container size="prose">
          <PrevNext
            prev={prev ? { href: `/en/work/${prev.slug}`, title: prev.title } : null}
            next={next ? { href: `/en/work/${next.slug}`, title: next.title } : null}
            locale="en"
          />
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-chalk py-24">
          <Container>
            <Eyebrow variant="fh">{t("common.related", "en")}</Eyebrow>
            <ul className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((w) => (
                <li key={w.slug}>
                  <ProjectCard
                    href={`/en/work/${w.slug}`}
                    cover={w.cover}
                    client={w.client}
                    year={w.year}
                    title={w.title}
                    role={w.role}
                  />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </main>
  );
}
