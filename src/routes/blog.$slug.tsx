import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { url } from "@/lib/seo";

type Post = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  date: string;
  readingTime: string;
  render: () => ReactNode;
};

const POSTS: Record<string, Post> = {
  "balayage-pflege": {
    slug: "balayage-pflege",
    title: "Balayage richtig pflegen: 7 Tipps von deiner Coiffeuse in Dübendorf",
    seoTitle: "Balayage pflegen: 7 Tipps aus Dübendorf",
    description:
      "So bleibt deine Balayage lange strahlend: 7 ehrliche Pflege-Tipps von Hairbysonguel — Produkte, Routine und Fehler, die du vermeiden solltest.",
    date: "2026-07-07",
    readingTime: "6 Min. Lesezeit",
    render: () => (
      <>
        <p>
          Eine Balayage ist ein Handwerk — und wie jedes gute Handwerk verdient sie
          Pflege. Die gute Nachricht: Du brauchst kein Regal voller Produkte, sondern
          eine ehrliche Routine. Hier sind die sieben Tipps, die ich meinen Kundinnen
          im Salon in Dübendorf immer wieder mitgebe.
        </p>

        <h2>1. Die ersten 72 Stunden entscheiden</h2>
        <p>
          Warte 2–3 Tage vor der ersten Wäsche. Die Farbpigmente brauchen Zeit, sich
          in der Haarstruktur zu setzen. Wäschst du zu früh, verlierst du Leuchtkraft
          bevor die Balayage überhaupt richtig „angekommen" ist.
        </p>

        <h2>2. Silber-Shampoo — aber richtig</h2>
        <p>
          Ein Silber-Shampoo neutralisiert Gelbstich. Einmal pro Woche reicht meistens
          völlig. Zu häufige Anwendung macht die Haare grau-matt und trocken.
        </p>

        <h2>3. Hitze runter, Glanz rauf</h2>
        <p>
          Föhn und Glätteisen auf maximal 180 °C. Alles darüber verbrennt die
          Pigmente, die deine Balayage so warm aussehen lassen. Ein Hitzeschutz ist
          nicht optional — er ist Pflicht.
        </p>

        <h2>4. Wöchentliche Maske statt tägliche Spülung</h2>
        <p>
          Eine hochwertige Maske einmal pro Woche bringt mehr als drei Spülungen. Fünf
          Minuten Einwirkzeit reichen, wenn das Produkt gut ist.
        </p>

        <h2>5. Chlor und Salzwasser ausspülen</h2>
        <p>
          Nach Pool oder Meer die Haare sofort mit klarem Wasser durchspülen. Chlor
          zieht besonders gerne einen Grün- oder Gelbstich in blonde Partien.
        </p>

        <h2>6. Sonne mit Bedacht</h2>
        <p>
          UV-Strahlen bleichen die Farbe aus. Ein leichtes Öl mit UV-Filter ist im
          Sommer der beste Freund deiner Balayage — im Winter reicht ein
          Feuchtigkeitsspray.
        </p>

        <h2>7. Der Termin für den Refresh</h2>
        <p>
          Alle 10–14 Wochen ein Gloss oder Toner — und deine Balayage sieht aus wie
          am ersten Tag. Ein voller Neuansatz ist meistens nur 2× pro Jahr nötig.
        </p>

        <h2>Bereit für deine nächste Balayage?</h2>
        <p>
          Schreib mir kurz auf WhatsApp — wir schauen zusammen, was deine Haare
          gerade brauchen, und finden den passenden Termin.
        </p>
      </>
    ),
  },

  "balayage-vs-highlights": {
    slug: "balayage-vs-highlights",
    title: "Balayage vs. Highlights: Was passt zu dir?",
    seoTitle: "Balayage vs. Highlights: Was passt zu dir?",
    description:
      "Balayage oder Highlights? Wir erklären den echten Unterschied, wann welche Technik Sinn macht — und was das für Pflege und Budget bedeutet.",
    date: "2026-07-07",
    readingTime: "5 Min. Lesezeit",
    render: () => (
      <>
        <p>
          „Ich möchte etwas Helleres" — der Satz startet fast jede Farbberatung im
          Salon. Und fast immer folgt die gleiche Frage: <em>Balayage oder Highlights?</em>
          Hier ist der ehrliche Unterschied — ohne Marketing-Sprech.
        </p>

        <h2>Highlights: die klassische Technik</h2>
        <p>
          Highlights werden mit Alufolie Strähne für Strähne aufgehellt — meistens vom
          Ansatz bis zur Spitze. Das Ergebnis ist gleichmässig, kontrastreich und
          klassisch. Perfekt, wenn du einen präzisen, sichtbaren Farbunterschied willst.
        </p>

        <h2>Balayage: die freihändige Technik</h2>
        <p>
          Balayage kommt aus dem Französischen und heisst wörtlich „fegen". Die Farbe
          wird frei mit dem Pinsel aufgetragen — meistens von der Mitte bis zu den
          Spitzen. Das Ergebnis wirkt weicher, sonnengeküsst und wächst deutlich
          natürlicher heraus.
        </p>

        <h2>Der Nachwachs-Faktor</h2>
        <p>
          Der grösste praktische Unterschied: Highlights brauchen alle 6–8 Wochen
          einen Ansatz-Termin, sonst wird die Trennlinie sichtbar. Balayage kannst
          du problemlos 3–5 Monate wachsen lassen — ein grosser Vorteil, wenn du nicht
          alle paar Wochen im Salon sitzen willst.
        </p>

        <h2>Budget im Vergleich</h2>
        <p>
          Balayage ist pro Termin meistens teurer, dafür seltener nötig. Auf ein Jahr
          gerechnet fährst du oft günstiger als mit klassischen Highlights. Highlights
          sind ideal für gleichmässigen Look und regelmässige Pflege.
        </p>

        <h2>Was passt zu wem?</h2>
        <p>
          <strong>Highlights</strong> lohnen sich, wenn du einen deutlichen, präzisen
          Kontrast willst — oder wenn deine Haare sehr dunkel sind und du viel Helligkeit
          brauchst. <strong>Balayage</strong> ist deine Wahl, wenn du einen natürlichen,
          entspannten Look willst und dir Flexibilität wichtiger ist als Symmetrie.
        </p>

        <h2>Nicht sicher? Schreib mir.</h2>
        <p>
          In 5 Minuten WhatsApp mit einem Foto deiner aktuellen Haare kann ich dir
          meistens schon sagen, welche Technik zu dir passt. Kein Termindruck, keine
          Verpflichtung.
        </p>
      </>
    ),
  },

  "haare-pflegen-im-winter": {
    slug: "haare-pflegen-im-winter",
    title: "Haare pflegen im Winter: 5 Rituale gegen trockenes Haar",
    seoTitle: "Haare im Winter: 5 Rituale gegen Trockenheit",
    description:
      "Heizungsluft, Wollmützen, Kälte — was deinen Haaren im Winter wirklich hilft. 5 einfache Rituale von Hairbysonguel in Dübendorf.",
    date: "2026-07-07",
    readingTime: "5 Min. Lesezeit",
    render: () => (
      <>
        <p>
          Der Winter ist die härteste Jahreszeit für deine Haare: Heizung entzieht
          Feuchtigkeit, Wollmützen laden statisch auf, Kälte macht die Spitzen brüchig.
          Mit diesen fünf Ritualen bleiben deine Haare durch die kalten Monate gesund.
        </p>

        <h2>1. Öl statt Serum am Morgen</h2>
        <p>
          Ein Tropfen Arganöl oder Marula-Öl in die Längen — nicht in den Ansatz.
          Das versiegelt die Haaroberfläche gegen den Feuchtigkeitsverlust in
          Heizungsluft.
        </p>

        <h2>2. Kaltes Nachspülen</h2>
        <p>
          Die letzte Spülung mit kaltem Wasser schliesst die Schuppenschicht. Das
          Haar reflektiert mehr Licht und wirkt sofort glänzender — kostenlos und
          extrem effektiv.
        </p>

        <h2>3. Seidenkissen statt Baumwolle</h2>
        <p>
          Baumwolle zieht Feuchtigkeit aus dem Haar und verursacht Reibung. Ein
          Seidenkissenbezug reduziert Frizz spürbar und ist besonders bei
          coloriertem Haar Gold wert.
        </p>

        <h2>4. Wollmütze richtig tragen</h2>
        <p>
          Direkt auf dem Haar reibt Wolle. Ein dünnes Seiden- oder Satin-Tuch unter
          die Mütze — kleine Investition, riesiger Unterschied für Farbschutz und
          weniger statische Aufladung.
        </p>

        <h2>5. Alle 8 Wochen zum Spitzenschneiden</h2>
        <p>
          Im Winter werden Spitzen schneller trocken. Alle 6–8 Wochen 1–2 cm
          nachschneiden hält das gesamte Haar gesund — sonst wandert die
          Trockenheit nach oben.
        </p>

        <h2>Winter-Check im Salon</h2>
        <p>
          Wenn deine Haare sich gerade wirklich anfühlen als bräuchten sie Hilfe:
          Schreib mir kurz. Ein 30-minütiges Pflege-Ritual im Salon kann Wunder
          wirken — besonders vor den Festtagen.
        </p>
      </>
    ),
  },
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS[params.slug];
    if (!post) throw notFound();
    return post;
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Artikel nicht gefunden — Hairbysonguel" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const canonical = url(`/blog/${params.slug}`);
    return {
      meta: [
        { title: `${loaderData.seoTitle} | Hairbysonguel` },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonical },
        { property: "article:published_time", content: loaderData.date },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.title,
            description: loaderData.description,
            datePublished: loaderData.date,
            author: { "@type": "Person", name: "Sonĝuel" },
            publisher: { "@type": "Organization", name: "Hairbysonguel" },
            mainEntityOfPage: canonical,
          }),
        },
      ],
    };
  },
  component: BlogPost,
  notFoundComponent: PostNotFound,
});

function PostNotFound() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <span className="eyebrow justify-center">Nicht gefunden</span>
        <h1 className="mt-6 font-display text-4xl">Dieser Artikel existiert nicht.</h1>
        <Link to="/blog" className="btn-primary mt-10 inline-flex">
          Alle Artikel
        </Link>
      </div>
    </div>
  );
}

function BlogPost() {
  const post = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-cream text-ink">
      <article className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
        <Link to="/blog" className="text-sm text-ink/60 transition-colors hover:text-ink">
          ← Alle Artikel
        </Link>

        <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-widest text-ink/50">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("de-CH", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span aria-hidden>·</span>
          <span>{post.readingTime}</span>
        </div>

        <h1 className="mt-5 font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {post.title}
        </h1>

        <div className="prose-post mt-12 space-y-6 text-[1.05rem] leading-[1.8] text-ink/80">
          {post.render()}
        </div>

        <div className="mt-16 rounded-3xl border border-gold/30 bg-white/70 p-8 text-center">
          <p className="font-display text-2xl text-ink">Termin vereinbaren</p>
          <p className="mt-3 text-ink/70">
            Schreib mir direkt — ich melde mich meistens innerhalb weniger Stunden.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/41767229519"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
            <Link to="/" className="btn-ghost">
              Zur Startseite <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </article>

      <style>{`
        .prose-post h2 {
          font-family: var(--font-display), Playfair Display, serif;
          font-size: 1.6rem;
          line-height: 1.25;
          color: var(--color-ink, #1a1a1a);
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
        }
        .prose-post p { margin: 0; }
      `}</style>
    </div>
  );
}
