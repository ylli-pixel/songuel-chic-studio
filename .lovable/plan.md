Problem: In der Services-Sektion auf der Homepage erscheint bei Hover der Text "Mehr erfahren" mit einem Pfeil-Icon. Er ist in einem `<div>` und nicht klickbar, was für Nutzer verwirrend ist und keine Funktion hat.

Lösung: Den Hover-Call-to-Action aus jeder Service-Karte entfernen. Das betrifft nur die Zeilen im `SERVICES`-Map-Block in `src/routes/index.tsx`.

Änderung:
- Entferne den `<div>` mit "Mehr erfahren" und dem `<ArrowUpRight>`-Icon.
- Der Import von `ArrowUpRight` bleibt, falls er an anderer Stelle noch verwendet wird (z.B. im Hero-Button). Falls er danach nur noch dort verwendet wird, bleibt er bestehen.
- Keine neuen Dateien, keine neuen Abhängigkeiten.

Validierung: Build läuft durch, Vorschau zeigt Service-Karten ohne "Mehr erfahren"-Text.