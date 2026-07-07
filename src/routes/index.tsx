import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Scissors, Palette, Sparkles, Wand2, Heart, Star, Phone, MapPin,
  Instagram, Clock, Mail, ArrowUpRight, Menu, X, MessageCircle, Plus, Minus,
} from "lucide-react";

import heroAsset from "@/assets/hero-real.jpg.asset.json";
import gallery1Asset from "@/assets/gallery-1.jpg.asset.json";
import gallery2Asset from "@/assets/gallery-2.jpg.asset.json";
import gallery3Asset from "@/assets/gallery-3.jpg.asset.json";
import portraitAsset from "@/assets/portrait-songuel.jpeg.asset.json";
import salonAsset from "@/assets/salon-interior.jpeg.asset.json";
import { url, OG_IMAGE_URL } from "@/lib/seo";
const hero = heroAsset.url;
const about = portraitAsset.url;
const g1 = heroAsset.url;
const g2 = gallery2Asset.url;
const g3 = gallery3Asset.url;
const g4 = gallery1Asset.url;
const salon = salonAsset.url;


const HOME_TITLE = "Hairbysonguel — Coiffeur & Balayage-Spezialistin in Dübendorf";
const HOME_DESC =
  "Premium Coiffeur-Salon an der Bahnhofstrasse Dübendorf. Balayage, Coloration, Damen- & Herrenschnitte, Styling und Beauty — mit Handwerk und Herz.";

const FAQS = [
  {
    q: "Wie lange dauert eine Balayage?",
    a: "Je nach Haarlänge und Ausgangsfarbe zwischen 2,5 und 4 Stunden — inklusive Beratung, Farbe, Wäsche, Pflege und Föhnstyling.",
  },
  {
    q: "Was kostet eine Balayage bei euch?",
    a: "Balayage beginnt bei CHF 220 und wird individuell nach Länge und Aufwand kalkuliert. Den exakten Preis besprechen wir immer vorab per WhatsApp oder in der Beratung.",
  },
  {
    q: "Muss ich einen Termin vereinbaren?",
    a: "Ja, wir arbeiten ausschliesslich mit Terminen — so hast du unsere volle Aufmerksamkeit und wir vermeiden Wartezeit. Am schnellsten geht es per WhatsApp.",
  },
  {
    q: "Wo genau befindet sich der Salon?",
    a: "An der Bahnhofstrasse 33 in 8600 Dübendorf — 2 Minuten vom Bahnhof Dübendorf zu Fuss. Parkplätze findest du in der Blauen Zone rund um den Bahnhof.",
  },
  {
    q: "Bietet ihr auch Herrenschnitte an?",
    a: "Ja, Damen- und Herrenschnitte sind ein fixer Teil unseres Angebots. Schreib uns dein Wunschresultat kurz vorab, dann können wir realistisch einschätzen was möglich ist.",
  },
  {
    q: "Kann ich einen Termin kurzfristig absagen?",
    a: "Wir bitten dich, Absagen mindestens 24 Stunden vorher mitzuteilen — so können wir den Slot noch anderen Kundinnen anbieten.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESC },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url("/") },
      { property: "og:image", content: OG_IMAGE_URL },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [{ rel: "canonical", href: url("/") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "services", label: "Dienstleistungen" },
  { id: "preise", label: "Preise" },
  { id: "gallery", label: "Galerie" },
  { id: "about", label: "Über uns" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Kontakt" },
];

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative overflow-x-clip bg-cream text-ink">
      <Nav scrolled={scrolled} open={open} setOpen={setOpen} />
      <main id="main">
        <Hero />
        <Services />
        <Preise />
        <About />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <span className="eyebrow justify-center">Häufige Fragen</span>
          <h2 className="mt-5 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Wissenswertes vor deinem <span className="italic text-gold">Besuch</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-ink/70">
            Was du sonst noch gerne wüsstest — hier die Antworten auf die häufigsten Fragen.
          </p>
        </div>

        <div className="mt-14 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-ink/10 bg-white/60 transition hover:border-gold/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-lg text-ink"
                >
                  <span>{item.q}</span>
                  {isOpen ? (
                    <Minus className="size-5 shrink-0 text-gold" />
                  ) : (
                    <Plus className="size-5 shrink-0 text-gold" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-ink/75 leading-[1.7]">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STICKY WHATSAPP ---------------- */
function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/41767229519"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Termin per WhatsApp anfragen"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-black/20 transition hover:scale-105 hover:bg-[#1ebe57] sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="size-5" />
      <span className="hidden text-sm font-medium sm:inline">Termin per WhatsApp</span>
    </a>
  );
}

/* ---------------- NAV ---------------- */
function Nav({ scrolled, open, setOpen }: { scrolled: boolean; open: boolean; setOpen: (b: boolean) => void }) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.04)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#home" className="flex items-center gap-2">
          <span className={`font-display text-xl tracking-tight transition-colors ${scrolled ? "text-ink" : "text-ink"}`}>
            Hair<span className="italic text-gold">bysonguel</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="gold-underline text-sm font-medium text-ink/80 transition-colors hover:text-ink">
              {n.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden lg:inline-flex btn-primary !py-3 !px-6 text-sm">
          Termin
          <ArrowUpRight className="size-4" />
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menü schliessen" : "Menü öffnen"}
          className="grid size-11 place-items-center rounded-full border border-ink/15 bg-white/70 backdrop-blur lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="mx-4 mb-4 rounded-3xl glass-card p-6">
            <div className="flex flex-col gap-4">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-ink"
                >
                  {n.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
                Termin vereinbaren
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-blush">
      {/* Floating shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="float-a absolute -left-24 top-24 size-[420px] rounded-full bg-white/50 blur-3xl" />
        <div className="float-b absolute -right-32 top-1/3 size-[520px] rounded-full bg-gold/25 blur-3xl" />
        <div className="float-a absolute bottom-0 left-1/3 size-[360px] rounded-full bg-white/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-32 pb-20 lg:grid-cols-12 lg:gap-8 lg:px-10">
        {/* Copy */}
        <div className="lg:col-span-6 rise-in">
          <span className="eyebrow">Coiffeur · Bahnhofstrasse 33 · Dübendorf</span>
          <h1 className="mt-6 font-display leading-[1.02] tracking-tight text-ink">
            <span className="block text-sm font-sans font-medium uppercase tracking-[0.2em] text-ink/60">
              Hairbysonguel — Coiffeur &amp; Balayage-Spezialistin in Dübendorf
            </span>
            <span className="mt-3 block text-[clamp(2.75rem,7.4vw,5.75rem)]">
              Ihr Haar,
              <span className="block italic text-ink/90">gemacht mit</span>
              <span className="block bg-gradient-to-r from-ink via-gold to-ink bg-[length:200%_auto] bg-clip-text text-transparent">
                Zeit &amp; Liebe.
              </span>
            </span>
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-[1.7] text-ink/70">
            Premium Coiffeur in Dübendorf — spezialisiert auf natürliche
            <span className="font-medium text-ink"> Balayage</span>, präzise Schnitte
            und ehrliche Beratung. Ohne Hektik, ohne Kompromisse.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#contact" className="btn-primary">
              Termin vereinbaren
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="https://wa.me/41767229519?text=Hallo%20Son%C4%9Fuel%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20vereinbaren."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Termin per WhatsApp anfragen"
              className="btn-whatsapp"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </a>
            <a href="tel:+41767229519" className="btn-ghost">
              <Phone className="size-4" />
              076 722 95 19
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink/70">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-medium text-ink">5.0</span>
              <span>· Google Bewertungen</span>
            </div>
            <div className="hidden h-6 w-px bg-ink/15 sm:block" />
            <span className="hidden sm:inline">15+ Jahre Erfahrung</span>
          </div>
        </div>

        {/* Image */}
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-[2.5rem] shadow-[0_40px_100px_-30px_rgba(46,46,46,0.35)]">
            <img
              src={hero}
              alt="Elegante Frau mit gepflegter Balayage-Frisur im Salon Hairbysonguel in Dübendorf"
              width={1600}
              height={1800}
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent" />
          </div>

          {/* Floating cards */}
          <div className="absolute -left-4 top-10 hidden rounded-2xl glass-card px-5 py-4 sm:block">
            <div className="flex items-center gap-3">
              <div className="grid size-10 shrink-0 place-items-center rounded-full bg-gold/20">
                <Sparkles className="size-5 text-gold" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-ink/60">Signature</div>
                <div className="text-sm font-medium">Balayage</div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 right-2 hidden rounded-2xl glass-card px-5 py-4 sm:block">
            <div className="flex items-center gap-3">
              <div className="grid size-10 shrink-0 place-items-center rounded-full bg-blush">
                <Heart className="size-5 text-ink" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-ink/60">Seit 2010</div>
                <div className="text-sm font-medium">Mit Leidenschaft</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const SERVICES = [
  { icon: Scissors, title: "Haarschnitt", desc: "Ein Schnitt, der zu Ihrem Gesicht, Ihrem Alltag und Ihrem Charakter passt — nicht zum letzten Trend." },
  { icon: Wand2, title: "Balayage", desc: "Von Hand gemalte Highlights für einen sonnenverwöhnten Look mit weichen Übergängen. Herauswachsen ohne harten Ansatz." },
  { icon: Palette, title: "Coloration", desc: "Schonende Farben aus Premium-Linien — kräftig, natürlich oder ganz Sie selbst. Auch bei empfindlicher Kopfhaut." },
  { icon: Sparkles, title: "Styling & Braut", desc: "Blowouts, Hochsteckfrisuren und Brautstylings, die den ganzen Abend sitzen — bis zum letzten Tanz." },
  { icon: Heart, title: "Beauty", desc: "Augenbrauen, Wimpern und pflegende Rituale — die kleinen Details, die den Blick zum Strahlen bringen." },
];

function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Dienstleistungen</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Handwerk, das <em className="not-italic text-gold">Schönheit</em> spürbar macht.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-[1.7] text-ink/70">
            Jede Behandlung beginnt mit einem echten Gespräch — damit das Ergebnis
            nicht nur schön aussieht, sondern sich auch nach Ihnen anfühlt.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className={`group relative overflow-hidden rounded-3xl border border-black/[0.04] bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(46,46,46,0.25)] ${
                i === 0 ? "lg:col-span-2 bg-gradient-to-br from-blush to-white" : ""
              }`}
            >
              <div className="absolute -right-16 -top-16 size-48 rounded-full bg-gold/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="grid size-14 place-items-center rounded-2xl bg-blush text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-white">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Mehr erfahren <ArrowUpRight className="size-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PREISE ---------------- */
const PRICE_GROUPS = [
  {
    title: "Color Services",
    items: [
      { name: "Balayage Paket Kurz Haar", price: "220.–", featured: true },
      { name: "Balayage Paket Langhaar", price: "280.–", featured: true },
      { name: "Komplett Farbe", price: "95.–" },
      { name: "Ansatz Färben", price: "65.–" },
      { name: "Tönung", price: "45.–" },
      { name: "Tönung + Styling", price: "100.–" },
      { name: "Extension Haarverlängerung", price: "ab 390.–" },
    ],
  },
  {
    title: "Schneiden & Styling",
    items: [
      { name: "Langhaar", note: "Waschen, Schneiden & Föhnen", price: "85.–" },
      { name: "Kurzhaar", note: "Waschen, Schneiden & Föhnen", price: "65.–" },
    ],
  },
  {
    title: "Styling",
    items: [
      { name: "Langhaar", note: "Waschen & Föhnen", price: "55.–" },
      { name: "Kurzhaar", note: "Waschen & Föhnen", price: "45.–" },
    ],
  },
  {
    title: "Zusatzleistungen",
    items: [
      { name: "Hochzeitsfrisur", price: "350.–" },
      { name: "Hochzeitsgäste Styling", price: "80.–" },
      { name: "Augenbrauen Zupfen / Formen", price: "20.–" },
    ],
  },
];

function Preise() {
  return (
    <section id="preise" className="relative overflow-hidden bg-blush/50 py-28 lg:py-40">
      <div className="pointer-events-none absolute -left-40 top-20 size-[500px] rounded-full bg-white/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 size-[420px] rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Preisliste</span>
          <h2 className="mt-5 font-display text-4xl tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Transparente <em className="text-gold">Preise</em>.
          </h2>
          <p className="mt-6 text-ink/70">
            Alle Preise in CHF. Individuelle Behandlungen können abweichen — wir beraten Sie gerne.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PRICE_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-black/[0.04] bg-white/80 p-8 backdrop-blur-sm shadow-[0_20px_60px_-30px_rgba(46,46,46,0.2)] sm:p-10"
            >
              <div className="flex items-center justify-center gap-4">
                <span className="h-px w-8 bg-gold" />
                <h3 className="font-display text-xl uppercase tracking-[0.28em] text-ink">
                  {group.title}
                </h3>
                <span className="h-px w-8 bg-gold" />
              </div>
              <ul className="mt-8 space-y-5">
                {group.items.map((item) => {
                  const featured = "featured" in item && item.featured;
                  return (
                    <li key={item.name} className="flex items-baseline gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <div className={`text-sm uppercase tracking-wider ${featured ? "font-semibold text-ink" : "font-medium text-ink"}`}>
                            {item.name}
                          </div>
                          {featured && (
                            <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-gold">
                              Signature
                            </span>
                          )}
                        </div>
                        {"note" in item && item.note && (
                          <div className="mt-0.5 text-xs text-ink/55">– {item.note}</div>
                        )}
                      </div>
                      <span
                        className="flex-1 border-b border-dashed border-ink/15"
                        aria-hidden="true"
                      />
                      <div className={`font-display whitespace-nowrap ${featured ? "text-xl text-ink" : "text-lg text-gold"}`}>
                        {item.price}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href="#contact" className="btn-primary">
            Termin anfragen <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-blush/60 py-28 lg:py-40">
      <div className="pointer-events-none absolute -top-40 right-0 size-[600px] rounded-full bg-white/50 blur-3xl" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-[0_40px_100px_-30px_rgba(46,46,46,0.35)]">
            <img
              src={about}
              alt="Coiffeuse Sonĝuel stylt einer lächelnden Kundin einen glänzenden Bob im Salon Hairbysonguel in Dübendorf"
              loading="lazy"
              decoding="async"
              width={1240}
              height={1240}
              sizes="(min-width: 1024px) 560px, (min-width: 640px) 90vw, 100vw"
              className="size-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-4 rounded-3xl glass-card px-6 py-5 sm:-right-8">
            <div className="font-display text-4xl text-ink">15<span className="text-gold">+</span></div>
            <div className="mt-1 text-xs uppercase tracking-widest text-ink/60">Jahre Erfahrung</div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <span className="eyebrow">Über Sonĝuel</span>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Ein Salon, in dem Sie <em className="not-italic text-gold">ankommen</em> dürfen.
          </h2>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.75] text-ink/75">
            <p>
              „Für mich ist Coiffeur mehr als nur Haare schneiden. Ich nehme mir
              Zeit, höre zu und schaue genau hin — denn Ihr Look soll zu Ihrem
              Leben passen, nicht umgekehrt."
            </p>
            <p>
              Seit über 15 Jahren begleite ich Kundinnen mit Leidenschaft für
              Balayage, feine Farbnuancen und Schnitte, die mitwachsen. Jede
              Behandlung ist auf Ihre Haarstruktur, Ihren Alltag und Ihre
              Wünsche abgestimmt — ganz ohne Standardrezept.
            </p>
            <p>
              In meinem Salon an der Bahnhofstrasse arbeite ich ausschliesslich
              mit hochwertigen, veganen Produkten. Für ein Ergebnis, das nicht
              nur heute schön ist, sondern auch morgen noch gesund glänzt.
            </p>
            <p className="font-display text-lg italic text-ink">— Sonĝuel</p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {[
              { k: "2 000+", v: "Zufriedene Kundinnen" },
              { k: "100 %", v: "Vegane Produkte" },
              { k: "5.0 ★", v: "Google Rating" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl text-ink sm:text-3xl">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-ink/55">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
const GALLERY = [
  { src: g1, alt: "Blondes Balayage mit weichen Übergängen — gestylt bei Hairbysonguel Dübendorf", span: "row-span-2", w: 1600, h: 1800 },
  { src: g2, alt: "Extensions und dunkle Locken — Handwerk im Detail bei Hairbysonguel", span: "", w: 1200, h: 1200 },
  { src: g3, alt: "Langes Balayage mit natürlichem Farbverlauf", span: "row-span-2", w: 1200, h: 1500 },
  { src: salon, alt: "Innenraum des Salons Hairbysonguel in Dübendorf mit Stylingplätzen, grossen Spiegeln und Blumenwand", span: "", w: 1200, h: 900 },
  { src: g4, alt: "Dichte Locken mit warmen Reflexen — Coloration von Hairbysonguel", span: "", w: 1200, h: 1200 },
];


function Gallery() {
  return (
    <section id="gallery" className="py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">Galerie</span>
          <h2 className="mt-5 font-display text-4xl tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Momente aus dem Salon
          </h2>
          <p className="mt-6 text-ink/70">
            Ein kleiner Einblick in unsere Arbeit — von zarten Nuancen bis zu ausdrucksstarken Transformationen.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:auto-rows-[240px]">
          {GALLERY.map((img, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-3xl bg-blush ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                width={img.w}
                height={img.h}
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 33vw, 50vw"
                className="size-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-4 p-5 text-sm font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://instagram.com/hairbysonguel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mehr Arbeiten von Hairbysonguel auf Instagram ansehen"
            className="btn-ghost"
          >
            <Instagram className="size-4" aria-hidden="true" />
            Mehr auf Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Unicorn+Beauty+Salon/data=!4m2!3m1!1s0x0:0x87f5cf1aa6048b25";
const GOOGLE_RATING = 4.9;
const GOOGLE_REVIEW_COUNT = 104;

const REVIEW_HIGHLIGHTS = [
  {
    title: "Handwerkliche Präzision",
    body: "Balayage, die Wochen später noch weich und natürlich aussieht — nichts wirkt gestreift, nichts kippt gelb.",
  },
  {
    title: "Echtes Zuhören",
    body: "Vor jeder Behandlung eine ehrliche Beratung. Kein Verkaufsdruck, sondern der Vorschlag, der wirklich zu dir passt.",
  },
  {
    title: "Warme Atmosphäre",
    body: "Kein steriles Studio — ein Ort zum Ankommen. Viele Kundinnen kommen seit Jahren wieder.",
  },
];

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-white lg:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="float-a absolute -left-20 top-10 size-[400px] rounded-full bg-gold/20 blur-3xl" />
        <div className="float-b absolute -right-20 bottom-0 size-[500px] rounded-full bg-blush/15 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow" style={{ color: "var(--color-gold)" }}>Stimmen</span>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bewertet mit <span className="italic text-gold">{GOOGLE_RATING.toString().replace(".", ",")}</span> von 5.
          </h2>
          <p className="mt-6 text-white/70 leading-[1.7]">
            Über {GOOGLE_REVIEW_COUNT} echte Google-Rezensionen unseres Salons in Dübendorf.
          </p>

          {/* Google Rating Badge */}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${GOOGLE_RATING} von 5 Sternen bei ${GOOGLE_REVIEW_COUNT} Google-Rezensionen — auf Google Maps ansehen`}
            className="mt-10 inline-flex items-center gap-4 rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 backdrop-blur transition hover:-translate-y-0.5 hover:border-gold/40 hover:bg-white/[0.08]"
          >
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-gold text-gold" />
              ))}
            </div>
            <div className="text-left">
              <div className="font-display text-2xl leading-none text-white">
                {GOOGLE_RATING.toString().replace(".", ",")} / 5
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/60">
                {GOOGLE_REVIEW_COUNT} Google-Rezensionen
              </div>
            </div>
            <ArrowUpRight className="size-5 text-gold" />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEW_HIGHLIGHTS.map((r) => (
            <figure
              key={r.title}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-lg transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/[0.08]"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <div className="mt-6 font-display text-[1.2rem] leading-tight text-white">
                {r.title}
              </div>
              <p className="mt-3 text-white/70 leading-[1.65]">{r.body}</p>
            </figure>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-white/40">
          Rezensionen des Unicorn Beauty Salon in Dübendorf, in dem Sonĝuel als Coiffeuse arbeitet.
        </p>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
const HOURS = [
  { d: "Montag", h: "Geschlossen" },
  { d: "Dienstag", h: "09:00 – 18:30" },
  { d: "Mittwoch", h: "09:00 – 18:30" },
  { d: "Donnerstag", h: "09:00 – 20:00" },
  { d: "Freitag", h: "09:00 – 18:30" },
  { d: "Samstag", h: "08:00 – 16:00" },
  { d: "Sonntag", h: "Geschlossen" },
];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: info */}
          <div className="lg:col-span-5">
            <span className="eyebrow">Kontakt</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Wir freuen uns <em className="not-italic text-gold">auf Sie</em>.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-[1.7] text-ink/70">
              Am schnellsten geht’s per WhatsApp — meist antworten wir innerhalb weniger Stunden.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://wa.me/41767229519?text=Hallo%20Son%C4%9Fuel%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20vereinbaren."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon className="size-4" />
                Termin via WhatsApp
              </a>
              <a href="tel:+41767229519" className="btn-ghost">
                <Phone className="size-4" />
                076 722 95 19
              </a>
            </div>

            <div className="mt-10 space-y-4">
              <ContactRow icon={MapPin} label="Bahnhofstrasse 33, 8600 Dübendorf" href="https://maps.google.com/?q=Bahnhofstrasse+33+8600+Dübendorf" />
              <ContactRow icon={Mail} label="hallo@hairbysonguel.ch" href="mailto:hallo@hairbysonguel.ch" />
              <ContactRow icon={Instagram} label="@hairbysonguel" href="https://instagram.com/hairbysonguel" />
            </div>

            <div className="mt-10 rounded-3xl bg-blush/60 p-6">
              <div className="flex items-center gap-2 text-ink">
                <Clock className="size-4 text-gold" />
                <div className="text-xs font-medium uppercase tracking-widest">Öffnungszeiten</div>
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                {HOURS.map((h) => (
                  <li key={h.d} className="flex items-center justify-between border-b border-ink/10 pb-2 last:border-0">
                    <span className="text-ink/70">{h.d}</span>
                    <span className="font-medium text-ink">{h.h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: form + map */}
          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = String(fd.get("name") ?? "").trim();
                const phone = String(fd.get("phone") ?? "").trim();
                const email = String(fd.get("email") ?? "").trim();
                const service = String(fd.get("service") ?? "");
                const message = String(fd.get("message") ?? "").trim();
                const text = [
                  "Hallo, ich möchte gerne einen Termin vereinbaren.",
                  "",
                  `Name: ${name}`,
                  `Telefon: ${phone}`,
                  email ? `E-Mail: ${email}` : "",
                  `Behandlung: ${service}`,
                  message ? `Nachricht: ${message}` : "",
                ].filter(Boolean).join("%0A");
                window.open(`https://wa.me/41767229519?text=${text}`, "_blank", "noopener,noreferrer");
                setSent(true);
              }}
              className="rounded-[2rem] border border-black/[0.05] bg-white p-8 shadow-[0_30px_80px_-40px_rgba(46,46,46,0.25)] sm:p-10"
            >
              <div className="flex items-center gap-3">
                <h3 className="font-display text-2xl text-ink">Termin anfragen</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                  <WhatsAppIcon className="size-3.5" />
                  via WhatsApp
                </span>
              </div>
              <p className="mt-2 text-sm text-ink/60">Füllen Sie das Formular aus — Ihre Anfrage wird direkt per WhatsApp an uns gesendet.</p>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Telefon" name="phone" type="tel" required />
                <Field label="E-Mail" name="email" type="email" className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label htmlFor="service" className="mb-2 block text-xs font-medium uppercase tracking-widest text-ink/60">
                    Gewünschte Behandlung
                  </label>
                  <select id="service" name="service" className="w-full rounded-2xl border border-ink/10 bg-cream px-5 py-4 text-sm outline-none transition focus:border-gold focus:bg-white">
                    <option>Haarschnitt</option>
                    <option>Balayage</option>
                    <option>Coloration</option>
                    <option>Styling</option>
                    <option>Beauty</option>
                    <option>Beratung</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-widest text-ink/60">Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full resize-none rounded-2xl border border-ink/10 bg-cream px-5 py-4 text-sm outline-none transition focus:border-gold focus:bg-white"
                    placeholder="Ihre Wünsche, bevorzugter Termin …"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
                {sent ? "WhatsApp wurde geöffnet" : "Termin via WhatsApp anfragen"}
                <ArrowUpRight className="size-4" />
              </button>
            </form>

            <div className="mt-6 overflow-hidden rounded-[2rem] border border-black/[0.05] bg-white">
              <iframe
                title="Standort Hairbysonguel"
                src="https://www.google.com/maps?q=Bahnhofstrasse+33,+8600+D%C3%BCbendorf&output=embed"
                width="100%"
                height="360"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full grayscale-[15%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-9.403h-.004A9.06 9.06 0 0 0 3.5 13.983a9.06 9.06 0 0 0 1.544 5.09L3.5 22.5l3.484-.914a9.062 9.062 0 0 0 13.065-8.062 9.059 9.059 0 0 0-9.058-9.058m0 1.818a7.24 7.24 0 0 1 7.241 7.24 7.243 7.243 0 0 1-7.241 7.244 7.244 7.244 0 0 1-3.825-1.089l-.27-.16-2.081.546.555-2.029-.177-.282a7.242 7.242 0 0 1 6.048-11.47z" />
    </svg>
  );
}

function ContactRow({ icon: Icon, label, href, ariaLabel }: { icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>; label: string; href: string; ariaLabel?: string }) {
  return (
    <a href={href} aria-label={ariaLabel} className="group flex items-center gap-4">
      <div className="grid size-12 shrink-0 place-items-center rounded-full bg-blush transition-colors duration-500 group-hover:bg-ink group-hover:text-white">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <span className="text-ink/80 transition-colors group-hover:text-ink">{label}</span>
    </a>
  );
}

function Field({ label, name, type = "text", required, className = "" }: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-xs font-medium uppercase tracking-widest text-ink/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-ink/10 bg-cream px-5 py-4 text-sm outline-none transition focus:border-gold focus:bg-white"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <div className="font-display text-2xl text-white">
            Hair<span className="italic text-gold">bysonguel</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-white/60">
            Premium Coiffeur-Salon in Dübendorf. Balayage, Coloration, Styling &
            Beauty — mit Handwerk und Herz.
          </p>
          <a href="https://instagram.com/hairbysonguel" target="_blank" rel="noopener noreferrer" aria-label="Hairbysonguel auf Instagram" className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm transition hover:border-gold hover:text-gold">
            <Instagram className="size-4" aria-hidden="true" /> @hairbysonguel
          </a>
        </div>

        <div>
          <div className="text-xs font-medium uppercase tracking-widest text-white/50">Menü</div>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.id}><a href={`#${n.id}`} className="transition hover:text-gold">{n.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-medium uppercase tracking-widest text-white/50">Kontakt</div>
          <ul className="mt-5 space-y-3 text-sm">
            <li>Bahnhofstrasse 33</li>
            <li>8600 Dübendorf</li>
            <li><a href="tel:+41767229519" className="hover:text-gold">+41 76 722 95 19</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/50 md:flex-row lg:px-10">
          <span>© {new Date().getFullYear()} Hairbysonguel — Alle Rechte vorbehalten.</span>
          <div className="flex items-center gap-5">
            <Link to="/blog" className="transition hover:text-gold">Blog</Link>
            <Link to="/impressum" className="transition hover:text-gold">Impressum</Link>
            <Link to="/datenschutz" className="transition hover:text-gold">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
