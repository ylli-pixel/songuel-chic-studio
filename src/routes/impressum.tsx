import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Hairbysonguel" },
      { name: "description", content: "Impressum von Hairbysonguel, Coiffeur-Salon in Dübendorf." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Impressum — Hairbysonguel" },
      { property: "og:description", content: "Rechtliche Angaben." },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <div className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
        <Link to="/" className="text-sm text-ink/60 hover:text-ink transition-colors">
          ← Zurück zur Startseite
        </Link>

        <span className="eyebrow mt-10 block">Rechtliches</span>
        <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
          Impressum
        </h1>

        <div className="mt-14 space-y-10 text-[1.02rem] leading-[1.75] text-ink/80">
          <section>
            <h2 className="font-display text-2xl text-ink">Anbieterin</h2>
            <div className="mt-4 space-y-1">
              <p><strong>Hairbysonguel</strong></p>
              <p>Inhaberin: Sonĝuel [Nachname bitte ergänzen]</p>
              <p>Bahnhofstrasse 33</p>
              <p>8600 Dübendorf</p>
              <p>Schweiz</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Kontakt</h2>
            <div className="mt-4 space-y-1">
              <p>
                Telefon:{" "}
                <a href="tel:+41767229519" className="text-gold hover:underline">
                  +41 76 722 95 19
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a href="mailto:hallo@hairbysonguel.ch" className="text-gold hover:underline">
                  hallo@hairbysonguel.ch
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a
                  href="https://instagram.com/hairbysonguel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  @hairbysonguel
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Rechtsform &amp; Registereintrag</h2>
            <div className="mt-4 space-y-1">
              <p>Rechtsform: Einzelunternehmen [bitte prüfen / anpassen]</p>
              <p>UID-Nr.: CHE-[bitte ergänzen, falls vorhanden]</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Verantwortlich für den Inhalt</h2>
            <p className="mt-4">Sonĝuel [Nachname], Adresse wie oben.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Haftungsausschluss</h2>
            <p className="mt-4">
              Die Autorin übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen
              Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit
              der Informationen auf dieser Website. Haftungsansprüche gegen die Autorin
              wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff
              oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen
              entstehen, werden ausgeschlossen.
            </p>
            <p className="mt-4">
              Alle Angebote sind unverbindlich. Die Autorin behält es sich ausdrücklich
              vor, Teile der Seiten oder das gesamte Angebot ohne besondere Ankündigung
              zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise
              oder endgültig einzustellen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Haftung für Links</h2>
            <p className="mt-4">
              Verweise und Links auf Websites Dritter liegen ausserhalb unseres
              Verantwortungsbereichs. Es wird jegliche Verantwortung für solche
              Websites abgelehnt. Der Zugriff und die Nutzung solcher Websites
              erfolgen auf eigene Gefahr der Nutzerin.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Urheberrechte</h2>
            <p className="mt-4">
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder
              anderen Dateien auf dieser Website gehören ausschliesslich
              Hairbysonguel oder den speziell genannten Rechtsinhabern. Für die
              Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der
              Urheberrechtsträgerin im Voraus einzuholen.
            </p>
          </section>
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          <Link to="/" className="btn-primary">
            Zur Startseite <ArrowUpRight className="size-4" />
          </Link>
          <Link to="/datenschutz" className="btn-ghost">
            Datenschutzerklärung
          </Link>
        </div>
      </div>
    </div>
  );
}
