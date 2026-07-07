# Launch-Vorbereitung: Rechtliches & Favicon

Bevor die Seite an eine echte Kundin ausgeliefert wird, brauchen wir die Schweizer Pflichtangaben und ein eigenes Favicon. Ohne diese Punkte darf die Seite kommerziell nicht live gehen.

## Was wir bauen

### 1. Impressum-Seite (`/impressum`)
Eigene Route mit:
- Firmenname / Inhaberin: **Sonĝuel [Nachname]**
- Adresse: Bahnhofstrasse 33, 8600 Dübendorf
- Kontakt: Telefon, E-Mail
- Optional: UID-Nummer (CHE-...), Handelsregister
- Verantwortlich für den Inhalt: Sonĝuel [Nachname]
- Haftungsausschluss (Links, Inhalte)

### 2. Datenschutzerklärung (`/datenschutz`)
Eigene Route mit klarem, DSG-konformem Text (Schweizer Datenschutzgesetz + Hinweis auf DSGVO für EU-Besucherinnen):
- Verantwortliche Stelle
- Welche Daten erhoben werden (Kontaktformular → WhatsApp-Weiterleitung)
- Verwendung von Google Maps (Einbettung + Datenübertragung an Google)
- Instagram-Verlinkung
- Server-Logs / Hosting (Lovable)
- Cookies (aktuell keine Tracking-Cookies, nur technisch nötige)
- Rechte der Nutzerinnen (Auskunft, Löschung, Berichtigung)
- Kontakt für Datenschutzanfragen

### 3. Cookie-Hinweis (dezenter Banner)
Kleiner eleganter Banner unten rechts, passend zum Design:
- Kurzer Text: „Diese Website nutzt Google Maps und speichert Einstellungen lokal. Mehr Infos in der Datenschutzerklärung."
- Ein Button: „Verstanden"
- Speichert Zustimmung in `localStorage`
- Erscheint nur beim ersten Besuch

### 4. Footer-Links ergänzen
Im bestehenden Footer:
- Link zu `/impressum`
- Link zu `/datenschutz`
- Diskret aber sichtbar unten

### 5. Eigenes Favicon
- Elegantes „H" oder „hs"-Monogramm in Blush/Gold, passend zum Branding
- Als PNG (`public/favicon.png`) generiert
- In `__root.tsx` eingebunden, alte `favicon.ico` wird gelöscht
- Zusätzlich `apple-touch-icon` für iPhone-Homescreen

### 6. 404-Seite polieren
Die bestehende NotFound-Komponente in `__root.tsx` bekommt den gleichen Premium-Look wie die Hauptseite (Serif-Headline, Blush-Hintergrund, sanfte Animation, Button zurück zur Startseite und WhatsApp-Kontakt).

## Was ich von dir brauche (bevor ich baue)

Bitte diese 4 Infos in einer Nachricht schicken:

1. **Vollständiger Nachname von Sonĝuel** (für Impressum)
2. **Offizielle E-Mail-Adresse** (existiert `hallo@hairbysonguel.ch`? Falls nein: welche verwenden?)
3. **Rechtsform** — Einzelfirma, GmbH oder andere? (Falls GmbH: UID/Handelsregister-Nr.)
4. **Favicon-Stil**: „H" allein, „HS", oder eine kleine Schere/Blüte als Icon?

## Technische Details

- Route-Files: `src/routes/impressum.tsx` und `src/routes/datenschutz.tsx` (TanStack file-based routing)
- Jede Route mit eigenem `head()` (Title, Description, `robots: noindex, follow` für Impressum/Datenschutz — Standardpraxis)
- Cookie-Banner als eigene Komponente `src/components/CookieBanner.tsx`, in `__root.tsx` gemountet
- Favicon per `imagegen--generate_image` (transparenter Hintergrund, quadratisch)
- 404-Redesign direkt in `__root.tsx` (NotFoundComponent)

## Was NICHT dazugehört (kommt in späteren Tickets)
- Vorher/Nachher-Galerie
- Online-Booking-Integration
- Blog / FAQ
- Google Analytics

Sag mir kurz Bescheid mit den 4 Infos oben, dann setze ich alles in einem Rutsch um.
