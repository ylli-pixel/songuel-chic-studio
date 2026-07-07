## Status Bilder

Alle sichtbaren Bildplätze auf der Website sind mit echten Fotos gefüllt:
- **Hero** — Balayage-Arbeit
- **About** — Portrait von Sonĝuel mit Kundin
- **Galerie** — 4 Ergebnis-Fotos + Salon-Interieur

Ein Ding fehlt aber noch technisch: das **Social-Sharing-Bild (og:image)**. Aktuell zeigt die Website beim Teilen auf WhatsApp/Instagram/Google einen alten Lovable-Preview-Screenshot statt eines echten Salon-Bildes.

## Was ich vorschlage

**Ein sauberes og:image (1200×630 px) erstellen** — das Format, das WhatsApp, Facebook, LinkedIn und Google erwarten. Ich nehme das Hero-Foto als Basis und rahme es passend, dezent mit dem Salon-Namen als Overlay.

### Schritte

1. Aus dem bestehenden Hero-Foto ein 1200×630-Bild rendern (via `imagegen--edit_image`, re-framed) mit sanftem Overlay-Text „Hairbysonguel · Dübendorf".
2. Als CDN-Asset hochladen (`og-image.jpeg.asset.json`).
3. In `src/routes/__root.tsx` die veralteten og:image / twitter:image / Lovable-Default-Meta-Tags durch die neue absolute URL ersetzen.
4. Duplikat-Meta-Tags („Lovable App"-Titel, doppelte Description) aufräumen, damit nur die echten Hairbysonguel-Werte greifen.

### Danach fertig mit Bildern

Nach diesem Schritt ist visuell alles rund. Weitere Bilder (Fassade Bahnhofstrasse 33, Vorher/Nachher-Paare, Detailaufnahmen bei der Arbeit) wären nice-to-have — brauchen aber Fotos von dir und sind kein Muss für den Launch.
