## Plan: SEO-Fundament ohne Domain

Alles was wir ohne finale Domain schon sauber vorbereiten können. Sobald die Kundin die Domain hat, müssen wir nur noch `BASE_URL` an einer Stelle tauschen.

### 1. Technische SEO-Basis
- **`public/robots.txt`** anlegen (`User-agent: *` / `Allow: /`, Sitemap-Verweis auf Lovable-URL, später leicht austauschbar).
- **`src/routes/sitemap[.]xml.ts`** als Server-Route mit allen aktuellen Seiten: `/`, `/impressum`, `/datenschutz`, `/blog`, `/blog/balayage-pflege`.
- **`public/llms.txt`** für ChatGPT/Perplexity/Claude (Kurzbeschreibung Salon, Services, Standort, Kontakt).

### 2. Per-Route Head-Metadaten
Jede Route bekommt eigenen `head()` mit `title`, `description`, `canonical`, `og:url`, `og:title`, `og:description`, `og:type`:
- `src/routes/index.tsx` — Fokus-Keywords „Coiffeur Dübendorf", „Balayage", „Hairbysonguel"
- `src/routes/impressum.tsx` — `noindex` (rechtliche Seite, keine SEO-Konkurrenz nötig? → wir lassen indexierbar, nur eigener Title)
- `src/routes/datenschutz.tsx` — eigener Title + Description
- `src/routes/__root.tsx` — nur sitewide Defaults (og:site_name, og:type website, Organization JSON-LD)

### 3. Strukturierte Daten (JSON-LD)
Auf der Startseite `LocalBusiness` / `HairSalon` Schema:
- Name, Adresse (Bahnhofstrasse 33, 8600 Dübendorf), Geo, Öffnungszeiten, Telefon, Preisrange, Services, Instagram/WhatsApp als `sameAs`.
- Das ist der stärkste Hebel für lokale Google-Ergebnisse und Google Maps.

### 4. Startseite polieren (SEO + A11y)
- H1 erweitern zu etwas Beschreibendem wie „Hairbysonguel — Coiffeur & Balayage-Spezialistin in Dübendorf" (visuell bleibt der Look gleich, nur der Textinhalt ändert sich).
- `aria-label` auf Icon-only Links (Instagram, WhatsApp, Telefon).
- Bilder-Alt-Tags nochmal auf Keywords prüfen.

### 5. Blog-Grundgerüst + erster Artikel
- **`src/routes/blog.tsx`** — schlichte Blog-Übersichtsseite im gleichen Premium-Look (Serif, Blush, Gold).
- **`src/routes/blog.balayage-pflege.tsx`** — erster Artikel „Balayage richtig pflegen: 7 Tipps von deiner Coiffeuse in Dübendorf" (Semrush: niedriger Wettbewerb, echtes Suchvolumen).
- Article-JSON-LD, eigener `head()`, interne Verlinkung zur Startseite und WhatsApp-CTA am Ende.
- Footer-Link auf Blog ergänzen.

### 6. Was NICHT jetzt passiert (Kundin-Block)
- Custom Domain in `BASE_URL` eintragen
- Google Search Console + Google Business Profile verknüpfen
- Echte Business-E-Mail bestätigen
- Platzhalter im Impressum füllen

### Technisches
- Alle Head-Tags nach TanStack-Pattern (Title im `meta`-Array, Canonical nur auf Leaf-Routes).
- `BASE_URL` als eine Konstante in `src/lib/seo.ts` — später ein Wert zu ändern reicht.
- Sitemap als Server-Route, damit sie sich automatisch mit neuen Routen erweitern lässt.

Passt das so, oder soll ich den Blog erstmal weglassen und mich nur auf reine SEO-Basics konzentrieren?