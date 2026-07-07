import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { url } from "@/lib/seo";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — Hairbysonguel" },
      { name: "description", content: "Datenschutzerklärung von Hairbysonguel, Coiffeur-Salon in Dübendorf." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Datenschutz — Hairbysonguel" },
      { property: "og:description", content: "Wie wir mit Ihren Daten umgehen." },
      { property: "og:url", content: url("/datenschutz") },
    ],
    links: [{ rel: "canonical", href: url("/datenschutz") }],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <div className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
        <Link to="/" className="text-sm text-ink/60 hover:text-ink transition-colors">
          ← Zurück zur Startseite
        </Link>

        <span className="eyebrow mt-10 block">Rechtliches</span>
        <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
          Datenschutz&shy;erklärung
        </h1>
        <p className="mt-6 text-ink/60">Stand: {new Date().toLocaleDateString("de-CH", { month: "long", year: "numeric" })}</p>

        <div className="mt-14 space-y-10 text-[1.02rem] leading-[1.75] text-ink/80">
          <section>
            <p>
              Wir freuen uns über Ihren Besuch auf unserer Website. Der Schutz Ihrer
              Privatsphäre ist uns ein wichtiges Anliegen. Nachstehend informieren wir
              Sie ausführlich über den Umgang mit Ihren Daten.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">1. Verantwortliche Stelle</h2>
            <div className="mt-4 space-y-1">
              <p>Hairbysonguel</p>
              <p>Sonĝuel [Nachname bitte ergänzen]</p>
              <p>Bahnhofstrasse 33, 8600 Dübendorf</p>
              <p>
                E-Mail:{" "}
                <a href="mailto:hallo@hairbysonguel.ch" className="text-gold hover:underline">
                  hallo@hairbysonguel.ch
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">2. Rechtsgrundlagen</h2>
            <p className="mt-4">
              Die Bearbeitung Ihrer Personendaten erfolgt auf Grundlage des Schweizer
              Bundesgesetzes über den Datenschutz (DSG). Für Besucherinnen aus der EU
              gilt zusätzlich die Datenschutz-Grundverordnung (DSGVO).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">3. Erhebung und Verarbeitung von Daten</h2>
            <p className="mt-4">
              Wir erheben, verarbeiten und nutzen Ihre Personendaten nur, soweit dies
              für die Bereitstellung unserer Website und die Bearbeitung Ihrer
              Terminanfrage erforderlich ist.
            </p>

            <h3 className="mt-6 font-display text-lg text-ink">a) Server-Logfiles</h3>
            <p className="mt-2">
              Beim Aufruf der Website werden technische Zugriffsdaten (IP-Adresse,
              Browsertyp, Datum und Uhrzeit) durch unseren Hosting-Anbieter
              vorübergehend verarbeitet. Diese Daten dienen ausschliesslich der
              Sicherheit und dem stabilen Betrieb der Website.
            </p>

            <h3 className="mt-6 font-display text-lg text-ink">b) Kontaktformular &amp; WhatsApp</h3>
            <p className="mt-2">
              Wenn Sie das Kontaktformular ausfüllen, werden die eingegebenen Daten
              (Name, Telefon, E-Mail, gewünschte Behandlung, Nachricht) direkt in eine
              WhatsApp-Nachricht übertragen, die in Ihrem Browser bzw. Ihrer
              WhatsApp-App geöffnet wird. Erst durch Ihr aktives Absenden gelangt die
              Nachricht an uns. WhatsApp ist ein Dienst der Meta Platforms Inc.
              Weitere Informationen finden Sie in der{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy-eea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Datenschutzerklärung von WhatsApp
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">4. Einsatz von Drittdiensten</h2>

            <h3 className="mt-4 font-display text-lg text-ink">Google Maps</h3>
            <p className="mt-2">
              Auf unserer Kontaktseite binden wir eine Karte von Google Maps ein
              (Anbieter: Google Ireland Limited). Beim Aufruf werden Daten wie Ihre
              IP-Adresse an Google übermittelt und ggf. in den USA verarbeitet.
              Näheres finden Sie in der{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Datenschutzerklärung von Google
              </a>
              .
            </p>

            <h3 className="mt-6 font-display text-lg text-ink">Instagram</h3>
            <p className="mt-2">
              Wir verlinken auf unser Instagram-Profil. Erst durch Anklicken des Links
              werden Daten an Meta Platforms übertragen. Es gilt die{" "}
              <a
                href="https://privacycenter.instagram.com/policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Datenschutzrichtlinie von Instagram
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">5. Cookies &amp; lokale Speicherung</h2>
            <p className="mt-4">
              Unsere Website verwendet keine Tracking- oder Marketing-Cookies. Wir
              speichern lediglich Ihre Zustimmung zum Cookie-Hinweis lokal in Ihrem
              Browser (localStorage), damit dieser nicht erneut erscheint. Diese
              Information verlässt Ihren Browser nicht.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">6. Ihre Rechte</h2>
            <p className="mt-4">Sie haben jederzeit das Recht auf:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Auskunft über Ihre gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Einschränkung der Bearbeitung</li>
              <li>Widerruf einer erteilten Einwilligung</li>
            </ul>
            <p className="mt-4">
              Für Anfragen kontaktieren Sie uns bitte per E-Mail an{" "}
              <a href="mailto:hallo@hairbysonguel.ch" className="text-gold hover:underline">
                hallo@hairbysonguel.ch
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">7. Sicherheit</h2>
            <p className="mt-4">
              Ihre Daten werden über eine verschlüsselte HTTPS-Verbindung übertragen.
              Wir treffen angemessene technische und organisatorische Massnahmen zum
              Schutz Ihrer Daten vor Verlust, Missbrauch und unbefugtem Zugriff.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">8. Änderungen</h2>
            <p className="mt-4">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
              stets den aktuellen rechtlichen Anforderungen entspricht.
            </p>
          </section>
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          <Link to="/" className="btn-primary">
            Zur Startseite <ArrowUpRight className="size-4" />
          </Link>
          <Link to="/impressum" className="btn-ghost">
            Impressum
          </Link>
        </div>
      </div>
    </div>
  );
}
