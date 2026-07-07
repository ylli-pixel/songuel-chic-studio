import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { url } from "@/lib/seo";

const POSTS = [
  {
    slug: "balayage-pflege",
    title: "Balayage richtig pflegen: 7 Tipps von deiner Coiffeuse",
    excerpt:
      "Wie du deine Balayage länger strahlend hältst — mit konkreten Produkten, Routinen und Fehlern, die du vermeiden solltest.",
    date: "2026-07-07",
    readingTime: "6 Min. Lesezeit",
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Hair- & Balayage-Tipps | Hairbysonguel Dübendorf" },
      {
        name: "description",
        content:
          "Ehrliche Pflege- und Styling-Tipps aus dem Salon Hairbysonguel in Dübendorf — Balayage, Coloration und gesunde Haare.",
      },
      { property: "og:title", content: "Blog — Hairbysonguel" },
      {
        property: "og:description",
        content: "Pflege- und Styling-Tipps aus dem Salon in Dübendorf.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url("/blog") },
    ],
    links: [{ rel: "canonical", href: url("/blog") }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
        <Link to="/" className="text-sm text-ink/60 transition-colors hover:text-ink">
          ← Zurück zur Startseite
        </Link>

        <span className="eyebrow mt-10 block">Journal</span>
        <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
          Blog
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-ink/70">
          Kleine Rituale, ehrliche Tipps und alles, was deine Haare länger schön macht —
          direkt aus dem Salon in Dübendorf.
        </p>

        <div className="mt-16 space-y-8">
          {POSTS.map((p) => (
            <article
              key={p.slug}
              className="group rounded-3xl border border-ink/10 bg-white/60 p-8 transition hover:border-gold/40 hover:bg-white"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-ink/50">
                <time dateTime={p.date}>
                  {new Date(p.date).toLocaleDateString("de-CH", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span aria-hidden>·</span>
                <span>{p.readingTime}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl leading-tight text-ink sm:text-3xl">
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="transition-colors group-hover:text-gold"
                >
                  {p.title}
                </Link>
              </h2>
              <p className="mt-4 text-ink/70">{p.excerpt}</p>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:underline"
              >
                Weiterlesen <ArrowUpRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
