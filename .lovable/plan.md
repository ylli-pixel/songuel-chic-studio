## Plan: Echte Salon-Fotos einbinden

### Was ich mit den 4 hochgeladenen Bildern mache

1. **`hair_by_songuel.jpg`** (Blondes Balayage, Kamm im Haar) → **Hero-Bild** (Startsektion). Perfekt: zeigt Handwerk, professionelle Umgebung, Premium-Look.
2. **`haiurbaysionmguel.jpg`** (Dunkle Locken, Extensions) → **Galerie #1** + evtl. About-Sektion.
3. **`hairbysonguel.jpg`** (Blonde Locken von hinten) → **Galerie #2**.
4. **`haiur_bysonmguel.jpg`** (Langes Balayage, Mirror-Selfie) → **Galerie #3**.

Die restlichen 3 KI-Galeriebilder (g4, g5, g6) werden entfernt oder durch neue echte Fotos ersetzt — die Galerie wird auf 4 Bilder verkleinert, bis mehr Material da ist.

### Was ich noch an Bildern brauchen würde (ideal)

Damit die Website komplett authentisch wird, wären folgende Fotos hilfreich:

**Wichtig (für About & Vertrauen):**
- **Portrait von Sonuel** (Coiffeuse selbst, freundlich, im Salon) — für die About-Sektion. Baut sofort Vertrauen auf.
- **Innenraum-Foto des Salons** (Weitwinkel, Empfang oder Stuhlbereich) — zeigt die Atmosphäre.

**Nice-to-have (für Galerie & Services):**
- 2–3 weitere Vorher/Nachher-Ergebnisse (verschiedene Farben: kupfer/rot, kurze Schnitte, Hochsteckfrisur)
- Detail-Foto: Hände bei der Arbeit (Farbe mischen, Föhnen, Balayage-Technik)
- Ein Braut-/Hochzeitsfrisur-Foto (falls vorhanden)
- Aussenaufnahme des Ladens (Fassade Bahnhofstrasse 33)

### Format-Tipps
- Hochformat oder quadratisch ist ok — ich schneide passend zu.
- Möglichst scharf, gutes Licht (keine dunklen Handy-Schnappschüsse).
- Wenn Gesichter drauf sind: Einverständnis der Kundinnen sicherstellen.

### Umsetzung
- Ich lade die 4 Bilder als Lovable-Assets hoch (CDN).
- Ersetze in `src/routes/index.tsx`: Hero-Bild + die ersten 3 Galerie-Bilder.
- Entferne die übrigen KI-Bilder aus Galerie & About (About bekommt Platzhalter oder eins der neuen Bilder, bis Portrait da ist).

**Sag mir:** Soll ich mit den 4 aktuellen Bildern starten, oder wartest du noch auf ein Portrait/Innenraumfoto, damit ich alles auf einmal mache?