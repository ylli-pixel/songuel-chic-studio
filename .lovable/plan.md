# Plan: Kontakt-Bereich anpassen

## Ziel
E-Mail entfernen und Öffnungszeiten-Block durch einen Hinweis zu Terminvereinbarungen ersetzen, damit keine Walk-ins suggeriert werden.

## Änderungen in `src/routes/index.tsx`

1. **E-Mail entfernen**
   - Die `ContactRow` mit `Mail`-Icon und `hallo@hairbysonguel.ch` aus der Kontakt-Liste entfernen.

2. **Öffnungszeiten-Block entfernen**
   - Die `HOURS`-Konstante löschen (wird nur hier verwendet).
   - Den kompletten gerenderten Öffnungszeiten-Block (ab `<div className="mt-10 rounded-3xl bg-blush/60 p-6">`) entfernen.

3. **Hinweis zur Terminvereinbarung einfügen**
   - An der Stelle des Öffnungszeiten-Blocks einen kurzen Text einbauen:  
     „Termine nur nach Vereinbarung — am besten via WhatsApp.“

## Keine weiteren Dateien betroffen
Die Änderungen beschränken sich auf den `Contact`-Bereich in `src/routes/index.tsx`.